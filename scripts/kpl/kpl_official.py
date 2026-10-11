# -*- coding: utf-8 -*-
"""
KPL 官方接口爬虫（A类·结构化数据）
全部走官方 JSON 接口，真实可爬，可信度=高。
复用自 生成KPL_RAG知识库模板.py 的接口逻辑。
"""
import requests
import time
from datetime import datetime
from functools import lru_cache

KPL_BASE = "https://kplshop-op.timi-esports.qq.com/kplow"
HEADERS = {"Referer": "https://kpl.qq.com/", "User-Agent": "Mozilla/5.0"}
POSITION_NAME = {1: "对抗路", 2: "中路", 3: "发育路", 4: "打野", 5: "辅助"}


def kpl_get(endpoint: str, params: dict) -> dict:
    url = f"{KPL_BASE}/{endpoint}"
    r = requests.get(url, params=params, headers=HEADERS, timeout=20)
    r.raise_for_status()
    return r.json()


@lru_cache(maxsize=32)
def list_teams(seasonid: str) -> tuple:
    """返回某赛季全部战队 (tuple of dict 便于缓存)。"""
    data = kpl_get("getSeasonAndStageAndTeamList", {"seasonid": seasonid}).get("data", {})
    teams = []
    for t in data.get("teams", []):
        if t.get("team_name"):
            teams.append({
                "team_id": t.get("teamid", ""),
                "team_name": t.get("team_name", ""),
                "team_logo": t.get("team_logo", ""),
                "sort": t.get("team_sort", 999),
            })
    teams.sort(key=lambda x: x["sort"])
    return tuple(teams)


@lru_cache(maxsize=32)
def list_schedules(seasonid: str) -> tuple:
    """返回某赛季全部赛程。"""
    data = kpl_get("getScheduleList", {"seasonid": seasonid}).get("data", {})
    out = []
    for s in data.get("list", []):
        ts = s.get("start_timestamp")
        try:
            dt = datetime.fromtimestamp(int(ts)) if ts else None
        except Exception:
            dt = None
        out.append({
            "scheduleid": s.get("scheduleid", ""),
            "seasonid": s.get("seasonid", ""),
            "stage_name": s.get("stage_name", ""),
            "timestamp": int(ts) if ts else 0,
            "date": dt.strftime("%Y-%m-%d") if dt else "",
            "datetime": dt.strftime("%Y-%m-%d %H:%M") if dt else "",
            "team_a_id": s.get("team_a_id", ""),
            "team_a_name": s.get("team_a_name", ""),
            "team_a_score": s.get("team_a_score", 0),
            "team_a_logo": s.get("team_a_logo", ""),
            "team_b_id": s.get("team_b_id", ""),
            "team_b_name": s.get("team_b_name", ""),
            "team_b_score": s.get("team_b_score", 0),
            "team_b_logo": s.get("team_b_logo", ""),
            "bo_total": s.get("bo_total", 0),
            "status": s.get("schedule_status", 0),  # 4=已结束
            "format": s.get("competition_format", ""),
            "location": s.get("location_name", ""),
        })
    return tuple(out)


def schedule_detail(seasonid: str, scheduleid: str) -> dict:
    """赛程详情：逐局首发 + 选手名册。"""
    data = kpl_get("getScheduleDetail", {"seasonid": seasonid, "scheduleid": scheduleid}).get("data", {})
    players = {}
    for p in data.get("players", []) or []:
        players[p.get("playerid", "")] = {
            "player_id": p.get("playerid", ""),
            "team_id": p.get("team_id", ""),
            "player_name": p.get("player_name", ""),
            "player_short": p.get("player_name_short", ""),
            "player_real": p.get("player_name_real", ""),
            "player_icon": p.get("player_icon", ""),
            "position": p.get("position", 0),
        }
    rounds = []
    for rd in data.get("round_details", []) or []:
        rounds.append({
            "round": rd.get("round", 0),
            "win_team": rd.get("win_team_name", ""),
            "players": rd.get("players", []),
        })
    return {"title": data.get("title", ""), "players": players, "rounds": rounds}


def filter_schedules(seasonid: str, team_a: str = "", team_b: str = "",
                     date_from: str = "", date_to: str = "") -> list:
    """按战队/对阵/时间段筛选赛程。team_a/team_b 为战队名(模糊匹配)。"""
    schedules = list(list_schedules(seasonid))
    ts_from = _date_to_ts(date_from, end=False)
    ts_to = _date_to_ts(date_to, end=True)

    def hit_team(s, name):
        if not name:
            return True
        return name in s["team_a_name"] or name in s["team_b_name"]

    def hit_vs(s, a, b):
        if not (a and b):
            return True
        names = {s["team_a_name"], s["team_b_name"]}
        return any(a in n for n in names) and any(b in n for n in names)

    res = []
    for s in schedules:
        if ts_from and s["timestamp"] and s["timestamp"] < ts_from:
            continue
        if ts_to and s["timestamp"] and s["timestamp"] > ts_to:
            continue
        if team_a and team_b:
            if not hit_vs(s, team_a, team_b):
                continue
        else:
            if not hit_team(s, team_a):
                continue
        res.append(s)
    return res


def _date_to_ts(d: str, end: bool) -> int:
    if not d:
        return 0
    try:
        dt = datetime.strptime(d, "%Y-%m-%d")
        if end:
            dt = dt.replace(hour=23, minute=59, second=59)
        return int(dt.timestamp())
    except Exception:
        return 0


def collect_players(seasonid: str, team_name: str = "", date_from: str = "", date_to: str = "") -> list:
    """
    汇总某赛季(可按战队/时间段过滤)的选手名册。
    通过遍历已结束赛程的详情，聚合 playerid→选手信息。
    """
    schedules = filter_schedules(seasonid, team_a=team_name, date_from=date_from, date_to=date_to)
    done = [s for s in schedules if s["status"] == 4]
    seen = {}
    for s in done:
        try:
            detail = schedule_detail(seasonid, s["scheduleid"])
        except Exception:
            continue
        for pid, p in detail["players"].items():
            if pid and pid not in seen:
                seen[pid] = p
        time.sleep(0.15)  # 控制节奏
    players = list(seen.values())
    if team_name:
        players = [p for p in players if team_name in p["player_name"]]
    players.sort(key=lambda x: (x["team_id"], x["position"]))
    return players
