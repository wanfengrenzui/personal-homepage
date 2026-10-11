const $ = id => document.getElementById(id);
const cols = ['主题/对象','知识类型','知识内容','解说具体场景','时效性','可信度','来源名称','来源链接','备注'];
let data, current = [];
function toast(text) { $('toast').textContent = text; $('toast').classList.add('show'); setTimeout(() => $('toast').classList.remove('show'), 2600); }
function selectRows(rows, conditions) {
  return rows.filter(row => {
    const text = Object.values(row).join(' ').toLowerCase();
    if (![conditions.a, conditions.b].every(t => !t || text.includes(t.toLowerCase()))) return false;
    if (conditions.player && !String(row['主题/对象'] || '').toLowerCase().includes(conditions.player.toLowerCase())) return false;
    if (conditions.from || conditions.to) {
      const dates = String(row['时效性'] || '').match(/\d{4}-\d{2}-\d{2}/g) || [];
      if (!dates.some(d => (!conditions.from || d >= conditions.from) && (!conditions.to || d <= conditions.to))) return false;
    }
    return true;
  });
}
function render() {
  $('result_count').textContent = current.length + ' 条';
  $('thead_row').replaceChildren(); $('tbody').replaceChildren();
  cols.forEach(c => { const th = document.createElement('th'); th.textContent = c; $('thead_row').append(th); });
  current.forEach(row => {
    const tr = document.createElement('tr');
    cols.forEach(c => {
      const td = document.createElement('td'); td.textContent = row[c] || '';
      if (c === '来源链接') {
        try { const url = new URL(row[c]); if (['https:','http:'].includes(url.protocol)) {const a = document.createElement('a'); a.href = url.href; a.textContent = row['来源名称'] || '查看来源'; a.target = '_blank'; a.rel = 'noopener noreferrer'; td.replaceChildren(a);} } catch {}
      }
      tr.append(td);
    }); $('tbody').append(tr);
  });
  $('empty').style.display = current.length ? 'none' : 'block';
  $('empty').textContent = '没有找到匹配结果。日期筛选仅包含有完整日期的知识块。';
  $('copy_btn').disabled = $('export_btn').disabled = !current.length;
}
$('run_btn').onclick = () => {
  const conditions = {a:$('team_a').value.trim(),b:$('team_b').value.trim(),player:$('player').value.trim(),from:$('date_from').value,to:$('date_to').value};
  if (conditions.from && conditions.to && conditions.from > conditions.to) return toast('开始日期不能晚于结束日期');
  current = selectRows(data.rows, conditions); render(); toast('检索完成，共 ' + current.length + ' 条');
};
$('copy_btn').onclick = async () => {
  const text = [cols, ...current.map(r => cols.map(c => String(r[c] || '').replace(/[\t\r\n]/g,' ')))].map(r => r.join('\t')).join('\n');
  try {await navigator.clipboard.writeText(text); toast('已复制，可直接粘贴到 Excel');} catch {toast('复制失败，请使用 Excel 导出');}
};
$('export_btn').onclick = () => {
  const bytes = makeXlsx([cols, ...current.map(r => cols.map(c => String(r[c] || '')))]);
  const url = URL.createObjectURL(new Blob([bytes], {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}));
  const a = document.createElement('a'); a.href = url; a.download = 'KPL_RAG_检索结果.xlsx'; a.click(); setTimeout(() => URL.revokeObjectURL(url),1000);
};
$('run_btn').disabled = true; $('copy_btn').disabled = $('export_btn').disabled = true;
fetch('../data.json', {cache:'no-store'}).then(r => {if(!r.ok) throw Error('HTTP '+r.status);return r.json();}).then(d => {
  data = d; $('run_btn').disabled = false;
  $('seasonid').replaceChildren(); const option = document.createElement('option'); option.value=d.season; option.textContent = d.season === 'KPL2026S2' ? '2026 夏季赛 (KPL2026S2)' : d.season; $('seasonid').append(option);
  $('run_hint').textContent = '最近成功更新：' + (d.last_success ? new Date(d.last_success).toLocaleString('zh-CN',{timeZone:'Asia/Shanghai'}) : '等待采集') + ' · ' + d.message;
}).catch(e => {$('run_hint').textContent = '数据加载失败：'+e.message;});
