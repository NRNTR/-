var currentVersion = 24;
var currentQuestion = 0;
var answers = [];
var totalQuestions = 24;
var scores = {};
var dimKeys = [];
var MD = {};
var lastResultText = '';
var currentQuestions = [];

var DC = {
  N: '#00e5ff',
  E: '#ff7043',
  A: '#e91e63',
  Ac: '#ffc107',
  So: '#4caf50'
};

function escapeHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function showPage(id) {
  var pages = ['bootPage','homePage','quizPage','resultPage','loadingPage','errorPage'];
  for (var i = 0; i < pages.length; i++) {
    var e = document.getElementById(pages[i]);
    if (e) e.classList.add('hidden');
  }
  var t = document.getElementById(id);
  if (t) t.classList.remove('hidden');
}

function initDims() {
  dimKeys = [];
  MD = MAIN_DIMS.main_dims || MAIN_DIMS;
  for (var k in MD) {
    if (MD[k] && MD[k].sub) {
      MD[k].sub.forEach(function(s) {
        if (dimKeys.indexOf(s) === -1) dimKeys.push(s);
      });
    }
    if (!MD[k].color) MD[k].color = DC[k] || '#00e5ff';
    if (!MD[k].label) MD[k].label = MAIN_DIMS.dim_labels ? MAIN_DIMS.dim_labels[k] : k;
  }
  scores = resetScores();
}

function resetScores() {
  var s = {};
  for (var i = 0; i < dimKeys.length; i++) s[dimKeys[i]] = 0;
  return s;
}

function getQuestionText(q) {
  if (!q) return '';
  if (Array.isArray(q)) return q[1] || '';
  return q.text || '';
}
function getQuestionOptions(q) {
  if (!q) return [];
  if (Array.isArray(q)) return q[3] || [];
  return q.options || [];
}
function getOptionText(opt) {
  if (!opt) return '';
  if (Array.isArray(opt)) return opt[0] || '';
  return opt.txt || opt.text || '';
}
function getOptionScores(opt) {
  if (!opt) return {};
  if (Array.isArray(opt)) return opt[1] || {};
  return opt.scores || {};
}

function filterQuestionsByVersion(num) {
  // 直接取前 N 题，最轻量
  return ALL_QUESTIONS.slice(0, Math.min(num, ALL_QUESTIONS.length));
}

function startQuiz(num) {
  currentVersion = num;
  currentQuestions = filterQuestionsByVersion(num);
  totalQuestions = currentQuestions.length;
  currentQuestion = 0;
  answers = [];
  scores = resetScores();
  var title = document.getElementById('quizTitle');
  if (title) title.style.display = 'none';
  showPage('quizPage');
  renderQuestion();
  window.scrollTo(0, 0);
}

function renderQuestion() {
  var q = currentQuestions[currentQuestion];
  if (!q) {
    document.getElementById('questionArea').innerHTML = '<div class="question-text">题目加载失败，请返回重试。</div>';
    return;
  }

  var questionText = getQuestionText(q);
  var options = getQuestionOptions(q);

  var h = '';
  h += '<div class="question-text">' + (currentQuestion + 1) + '. ' + escapeHtml(questionText) + '</div>';

  if (!options || !options.length) {
    h += '<div class="error-box">当前题目没有选项，请检查题库数据。</div>';
  } else {
    for (var i = 0; i < options.length; i++) {
      var sel = answers[currentQuestion] === i ? ' selected' : '';
      h += '<button type="button" class="option-btn' + sel + '" onclick="selectOption(' + i + ')">' + escapeHtml(getOptionText(options[i])) + '</button>';
    }
  }

  var area = document.getElementById('questionArea');
  if (area) area.innerHTML = h;

  var fill = document.getElementById('progressFill');
  if (fill) fill.style.width = (((currentQuestion + 1) / totalQuestions) * 100) + '%';

  var prev = document.getElementById('prevBtn');
  if (prev) prev.classList.toggle('hidden', currentQuestion === 0);
}

function recalcScores() {
  scores = resetScores();
  for (var qi = 0; qi < answers.length; qi++) {
    if (answers[qi] === undefined || answers[qi] === null) continue;
    var q = currentQuestions[qi];
    var options = getQuestionOptions(q);
    var opt = options[answers[qi]];
    if (!opt) continue;
    var scoreObj = getOptionScores(opt);
    for (var k in scoreObj) scores[k] = (scores[k] || 0) + scoreObj[k];
  }
}

function selectOption(idx) {
  answers[currentQuestion] = idx;
  recalcScores();
  var btns = document.querySelectorAll('.option-btn');
  for (var i = 0; i < btns.length; i++) btns[i].classList.toggle('selected', i === idx);

  setTimeout(function() {
    if (currentQuestion < totalQuestions - 1) {
      currentQuestion++;
      renderQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      recalcScores();
      showPage('loadingPage');
      animateLoading();
    }
  }, 180);
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function animateLoading() {
  var fill = document.getElementById('loadProgressFill');
  if (!fill) {
    setTimeout(calcResult, 400);
    return;
  }
  var w = 0;
  fill.style.width = '0%';
  var iv = setInterval(function() {
    w += 5;
    fill.style.width = w + '%';
    if (w >= 100) {
      clearInterval(iv);
      setTimeout(calcResult, 200);
    }
  }, 40);
}

function calcMainDimScores() {
  var m = {};
  for (var k in MD) {
    if (MD[k] && MD[k].sub) {
      var t = 0;
      MD[k].sub.forEach(function(s) { t += scores[s] || 0; });
      m[k] = t;
    }
  }
  return m;
}

function normalizeScores(main) {
  var n = {};
  for (var k in main) {
    var v = Math.round((main[k] / Math.max(1, totalQuestions * 1.8)) * 100);
    n[k] = Math.max(10, Math.min(100, v));
  }
  return n;
}

function calcSubNormScores() {
  var n = {};
  for (var i = 0; i < dimKeys.length; i++) {
    var k = dimKeys[i];
    n[k] = Math.max(10, Math.min(100, Math.round(((scores[k] || 0) / Math.max(1, totalQuestions * 0.6)) * 100)));
  }
  return n;
}

function classifyLevel(v) {
  if (v >= 70) return 'H';
  if (v >= 40) return 'M';
  return 'L';
}
function normalizePatternValue(v) {
  var p = String(v || '').toUpperCase();
  if (p === 'HIGH') return 'H';
  if (p === 'MID') return 'M';
  if (p === 'MIDDLE') return 'M';
  if (p === 'LOW') return 'L';
  return p;
}
function nearMatch(patternValue, levelValue) {
  var p = normalizePatternValue(patternValue);
  if (p === 'H' && levelValue === 'M') return true;
  if (p === 'M' && levelValue !== 'L') return true;
  if (p === 'L' && levelValue === 'M') return true;
  return false;
}

function pickPersonalityByRules(norm) {
  // 规则优先：更快更稳，不再走超复杂全匹配
  var N = norm.N || 0;
  var E = norm.E || 0;
  var A = norm.A || 0;
  var Ac = norm.Ac || 0;
  var So = norm.So || 0;

  if (So <= 28 && E <= 28 && Ac <= 30) return 'shuziyouling';
  if (So <= 38 && E <= 35 && Ac <= 38) return 'qianshuiting';
  if (A >= 72) return 'gangjingshengti';
  if (A >= 60 && A >= E) return 'saibopanquan';
  if (N >= 70 && Ac >= 65 && E >= 55) return 'chiguayixian';
  if (N >= 70 && Ac <= 45 && E <= 45) return 'saibokaogu';
  if (E >= 70 && Ac >= 65) return 'gengwang';
  if (E >= 65 && Ac >= 60 && So >= 55) return 'lezeren';
  if (So >= 68 && Ac >= 58) return 'saibopusa';
  if (So_identityScore() >= 65) return 'renshesheji';
  if (N >= 65 && E <= 45 && So <= 50) return 'dianzicangshu';
  if (N >= 60 && So <= 45 && E <= 45 && Ac <= 55) return 'wangluojieliu';
  if (N >= 60 && E >= 55 && A <= 45) return 'shenyeemo';
  if (Ac >= 68 && N >= 55) return 'shuziyoumin';
  if (N >= 55 && E <= 45 && A <= 45) return 'saiboliulangzhe';
  return 'fuduji';
}

function So_identityScore(){
  return (scores.So_identity || 0) * 12;
}

function matchPersonality(norm) {
  var pickedCode = pickPersonalityByRules(norm);
  var found = null;
  for (var i = 0; i < PERSONALITIES.length; i++) {
    if (PERSONALITIES[i].code === pickedCode) {
      found = PERSONALITIES[i];
      break;
    }
  }
  if (found) return found;

  // 兜底：用简单评分
  var subNorm = calcSubNormScores();
  var merged = {};
  for (var k in norm) merged[k] = norm[k];
  for (var s in subNorm) merged[s] = subNorm[s];

  var lv = {};
  for (var key in merged) lv[key] = classifyLevel(merged[key]);

  var ranked = [];
  PERSONALITIES.forEach(function(p) {
    var pat = p.pattern || {};
    var sc = 0;
    for (var dk in pat) {
      if (lv[dk] === undefined) continue;
      var pv = normalizePatternValue(pat[dk]);
      if (pv === lv[dk]) sc += 3;
      else if (nearMatch(pv, lv[dk])) sc += 1;
      else sc -= 1;
    }
    ranked.push({ p:p, sc:sc });
  });

  ranked.sort(function(a,b){ return b.sc - a.sc; });
  if (!ranked.length) return PERSONALITIES[0];

  var topScore = ranked[0].sc;
  var topList = ranked.filter(function(item){ return item.sc >= topScore - 1; });

  return topList[Math.floor(Math.random() * topList.length)].p;
}

var modalCb = null;
function showModal(t, b, cb) {
  modalCb = cb;
  var modalBox = document.getElementById('modalBox');
  var ov = document.getElementById('modalOverlay');
  if (!modalBox || !ov) { if (cb) cb(); return; }
  modalBox.innerHTML = '<h3>' + escapeHtml(t) + '</h3>' + '<div class="rarity-text">' + escapeHtml(b) + '</div>' + '<button class="btn btn-primary" onclick="closeModal()">确认</button>';
  ov.style.display = 'flex';
}
function closeModal() {
  var ov = document.getElementById('modalOverlay');
  if (ov) ov.style.display = 'none';
  var cb = modalCb; modalCb = null;
  if (cb) cb();
}

function getRarityPercent(p) {
  var r = p.rarity || '';
  if (r.indexOf('传说') !== -1) return (Math.random() * 2 + 1).toFixed(1);
  if (r.indexOf('稀有') !== -1) return (Math.random() * 5 + 4).toFixed(1);
  return (Math.random() * 12 + 10).toFixed(1);
}

function calcResult() {
  recalcScores();
  var main = calcMainDimScores();
  var norm = normalizeScores(main);
  var p = matchPersonality(norm);
  var rp = getRarityPercent(p);
  showModal('你的结果：' + p.name, '稀有度：约占测试人群 ' + rp + '%', function() {
    renderResult(p, norm, rp);
  });
}

function renderResult(p, norm, rp) {
  showPage('resultPage');
  var resultHeader = document.getElementById('resultHeader');
  var resultDesc = document.getElementById('resultDesc');
  var resultTraits = document.getElementById('resultTraits');
  var resultQuotes = document.getElementById('resultQuotes');
  var resultTip = document.getElementById('resultTip');

  var name = p.name || '未知人格';
  var desc = p.desc || '';
  var suggestions = p.suggestions || p.tip || '';
  var comments = p.common_comments || p.quotes || [];
  var traits = p.traits || [];

  if (resultHeader) {
    resultHeader.innerHTML = '<h2>' + escapeHtml(name) + '<span class="rarity-pill">稀有度 ' + escapeHtml(rp) + '%</span></h2>';
  }
  if (resultDesc) resultDesc.textContent = desc;

  if (resultTraits) {
    var th = '<h4>核心特质</h4><div class="trait-list">';
    traits.forEach(function(t) { th += '<span class="trait-pill">' + escapeHtml(t) + '</span>'; });
    th += '</div>';
    resultTraits.innerHTML = th;
  }

  if (resultQuotes) {
    if (comments.length) {
      resultQuotes.innerHTML =
        '<h4 style="margin-top:12px">常见评价</h4>' +
        '<div class="quote-list">' +
        comments.map(function(q) { return '<p>“' + escapeHtml(q) + '”</p>'; }).join('') +
        '</div>';
    } else {
      resultQuotes.innerHTML = '';
    }
  }

  if (resultTip) {
    resultTip.innerHTML =
      '<h4>给你的建议</h4>' +
      '<div class="tip-box">' +
      escapeHtml(suggestions) +
      '</div>';
  }

  lastResultText =
    '我的网络冲浪人格测试结果：' + name + '\n' +
    '稀有度：约占测试人群 ' + rp + '%\n\n' +
    desc + '\n\n' +
    '核心特质：' + traits.join('、') + '\n\n' +
    '建议：' + suggestions;

  setTimeout(function() { drawRadar(norm, ['N', 'E', 'A', 'Ac', 'So']); }, 300);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function drawRadar(norm, dimOrder) {
  var c = document.getElementById('radarCanvas');
  if (!c) return;

  var parentWidth = c.parentElement ? c.parentElement.clientWidth : 380;
  var size = Math.min(420, Math.max(280, parentWidth));
  c.width = size; c.height = size;

  var ctx = c.getContext('2d');
  var cx = size / 2;
  var cy = size / 2;
  var r = size * 0.33;
  var n = dimOrder.length;

  ctx.clearRect(0, 0, size, size);

  for (var l = 1; l <= 4; l++) {
    ctx.beginPath();
    for (var i = 0; i <= n; i++) {
      var a = Math.PI / 2 + (i % n) * 2 * Math.PI / n;
      var rr = r * l / 4;
      var x = cx + rr * Math.cos(a);
      var y = cy - rr * Math.sin(a);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  for (var j = 0; j < n; j++) {
    var a2 = Math.PI / 2 + j * 2 * Math.PI / n;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + r * Math.cos(a2), cy - r * Math.sin(a2));
    ctx.strokeStyle = 'rgba(255,255,255,0.14)';
    ctx.stroke();

    var label = MD[dimOrder[j]] && MD[dimOrder[j]].label ? MD[dimOrder[j]].label : dimOrder[j];
    ctx.fillStyle = '#dffaff';
    ctx.font = 'bold 14px Microsoft YaHei, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, cx + (r + 34) * Math.cos(a2), cy - (r + 34) * Math.sin(a2));
  }

  ctx.beginPath();
  for (var k = 0; k <= n; k++) {
    var a3 = Math.PI / 2 + (k % n) * 2 * Math.PI / n;
    var dim = dimOrder[k % n];
    var v = Math.max(0.18, (norm[dim] || 0) / 100);
    var rr2 = r * v;
    var x2 = cx + rr2 * Math.cos(a3);
    var y2 = cy - rr2 * Math.sin(a3);
    if (k === 0) ctx.moveTo(x2, y2);
    else ctx.lineTo(x2, y2);
  }
  ctx.closePath();
  ctx.fillStyle = 'rgba(0,229,255,0.16)';
  ctx.fill();
  ctx.strokeStyle = '#00e5ff';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  for (var m = 0; m < n; m++) {
    var a4 = Math.PI / 2 + m * 2 * Math.PI / n;
    var dim2 = dimOrder[m];
    var v2 = Math.max(0.18, (norm[dim2] || 0) / 100);
    var rr3 = r * v2;
    ctx.beginPath();
    ctx.arc(cx + rr3 * Math.cos(a4), cy - rr3 * Math.sin(a4), 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#ff7043';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
}

function copyResultText() {
  if (!lastResultText) { alert('暂无结果可复制'); return; }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(lastResultText).then(function() { alert('结果文字已复制'); }).catch(function() { fallbackCopy(lastResultText); });
  } else fallbackCopy(lastResultText);
}

function fallbackCopy(text) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); alert('结果文字已复制'); }
  catch (e) { alert('复制失败，请手动复制结果文字'); }
  document.body.removeChild(ta);
}

function restartQuiz() {
  scores = resetScores();
  answers = [];
  currentQuestion = 0;
  totalQuestions = currentVersion;
  var title = document.getElementById('quizTitle');
  if (title) title.style.display = '';
  showPage('homePage');
  window.scrollTo(0, 0);
}

function loadSource() {
  initDims();
  showPage('homePage');
}

window.addEventListener('DOMContentLoaded', function() {
  loadSource();
});
