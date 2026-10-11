let all = [], filtered = [], page = 1;
const size = 30, $ = id => document.getElementById(id);
function el(tag, text, cls) { const node = document.createElement(tag); node.textContent = text; if (cls) node.className = cls; return node; }
function render() {
  const query = $('search').value.trim().toLowerCase();
  filtered = all.filter(row => (!query || Object.values(row).join(' ').toLowerCase().includes(query)) && (!$('type').value || row['知识类型'] === $('type').value) && (!$('batch').value || row['数据批次'] === $('batch').value));
  const pages = Math.max(1, Math.ceil(filtered.length / size)); page = Math.min(page, pages);
  $('results').replaceChildren();
  filtered.slice((page - 1) * size, page * size).forEach(row => {
    const card = el('article', '', 'card'); card.append(el('h2', row['主题/对象']));
    card.append(el('div', [row['知识类型'], row['数据批次'], row['可信度'] && '可信度：' + row['可信度']].filter(Boolean).join(' · '), 'tags'));
    card.append(el('p', row['知识内容'], 'content'));
    card.append(el('p', '解说场景：' + (row['解说具体场景'] || '—'), 'meta'));
    card.append(el('p', '时效：' + (row['时效性'] || '—') + ' · ' + (row['来源名称'] || '来源见链接'), 'meta'));
    try { const url = new URL(row['来源链接']); if (['http:', 'https:'].includes(url.protocol)) { const a = el('a', '查看来源 ↗'); a.href = url.href; a.target = '_blank'; a.rel = 'noopener noreferrer'; card.append(a); } } catch {}
    $('results').append(card);
  });
  if (!filtered.length) $('results').append(el('p', '没有找到匹配的知识块。'));
  $('count').textContent = `共 ${all.length} 条，筛选 ${filtered.length} 条`;
  $('page').textContent = `${page} / ${pages}`; $('prev').disabled = page === 1; $('next').disabled = page === pages;
}
['search', 'type', 'batch'].forEach(id => $(id).addEventListener(id === 'search' ? 'input' : 'change', () => { page = 1; render(); }));
$('prev').onclick = () => { page--; render(); }; $('next').onclick = () => { page++; render(); };
$('filtered').onclick = () => {
  const cols = ['主题/对象','知识类型','知识内容','解说具体场景','时效性','可信度','来源名称','来源链接','备注'];
  const quote = value => '"' + String(value ?? '').replace(/^[=+@-]/, "'$&").replace(/"/g, '""') + '"';
  const csv = [cols, ...filtered.map(row => cols.map(c => row[c]))].map(row => row.map(quote).join(',')).join('\r\n');
  const url = URL.createObjectURL(new Blob(['\ufeff', csv], {type:'text/csv;charset=utf-8'})); const a = el('a',''); a.href = url; a.download = '王者RAG_筛选结果.csv'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
};
fetch('data.json', {cache:'no-store'}).then(r => {if (!r.ok) throw Error('HTTP ' + r.status); return r.json();}).then(data => {
  all = data.rows;
  [...new Set(all.map(row => row['知识类型']).filter(Boolean))].sort().forEach(t => {const option = el('option', t); option.value = t; $('type').append(option);});
  const stamp = data.last_success ? new Date(data.last_success).toLocaleString('zh-CN', {timeZone:'Asia/Shanghai'}) : '尚未完成首次自动采集';
  $('status').textContent = `赛季 ${data.season} · 最近成功采集：${stamp}（北京时间） · ${data.message || ''}`;
  render();
}).catch(error => {$('status').textContent = '知识库加载失败，请稍后刷新：' + error.message;});
