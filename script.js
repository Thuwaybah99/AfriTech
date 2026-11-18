/* Kigali personal website — no libraries, build tools or API keys needed. */
'use strict';

// The original filenames are EXACTLY those published in your GitHub repository.
// On GitHub Pages they are loaded from the SAME folder as index.html.
// If you run download_photos.py, /images copies are preferred automatically.
const BASE = 'WhatsApp Image 2026-11-18 at ';
const PHOTO_DATA = [
  {key:'sudan',suffix:'07.54.36 (1).jpeg',title:'Representing Sudan',category:'journey'},
  {key:'airport',suffix:'07.54.36.jpeg',title:'Off to Kigali',category:'journey'},
  {key:'tiri',suffix:'07.54.46 (1).jpeg',title:'Meeting Tiri',category:'people'},
  {key:'hiking',suffix:'07.54.46.jpeg',title:'Hiking in Rwanda',category:'nature'},
  {key:'natureOne',suffix:'07.54.47 (1).jpeg',title:'A moment in nature',category:'nature'},
  {key:'natureTwo',suffix:'07.54.47 (2).jpeg',title:'The beauty of Rwanda',category:'nature'},
  {key:'lab',suffix:'07.54.47 (3).jpeg',title:'Inside the AI lab',category:'learning'},
  {key:'professor',suffix:'07.54.47.jpeg',title:'Learning together',category:'learning'},
  {key:'participants',suffix:'07.54.48 (1).jpeg',title:'People from across Africa',category:'people'},
  {key:'girls',suffix:'07.54.50 (2).jpeg',title:'Friends for life',category:'people'},
  {key:'groupHike',suffix:'07.54.49.jpeg',title:'A group hike',category:'nature'},
  {key:'lastDay',suffix:'07.54.49 (5).jpeg',title:'The last day',category:'learning'},
  {key:'victory',suffix:'07.54.49 (4).jpeg',title:'The winning team',category:'win'},
  {key:'certificateGroup',suffix:'07.54.49 (3).jpeg',title:'Holding our certificate',category:'win'},
  {key:'friend',suffix:'07.54.49 (2).jpeg',title:'A new friendship',category:'people'},
  {key:'award',suffix:'07.54.49 (1).jpeg',title:'First place!',category:'win'}
].map(p=>({...p,filename:BASE+p.suffix}));
const byKey = Object.fromEntries(PHOTO_DATA.map(p=>[p.key,p]));
const GITHUB_RAW = 'https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/';
const toURL = p => './' + encodeURIComponent(p.filename);
const backupURL = p => GITHUB_RAW + encodeURIComponent(p.filename);

// If the image isn't locally present, try its public GitHub raw URL.
// An explanatory placeholder is only shown if BOTH fail.
function createImage(p, alt, eager=false) {
  const img=document.createElement('img');
  img.alt=alt||p.title;
  img.loading=eager?'eager':'lazy';
  img.decoding='async';
  img.src=toURL(p);
  img.dataset.key=p.key;
  let triedBackup=false;
  img.addEventListener('error',()=>{
    if(!triedBackup){triedBackup=true;img.src=backupURL(p);return;}
    const holder=img.closest('.media-photo, .gallery-card');
    if(holder){
      // Don't replace the whole card: its caption and click behavior must stay intact.
      img.style.opacity='0';
      holder.classList.add('broken-photo');
      const msg=document.createElement('span');msg.className='missing-note';
      msg.textContent='Photo unavailable — check the matching filename in the repository';
      holder.append(msg);
    }
  });
  return img;
}

// All large story photos are real images (not CSS background-image links).
document.querySelectorAll('.media-photo[data-photo]').forEach(holder=>{
  const p=byKey[holder.dataset.photo];
  if(p)holder.append(createImage(p,holder.dataset.alt,holder.classList.contains('hero-bg')));
});

// The photo journal is built from the 16 source photo links.
const grid=document.getElementById('galleryGrid');
const cards=[];
PHOTO_DATA.forEach((p,index)=>{
  const button=document.createElement('button');button.type='button';button.className='gallery-card';
  button.dataset.category=p.category;button.dataset.index=String(index);
  button.setAttribute('aria-label','Open photo: '+p.title);
  const photo=createImage(p,p.title);
  const caption=document.createElement('span');caption.className='gallery-info';
  const kind=document.createElement('span');kind.className='gallery-kind';kind.textContent=p.category.toUpperCase();
  const name=document.createElement('span');name.textContent=p.title;
  caption.append(kind,name);
  const plus=document.createElement('span');plus.className='gallery-plus';plus.textContent='↗';
  button.append(photo,caption,plus);grid.append(button);cards.push(button);
});

let shown=[...cards],active=0,returnFocus=null;
const lb=document.getElementById('lightbox'),lbImg=document.getElementById('lightboxImage');
const lbTitle=document.getElementById('lightboxText'),lbNum=document.getElementById('lightboxNumber');
function showPhoto(position){
  if(!shown.length)return;
  active=(position+shown.length)%shown.length;
  const card=shown[active],p=PHOTO_DATA[Number(card.dataset.index)];
  lbImg.onerror=()=>{lbImg.onerror=null;lbImg.src=backupURL(p);};
  lbImg.src=toURL(p);lbImg.alt=p.title;
  lbTitle.textContent=p.title;lbNum.textContent=`${active+1} / ${shown.length}`;
}
function openPhoto(card){returnFocus=card;showPhoto(shown.indexOf(card));lb.classList.add('open');lb.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');document.getElementById('closeLightbox').focus();}
function closePhoto(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');lbImg.removeAttribute('src');returnFocus?.focus();}
cards.forEach(card=>card.addEventListener('click',()=>openPhoto(card)));
document.getElementById('closeLightbox').addEventListener('click',closePhoto);
document.getElementById('prevPhoto').addEventListener('click',()=>showPhoto(active-1));
document.getElementById('nextPhoto').addEventListener('click',()=>showPhoto(active+1));
lb.addEventListener('click',e=>{if(e.target===lb)closePhoto();});
document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')closePhoto();if(e.key==='ArrowLeft')showPhoto(active-1);if(e.key==='ArrowRight')showPhoto(active+1);});

const count=document.getElementById('galleryCount');
function updateCount(){count.textContent=`SHOWING ${shown.length} OF ${PHOTO_DATA.length} MOMENTS`;}
updateCount();
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
  const filter=btn.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn));});
  cards.forEach(c=>{c.hidden=filter!=='all'&&c.dataset.category!==filter;});
  shown=cards.filter(c=>!c.hidden);updateCount();
}));

// YouTube's only reliable public video embed is an iframe. It cannot be copied
// into a local MP4 without access to the original video. Give a backup link.
const play=document.getElementById('playVideo');
play.addEventListener('click',()=>{
  const root=document.getElementById('videoEmbed');
  const iframe=document.createElement('iframe');
  iframe.src='https://www.youtube-nocookie.com/embed/RLwI9Q4_5gs?autoplay=1&rel=0&playsinline=1';
  iframe.title='Our first-place winning moment at A-IDI 2026';
  iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen=true;iframe.referrerPolicy='strict-origin-when-cross-origin';
  root.append(iframe);root.hidden=false;document.getElementById('videoCover').hidden=true;
});

// Navigation, reading progress and scroll effects.
const toggle=document.getElementById('menuToggle'),nav=document.getElementById('primaryNav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}));
const topButton=document.getElementById('toTop'),progress=document.getElementById('progress');
function onScroll(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%';topButton.classList.toggle('show',scrollY>900);}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
topButton.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
if('IntersectionObserver' in window){const obs=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target);}});},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));}
else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'));
