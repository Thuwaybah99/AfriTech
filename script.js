/* Inclusive Digital Industries AI Competition — interactive photo journal.
   Images are loaded directly from the public GitHub repository; no image copies needed. */
'use strict';

const PHOTO_DATA = [
  {
    "key": "journey1",
    "title": "The journey begins",
    "category": "journey",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/new/WhatsApp%20Image%202026-11-18%20at%2017.00.31.jpeg"
  },
  {
    "key": "journey2",
    "title": "Off to Kigali",
    "category": "journey",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/WhatsApp%20Image%202026-11-18%20at%2007.54.36.jpeg"
  },
  {
    "key": "journey3",
    "title": "On our way",
    "category": "journey",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/WhatsApp%20Image%202026-11-18%20at%2007.54.48%20%283%29.jpeg"
  },
  {
    "key": "learning1",
    "title": "Learning together",
    "category": "learning",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/WhatsApp%20Image%202026-11-18%20at%2007.54.47.jpeg"
  },
  {
    "key": "learning2",
    "title": "Inside the experience",
    "category": "learning",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/new/WhatsApp%20Image%202026-11-18%20at%2017.00.27.jpeg"
  },
  {
    "key": "learning3",
    "title": "Ideas in motion",
    "category": "learning",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/new/WhatsApp%20Image%202026-11-18%20at%2017.00.31%20%281%29.jpeg"
  },
  {
    "key": "learning4",
    "title": "Collaboration in action",
    "category": "learning",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/new/WhatsApp%20Image%202026-11-18%20at%2017.00.30%20%281%29.jpeg"
  },
  {
    "key": "learning5",
    "title": "Knowledge shared",
    "category": "learning",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/WhatsApp%20Image%202026-11-18%20at%2007.54.47%20%284%29.jpeg"
  },
  {
    "key": "learning6",
    "title": "New perspectives",
    "category": "learning",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/WhatsApp%20Image%202026-11-18%20at%2007.54.47%20%285%29.jpeg"
  },
  {
    "key": "people1",
    "title": "Connections across Africa",
    "category": "people",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/new/WhatsApp%20Image%202026-11-18%20at%2017.00.26%20%281%29.jpeg"
  },
  {
    "key": "people2",
    "title": "Together in Kigali",
    "category": "people",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/new/WhatsApp%20Image%202026-11-18%20at%2017.00.33.jpeg"
  },
  {
    "key": "people3",
    "title": "New friendships",
    "category": "people",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/new/WhatsApp%20Image%202026-11-18%20at%2017.00.32%20%281%29.jpeg"
  },
  {
    "key": "people4",
    "title": "The people who made it",
    "category": "people",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/new/WhatsApp%20Image%202026-11-18%20at%2017.00.30%20%282%29.jpeg"
  },
  {
    "key": "people5",
    "title": "Shared experiences",
    "category": "people",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/WhatsApp%20Image%202026-11-18%20at%2007.54.49.jpeg"
  },
  {
    "key": "people6",
    "title": "Memories together",
    "category": "people",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/WhatsApp%20Image%202026-11-18%20at%2007.54.49%20%285%29.jpeg"
  },
  {
    "key": "nature1",
    "title": "Kigali life · 01",
    "category": "nature",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/new/WhatsApp%20Image%202026-11-18%20at%2017.00.29%20%283%29.jpeg"
  },
  {
    "key": "nature2",
    "title": "Kigali life · 02",
    "category": "nature",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/new/WhatsApp%20Image%202026-11-18%20at%2017.00.27%20%281%29.jpeg"
  },
  {
    "key": "nature3",
    "title": "Kigali life · 03",
    "category": "nature",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/new/WhatsApp%20Image%202026-11-18%20at%2017.00.28%20%281%29.jpeg"
  },
  {
    "key": "nature4",
    "title": "Kigali life · 04",
    "category": "nature",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/new/WhatsApp%20Image%202026-11-18%20at%2017.00.30.jpeg"
  },
  {
    "key": "nature5",
    "title": "Kigali life · 05",
    "category": "nature",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/new/WhatsApp%20Image%202026-11-18%20at%2017.00.29%20%282%29.jpeg"
  },
  {
    "key": "nature6",
    "title": "Kigali life · 06",
    "category": "nature",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/new/WhatsApp%20Image%202026-11-18%20at%2017.00.28.jpeg"
  },
  {
    "key": "nature7",
    "title": "Kigali life · 07",
    "category": "nature",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/new/WhatsApp%20Image%202026-11-18%20at%2017.00.26.jpeg"
  },
  {
    "key": "nature8",
    "title": "Kigali life · 08",
    "category": "nature",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/new/WhatsApp%20Image%202026-11-18%20at%2017.00.29%20%281%29.jpeg"
  },
  {
    "key": "victory",
    "title": "The winning team",
    "category": "win",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/WhatsApp%20Image%202026-11-18%20at%2007.54.49%20%284%29.jpeg"
  },
  {
    "key": "certificateGroup",
    "title": "Holding our certificate",
    "category": "win",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/WhatsApp%20Image%202026-11-18%20at%2007.54.49%20%283%29.jpeg"
  },
  {
    "key": "award",
    "title": "First place!",
    "category": "win",
    "url": "https://raw.githubusercontent.com/Thuwaybah99/AfriTech/main/WhatsApp%20Image%202026-11-18%20at%2007.54.49%20%281%29.jpeg"
  }
];
const byKey=Object.fromEntries(PHOTO_DATA.map(p=>[p.key,p]));
const imageURL=p=>p.url;

function createImage(p,alt,eager=false){
 const img=document.createElement('img');
 img.alt=alt||p.title;img.loading=eager?'eager':'lazy';img.decoding='async';
 img.src=imageURL(p);img.dataset.key=p.key;
 img.addEventListener('error',()=>{
  const holder=img.closest('.media-photo, .gallery-card');
  if(holder && !holder.classList.contains('broken-photo')){
   holder.classList.add('broken-photo');
   const note=document.createElement('span');note.className='missing-note';
   note.textContent='Photo unavailable — check the image in the AfriTech GitHub repository';holder.append(note);
  }
 });return img;
}

// Preserve original competition/win imagery; replace other editorial images with supplied sets.
const storyPhotos={airport:'journey2',participants:'people1',girls:'people2',tiri:'people3',natureOne:'nature1'};
document.querySelectorAll('.media-photo[data-photo]').forEach(holder=>{
 const key=storyPhotos[holder.dataset.photo]||holder.dataset.photo;const p=byKey[key];
 if(p)holder.append(createImage(p,holder.dataset.alt,holder.classList.contains('hero-bg')));
});

const grid=document.getElementById('galleryGrid');const cards=[];
PHOTO_DATA.forEach((p,index)=>{
 const button=document.createElement('button');button.type='button';button.className='gallery-card';
 button.dataset.category=p.category;button.dataset.index=String(index);button.setAttribute('aria-label','Open photo: '+p.title);
 const photo=createImage(p,p.title);
 const caption=document.createElement('span');caption.className='gallery-info';
 const kind=document.createElement('span');kind.className='gallery-kind';kind.textContent=({nature:'KIGALI LIFE',journey:'THE JOURNEY',learning:'LEARNING',people:'PEOPLE',win:'OUR WIN'})[p.category];
 const name=document.createElement('span');name.textContent=p.title;caption.append(kind,name);
 const plus=document.createElement('span');plus.className='gallery-plus';plus.textContent='↗';
 button.append(photo,caption,plus);grid.append(button);cards.push(button);
});
let shown=[...cards],active=0,returnFocus=null;
const lb=document.getElementById('lightbox'),lbImg=document.getElementById('lightboxImage');
const lbTitle=document.getElementById('lightboxText'),lbNum=document.getElementById('lightboxNumber');
function showPhoto(position){
 if(!shown.length)return;active=(position+shown.length)%shown.length;
 const card=shown[active],p=PHOTO_DATA[Number(card.dataset.index)];
 lbImg.src=imageURL(p);lbImg.alt=p.title;lbTitle.textContent=p.title;lbNum.textContent=`${active+1} / ${shown.length}`;
}
function openPhoto(card){returnFocus=card;showPhoto(shown.indexOf(card));lb.classList.add('open');lb.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');document.getElementById('closeLightbox').focus();}
function closePhoto(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');lbImg.removeAttribute('src');returnFocus?.focus();}
cards.forEach(card=>card.addEventListener('click',()=>openPhoto(card)));
document.getElementById('closeLightbox').addEventListener('click',closePhoto);
document.getElementById('prevPhoto').addEventListener('click',()=>showPhoto(active-1));
document.getElementById('nextPhoto').addEventListener('click',()=>showPhoto(active+1));
lb.addEventListener('click',e=>{if(e.target===lb)closePhoto();});
document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')closePhoto();if(e.key==='ArrowLeft')showPhoto(active-1);if(e.key==='ArrowRight')showPhoto(active+1);
 if(e.key==='Tab'){const buttons=[...lb.querySelectorAll('button')];const i=buttons.indexOf(document.activeElement);if(e.shiftKey&&i===0){e.preventDefault();buttons[buttons.length-1].focus();}else if(!e.shiftKey&&i===buttons.length-1){e.preventDefault();buttons[0].focus();}}
});
const count=document.getElementById('galleryCount');
function updateCount(){count.textContent=`SHOWING ${shown.length} OF ${PHOTO_DATA.length} MOMENTS`;}
const counter=document.getElementById('allMomentsCount');if(counter)counter.textContent=PHOTO_DATA.length;
document.querySelectorAll('[data-filter]').forEach(btn=>{
 const n=PHOTO_DATA.filter(p=>btn.dataset.filter==='all'||p.category===btn.dataset.filter).length;
 if(btn.dataset.filter!=='all'){const span=document.createElement('span');span.textContent=n;btn.append(span);}
 btn.addEventListener('click',()=>{
  const filter=btn.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn));});
  cards.forEach(c=>{c.hidden=filter!=='all'&&c.dataset.category!==filter;});
  shown=cards.filter(c=>!c.hidden);updateCount();
 });
});updateCount();

const play=document.getElementById('playVideo');
play.addEventListener('click',()=>{
 const root=document.getElementById('videoEmbed');const iframe=document.createElement('iframe');
 iframe.src='https://www.youtube-nocookie.com/embed/RLwI9Q4_5gs?autoplay=1&rel=0&playsinline=1';
 iframe.title='Our first-place winning moment at A-IDI 2026';
 iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
 iframe.allowFullscreen=true;iframe.referrerPolicy='strict-origin-when-cross-origin';
 root.append(iframe);root.hidden=false;document.getElementById('videoCover').hidden=true;
});
const toggle=document.getElementById('menuToggle'),nav=document.getElementById('primaryNav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}));
const topButton=document.getElementById('toTop'),progress=document.getElementById('progress');
function onScroll(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%';topButton.classList.toggle('show',scrollY>900);}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
topButton.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
if('IntersectionObserver' in window){const obs=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target);}});},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));}
else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'));
