
document.addEventListener('click',function(ev){var b=ev.target.closest('[data-copy]');if(b){var t=b.getAttribute('data-copy');var el=document.querySelector(t);var txt=el?(el.value||el.textContent):t;if(navigator.clipboard){navigator.clipboard.writeText(txt).then(function(){b.textContent='Copied'})}else{el&&el.select&&el.select();document.execCommand('copy');b.textContent='Copied'}}});
var mb=document.querySelector('.menubtn');if(mb){mb.addEventListener('click',function(){var n=document.getElementById('mainnav');var o=n.classList.toggle('open');mb.setAttribute('aria-expanded',o)})}
(function(){var box=document.getElementById('archive');if(!box)return;var data=JSON.parse(document.getElementById('archive-data').textContent);
var q=document.getElementById('q'),fs=document.getElementById('fshow'),ft=document.getElementById('ftopic'),fse=document.getElementById('fseason'),fv=document.getElementById('fvideo'),out=document.getElementById('list'),cnt=document.getElementById('count');
function render(){var s=q.value.toLowerCase();var res=data.filter(function(d){return(!s||d.t.indexOf(s)>-1)&&(!fs.value||d.s===fs.value)&&(!ft.value||d.tp.indexOf(ft.value)>-1)&&(!fse.value||d.se===fse.value)&&(!fv.value||(fv.value==='full'&&d.v===2)||(fv.value==='any'&&d.v>0)||(fv.value==='none'&&d.v===0))});
cnt.textContent=res.length+' of '+data.length+' episodes';out.innerHTML=res.map(function(d){return '<a class="row" href="'+d.u+'"><div class="rowart">'+d.i+'</div><div><h3>'+d.h+'</h3><div class="meta">'+d.m+'</div></div></a>'}).join('')}
[q,fs,ft,fse,fv].forEach(function(x){x.addEventListener('input',render)});render()})();

(function(){var rm0=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;if(!rm0&&'IntersectionObserver' in window){var io=new IntersectionObserver(function(en){en.forEach(function(x){var v=x.target;if(x.isIntersecting){v.play().catch(function(){})}else{v.pause()}})},{threshold:.4});document.querySelectorAll('video.inview').forEach(function(v){io.observe(v)})}})();
(function(){var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('video.clip.bg').forEach(function(v){if(rm){v.pause();v.removeAttribute('autoplay')}else if('IntersectionObserver' in window){new IntersectionObserver(function(en){en.forEach(function(x){x.isIntersecting?v.play().catch(function(){}):v.pause()})}).observe(v)}});
if(!rm)document.querySelectorAll('a.scard').forEach(function(a){var v=a.querySelector('video');if(!v)return;function go(){v.play().catch(function(){})}function st(){v.pause()}a.addEventListener('mouseenter',go);a.addEventListener('focus',go);a.addEventListener('mouseleave',st);a.addEventListener('blur',st)});
var tip=document.createElement('div');tip.id='bctip';document.body.appendChild(tip);
document.addEventListener('mouseover',function(ev){var a=ev.target.closest&&ev.target.closest('a.bc.on');if(!a){tip.style.display='none';return}tip.textContent=a.getAttribute('data-tip');tip.style.display='block'});
document.addEventListener('mousemove',function(ev){if(tip.style.display==='block'){tip.style.left=Math.min(ev.clientX+14,innerWidth-310)+'px';tip.style.top=(ev.clientY+16)+'px'}});
document.addEventListener('focusin',function(ev){var a=ev.target.closest&&ev.target.closest('a.bc.on');if(a){var r=a.getBoundingClientRect();tip.textContent=a.getAttribute('data-tip');tip.style.display='block';tip.style.left=Math.max(8,Math.min(r.left,innerWidth-310))+'px';tip.style.top=(r.bottom+8)+'px'}});
document.addEventListener('focusout',function(){tip.style.display='none'});
var w=document.getElementById('wall');if(w){var tiles=[].slice.call(w.querySelectorAll('.wt')),labs=[].slice.call(document.querySelectorAll('button.bcl[data-theme]')),gch=[].slice.call(document.querySelectorAll('#gtypes .chip')),cnt=document.getElementById('wallcount'),clr=document.getElementById('wclear'),cur='',curg='';
function apply(t,g){cur=t;curg=g;var n=0;tiles.forEach(function(x){var on=(!t||(x.getAttribute('data-t')||'').split(' ').indexOf(t)>-1)&&(!g||(x.getAttribute('data-g')||'').split(' ').indexOf(g)>-1);x.classList.toggle('dim',!on);if(on)n++});
[].slice.call(document.querySelectorAll('.bcrow[data-topic]')).forEach(function(r){var sel=r.getAttribute('data-topic')===t;r.classList.toggle('sel',sel);r.classList.toggle('dimrow',!!t&&!sel)});
gch.forEach(function(c){c.setAttribute('aria-pressed',c.getAttribute('data-gtype')===g?'true':'false')});
var nm=t&&labs.filter(function(l){return l.getAttribute('data-theme')===t})[0],gn=g&&gch.filter(function(c){return c.getAttribute('data-gtype')===g})[0];
var parts=[];if(nm)parts.push(nm.firstChild.textContent.trim());if(gn)parts.push(gn.textContent.trim());
cnt.textContent=(t||g)?(parts.join(' + ')+': '+n+' of '+tiles.length+' episodes'):(tiles.length+' episodes');clr.hidden=!(t||g)}
function url(){var q=[];if(cur)q.push('theme='+cur);if(curg)q.push('type='+curg);if(history.replaceState)history.replaceState(null,'',q.length?'?'+q.join('&'):location.pathname)}
labs.forEach(function(l){l.addEventListener('click',function(){var t=l.getAttribute('data-theme');t=(t===cur)?'':t;apply(t,curg);url();if(t){var f=document.querySelector('.wsea');if(f)window.scrollTo({top:f.getBoundingClientRect().top+scrollY-120,behavior:'smooth'})}})});
gch.forEach(function(c){c.addEventListener('click',function(){var g=c.getAttribute('data-gtype');g=(g===curg)?'':g;apply(cur,g);url();if(g){var f=document.querySelector('.wsea');if(f)window.scrollTo({top:f.getBoundingClientRect().top+scrollY-120,behavior:'smooth'})}})});
clr.addEventListener('click',function(){apply('','');url()});
var m=/[?&]theme=([a-z-]+)/.exec(location.search),m2=/[?&]type=([a-z]+)/.exec(location.search);if(m||m2)apply(m?m[1]:'',m2?m2[1]:'')}})();
