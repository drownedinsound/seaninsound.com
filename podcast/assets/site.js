
document.addEventListener('click',function(ev){var b=ev.target.closest('[data-copy]');if(b){var t=b.getAttribute('data-copy');var el=document.querySelector(t);var txt=el?(el.value||el.textContent):t;if(navigator.clipboard){navigator.clipboard.writeText(txt).then(function(){b.textContent='Copied'})}else{el&&el.select&&el.select();document.execCommand('copy');b.textContent='Copied'}}});
var mb=document.querySelector('.menubtn');if(mb){mb.addEventListener('click',function(){var n=document.getElementById('mainnav');var o=n.classList.toggle('open');mb.setAttribute('aria-expanded',o)})}
(function(){var box=document.getElementById('archive');if(!box)return;var data=JSON.parse(document.getElementById('archive-data').textContent);
var q=document.getElementById('q'),fs=document.getElementById('fshow'),ft=document.getElementById('ftopic'),fse=document.getElementById('fseason'),fv=document.getElementById('fvideo'),out=document.getElementById('list'),cnt=document.getElementById('count');
function render(){var s=q.value.toLowerCase();var res=data.filter(function(d){return(!s||d.t.indexOf(s)>-1)&&(!fs.value||d.s===fs.value)&&(!ft.value||d.tp.indexOf(ft.value)>-1)&&(!fse.value||d.se===fse.value)&&(!fv.value||(fv.value==='full'&&d.v===2)||(fv.value==='any'&&d.v>0)||(fv.value==='none'&&d.v===0))});
cnt.textContent=res.length+' of '+data.length+' episodes';out.innerHTML=res.map(function(d){return '<a class="row" href="'+d.u+'"><div class="rowart">'+d.i+'</div><div><h3>'+d.h+'</h3><div class="meta">'+d.m+'</div></div></a>'}).join('')}
[q,fs,ft,fse,fv].forEach(function(x){x.addEventListener('input',render)});render()})();

window.__ens=function(v){if(!v.getAttribute('src')&&v.dataset.src){v.src=v.dataset.src;v.load()}};
(function(){var KEY='dis-still',still=false;try{still=localStorage.getItem(KEY)==='1'}catch(e){}
var op=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){if(window.__still)return Promise.resolve();return op.apply(this,arguments)};
window.__still=still;
function sync(){document.querySelectorAll('video').forEach(function(v){if(window.__still)v.pause()});b.setAttribute('aria-pressed',window.__still?'true':'false');b.textContent=window.__still?'Play motion':'Pause motion'}
var b=document.createElement('button');b.type='button';b.className='motionbtn';b.setAttribute('aria-label','Pause or play moving images');
window.__playAll=function(){document.querySelectorAll('video').forEach(function(v){var r=v.getBoundingClientRect();if(v.classList.contains('bg')||(r.bottom>0&&r.top<innerHeight)){window.__ens&&window.__ens(v);v.muted=true;v.play().catch(function(){})}})};
b.addEventListener('click',function(){if(b.getAttribute('data-blocked')){b.removeAttribute('data-blocked');window.__still=false;window.__playAll();sync();return}window.__still=!window.__still;try{localStorage.setItem(KEY,window.__still?'1':'0')}catch(e){}if(!window.__still){window.__playAll()}sync()});
setTimeout(function(){var h=document.querySelector('video.clip.bg');if(h&&h.paused&&!window.__still&&!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)){b.setAttribute('data-blocked','1');b.textContent='Play motion';b.setAttribute('aria-pressed','false');b.classList.add('nudge')}},1800);
if(document.querySelector('video')){document.body.appendChild(b);sync()}})();
(function(){var rm0=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;if(window.matchMedia&&matchMedia('(hover: none)').matches)document.querySelectorAll('a.scard video').forEach(function(v){v.classList.add('inview')});if(!rm0&&'IntersectionObserver' in window){var io=new IntersectionObserver(function(en){en.forEach(function(x){var v=x.target;if(x.isIntersecting){window.__ens(v);v.play().catch(function(){})}else{v.pause()}})},{threshold:.2});document.querySelectorAll('video.inview').forEach(function(v){io.observe(v)})}})();
(function(){var vs=[].slice.call(document.querySelectorAll('video'));vs.forEach(function(v){v.muted=true;v.defaultMuted=true;v.setAttribute('playsinline','');v.setAttribute('webkit-playsinline','')});
var hv=document.querySelector('video.clip.bg');if(hv&&!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)){var go=function(){hv.play().then(function(){var bb=document.querySelector('.motionbtn');if(bb&&bb.getAttribute('data-blocked')){bb.removeAttribute('data-blocked');bb.textContent='Pause motion'}}).catch(function(){})};go();hv.addEventListener('loadeddata',go);['touchstart','touchend','pointerup','scroll','click'].forEach(function(ev){window.addEventListener(ev,function f(){go();if(!hv.paused)window.removeEventListener(ev,f)},{passive:true})})}})();
(function(){var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('video.clip.bg').forEach(function(v){if(rm){v.pause();v.removeAttribute('autoplay')}else if('IntersectionObserver' in window){new IntersectionObserver(function(en){en.forEach(function(x){x.isIntersecting?v.play().catch(function(){}):v.pause()})}).observe(v)}});
if(!rm)document.querySelectorAll('a.scard').forEach(function(a){var v=a.querySelector('video');if(!v)return;function go(){window.__ens(v);v.play().catch(function(){})}function st(){v.pause()}a.addEventListener('mouseenter',go);a.addEventListener('focus',go);a.addEventListener('mouseleave',st);a.addEventListener('blur',st)});
var tip=document.createElement('div');tip.id='bctip';document.body.appendChild(tip);
document.addEventListener('mouseover',function(ev){var a=ev.target.closest&&ev.target.closest('a.bc.on');if(!a){tip.style.display='none';return}tip.textContent=a.getAttribute('data-tip');tip.style.display='block'});
document.addEventListener('mousemove',function(ev){if(tip.style.display==='block'){tip.style.left=Math.min(ev.clientX+14,innerWidth-310)+'px';tip.style.top=(ev.clientY+16)+'px'}});
document.addEventListener('focusin',function(ev){var a=ev.target.closest&&ev.target.closest('a.bc.on');if(a){var r=a.getBoundingClientRect();tip.textContent=a.getAttribute('data-tip');tip.style.display='block';tip.style.left=Math.max(8,Math.min(r.left,innerWidth-310))+'px';tip.style.top=(r.bottom+8)+'px'}});
document.addEventListener('focusout',function(){tip.style.display='none'});
var w=document.getElementById('wall');if(w){var tiles=[].slice.call(w.querySelectorAll('.wt')),secs=[].slice.call(w.querySelectorAll('.wsea')),labs=[].slice.call(document.querySelectorAll('button.bcl[data-theme]')),gch=[].slice.call(document.querySelectorAll('#gtypes .chip')),cnt=document.getElementById('wallcount'),clr=document.getElementById('wclear'),qi=document.getElementById('eq'),si=document.getElementById('es'),vi=document.getElementById('ev'),cur='',curg='';
function apply(t,g){cur=t;curg=g;var q=qi.value.trim().toLowerCase(),sh=si.value,v=vi.value,n=0;
tiles.forEach(function(x){var d=x.dataset,ok=(!t||(d.t||'').split(' ').indexOf(t)>-1)&&(!g||(d.g||'').split(' ').indexOf(g)>-1)&&(!sh||d.s===sh)&&(!q||(d.q||'').indexOf(q)>-1)&&(!v||(v==='full'&&d.v==='2')||(v==='any'&&d.v!=='0')||(v==='none'&&d.v==='0'));x.hidden=!ok;if(ok)n++});
secs.forEach(function(sec){sec.hidden=!sec.querySelector('.wt:not([hidden])')});
[].slice.call(document.querySelectorAll('.bcrow[data-topic]')).forEach(function(r){var sel=r.getAttribute('data-topic')===t;r.classList.toggle('sel',sel);r.classList.toggle('dimrow',!!t&&!sel)});
gch.forEach(function(c){c.setAttribute('aria-pressed',c.getAttribute('data-gtype')===g?'true':'false')});
var any=t||g||q||sh||v;cnt.textContent=any?(n+' of '+tiles.length+' episodes'):(tiles.length+' episodes');clr.hidden=!any}
function url(){var a=[];if(cur)a.push('theme='+cur);if(curg)a.push('type='+curg);if(si.value)a.push('show='+si.value);if(qi.value.trim())a.push('q='+encodeURIComponent(qi.value.trim()));if(history.replaceState)history.replaceState(null,'',a.length?'?'+a.join('&'):location.pathname)}
function jump(){var f=document.querySelector('.wsea:not([hidden])');if(f)window.scrollTo({top:f.getBoundingClientRect().top+scrollY-120,behavior:'smooth'})}
labs.forEach(function(l){l.addEventListener('click',function(){var t=l.getAttribute('data-theme');t=(t===cur)?'':t;apply(t,curg);url();if(t)jump()})});
gch.forEach(function(c){c.addEventListener('click',function(){var g=c.getAttribute('data-gtype');g=(g===curg)?'':g;apply(cur,g);url();if(g)jump()})});
[qi,si,vi].forEach(function(x){x.addEventListener('input',function(){apply(cur,curg);url()})});
clr.addEventListener('click',function(){qi.value='';si.value='';vi.value='';apply('','');url()});
var P=function(k){var m=new RegExp('[?&]'+k+'=([^&]*)').exec(location.search);return m?decodeURIComponent(m[1]):''};
if(P('q'))qi.value=P('q');if(P('show'))si.value=P('show');apply(P('theme'),P('type'))}})();
