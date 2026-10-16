(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const root=document.documentElement;try{const sv=localStorage.getItem('vc-theme');if(sv)root.dataset.theme=sv}catch(e){}
$('.tg').addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('vc-theme',root.dataset.theme)}catch(e){}});
const nv=$('nav');$('.burger').addEventListener('click',()=>nv.classList.toggle('open'));$$('nav a').forEach(a=>a.addEventListener('click',()=>nv.classList.remove('open')));
const pg=location.pathname.split('/').pop()||'index.html';$$('nav a').forEach(a=>{if(a.getAttribute('href')===pg)a.classList.add('on')});
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});$$('.rv').forEach(el=>io.observe(el));
$$('.faq button').forEach(b=>b.addEventListener('click',()=>{const d=b.nextElementSibling,o=b.classList.toggle('on');d.style.maxHeight=o?d.scrollHeight+'px':0}));
const prices={m:['$5','/ month','Billed monthly'],y:['$60','/ year','Save by paying annually']};
$$('.sw').forEach(sw=>sw.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('button',sw).forEach(x=>x.classList.toggle('on',x===b));const p=prices[b.dataset.b],box=sw.closest('.card');$('.amt',box).innerHTML=p[0]+' <small>'+p[1]+'</small>';$('.bn',box).textContent=p[2];box.dataset.plan=b.dataset.b}));
document.body.insertAdjacentHTML('beforeend',`<div class="ov" id="ov" role="dialog" aria-modal="true" aria-label="Membership sign-up"><div class="md"><button class="x" aria-label="Close">✕</button><div class="eye">Membership sign-up</div><h3>Join the $5 Vacation Club</h3>
<label>Full name</label><input id="fn" placeholder="Full name" autocomplete="name"><label>Email address</label><input id="em" type="email" placeholder="you@email.com" autocomplete="email"><label>Phone number</label><input placeholder="Phone number" autocomplete="tel">
<label>Choose your plan</label><div class="plan on" data-p="60"><span><b>1 Year Membership</b><br><small>$60 yearly</small></span><b>$60.00</b></div><div class="plan" data-p="5"><span><b>Monthly Payment Plan</b><br><small>$5 monthly</small></span><b>$5.00</b></div>
<div class="tot"><span>Order total</span><span id="tt">$60.00</span></div><div class="pay"><button class="on">Card</button><button>Cash App</button></div>
<label>Card number</label><input placeholder="1234 1234 1234 1234" inputmode="numeric"><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div><label>Expiration</label><input placeholder="MM / YY"></div><div><label>Security code</label><input placeholder="CVC"></div></div>
<button class="btn" id="go">Complete your order</button><p class="fine">🔒 Demo checkout. Connect to the client's payment processor before launch.</p></div></div>`);
let closeP=()=>{};const ov=$('#ov'),pick=p=>{$$('.plan',ov).forEach(x=>x.classList.toggle('on',x.dataset.p===p));$('#tt').textContent='$'+p+'.00'},
open=p=>{ov.classList.add('open');document.body.style.overflow='hidden';pick(p);setTimeout(()=>$('#fn').focus(),300)},close=()=>{ov.classList.remove('open');document.body.style.overflow=''};
$$('.join').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();const c=b.closest('.card');open(c&&c.dataset.plan==='m'?'5':'60')}));
$('.x',ov).addEventListener('click',close);ov.addEventListener('click',e=>e.target===ov&&close());document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();closeP()}});
$$('.plan',ov).forEach(p=>p.addEventListener('click',()=>pick(p.dataset.p)));$$('.pay button',ov).forEach(b=>b.addEventListener('click',()=>$$('.pay button',ov).forEach(x=>x.classList.toggle('on',x===b))));
$('#go').addEventListener('click',()=>{const n=$('#fn').value.trim(),m=$('#em').value;if(!n||!/\S+@\S+\.\S+/.test(m)){alert('Please enter your name and a valid email.');return}const s=document.createElement('span');s.textContent=n.split(' ')[0];$('.md',ov).innerHTML='<div class="c" style="padding:40px 10px;text-align:center"><div style="font-size:56px">🌴</div><h3>Welcome, '+s.innerHTML+'!</h3><p style="color:var(--mut)">Demo only: connect a real payment processor to go live.</p></div>'});

document.body.insertAdjacentHTML('beforeend','<div class="ov" id="ov2" role="dialog" aria-modal="true"><div class="md wide"><button class="x" aria-label="Close">✕</button><div id="pc"></div></div></div>');
const ov2=$('#ov2'),pc=$('#pc');closeP=()=>{ov2.classList.remove('open');if(!ov.classList.contains('open'))document.body.style.overflow=''};
$('.x',ov2).addEventListener('click',closeP);ov2.addEventListener('click',e=>e.target===ov2&&closeP());
const showP=c=>{const t=c.querySelector('template');if(!t)return;pc.innerHTML=t.innerHTML;ov2.classList.add('open');document.body.style.overflow='hidden';$$('.join',pc).forEach(b=>b.addEventListener('click',e=>{e.preventDefault();closeP();open('60')}))};
$$('.pp').forEach(c=>{c.addEventListener('click',()=>showP(c));c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showP(c)}})});
})();