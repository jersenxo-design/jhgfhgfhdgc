/* QalaPass — front-end demo. Авторизация хранится в localStorage (не для настоящей безопасности). */
const CONTACTS={telegram:"https://t.me/jerryzzxo",telegramName:"@jerryzzxo",email:"jersenxo@gmail.com",whatsapp:"https://wa.me/77075599068",whatsappName:"+7 707 559 9068"};
const IMG=(id)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;
/* verified:true — дата подтверждена источником. Остальные — реальные площадки с регулярной программой: актуальные даты и цены смотри у организатора. */
const events=[
{id:"malikov",type:"concert",category:"Концерт",tag:"LIVE",title:"Юбилейный концерт Дмитрия Маликова",date:"17 ноября",ts:"2026-11-17",place:"Дворец Республики · Алматы",city:"Алматы",price:null,image:IMG("photo-1501386761578-eac5c94b800a"),desc:"Юбилейный тур к 55-летию артиста: живой звук, световое шоу и хиты, которые знают несколько поколений.",url:"https://sxodim.com/almaty/event/yubileynyy-koncert-dmitriya-malikova-v-almaty",verified:true},
{id:"qazaqconcert",type:"concert",category:"Концерт",tag:"LIVE",title:"Концерты в ЦКЗ «Казахстан»",date:"По афише зала",ts:"2027-01-01",place:"ЦКЗ «Казахстан» · Астана",city:"Астана",price:null,image:IMG("photo-1511192336575-5a79af67a629"),desc:"Главная концертная площадка столицы: поп, эстрада, классика и большие гастроли. Выбери вечер в афише зала.",url:"https://sxodim.com/astana",verified:false},
{id:"punch",type:"comedy",category:"Стендап",tag:"STAND-UP",title:"Вечера стендапа в Punch StandUp Club",date:"Регулярно, по выходным",ts:"2027-01-02",place:"Punch StandUp Club · Алматы",city:"Алматы",price:null,image:IMG("photo-1585699324551-f6c309eedeca"),desc:"Камерный зал, близкая сцена, бар и комики, которые проверяют свежий материал. Состав меняется — смотри актуальный в инстаграме клуба.",url:"https://sxodim.com/almaty",verified:false},
{id:"central",type:"comedy",category:"Стендап",tag:"STAND-UP",title:"Almaty Central Stand Up Club",date:"Регулярно",ts:"2027-01-03",place:"Almaty Central Stand Up Club · Алматы",city:"Алматы",price:null,image:IMG("photo-1527224538127-2104bb71c51b"),desc:"Один из самых больших стендап-клубов Центральной Азии. Шоу с известными комиками, 18+.",url:"https://sxodim.com/almaty",verified:false},
{id:"abai",type:"theatre",category:"Опера и балет",tag:"THEATRE",title:"Театр оперы и балета им. Абая",date:"По репертуару театра",ts:"2027-01-04",place:"Театр им. Абая · Алматы",city:"Алматы",price:null,image:IMG("photo-1503095396549-807759245b35"),desc:"Главная оперная сцена юга страны: классический балет, опера и гала-концерты в историческом здании.",url:"https://sxodim.com/almaty",verified:false},
{id:"bohme",type:"theatre",category:"Театр",tag:"THEATRE",title:"Театр La Bohême",date:"По афише театра",ts:"2027-01-05",place:"Театр La Bohême · Алматы",city:"Алматы",price:null,image:IMG("photo-1507676184212-d03ab07a01bf"),desc:"Камерные постановки и современный театр в Алматы. Подходит, если хочется театра без пафоса.",url:"https://sxodim.com/almaty",verified:false},
{id:"astanaopera",type:"theatre",category:"Опера и балет",tag:"THEATRE",title:"Астана Опера",date:"По репертуару театра",ts:"2027-01-06",place:"Астана Опера · Астана",city:"Астана",price:null,image:IMG("photo-1508700115892-45ecd05ae2ad"),desc:"Один из самых узнаваемых театров страны: оперные премьеры, балет и концерты симфонического оркестра.",url:"https://sxodim.com/astana",verified:false},
{id:"chaplin",type:"cinema",category:"Кино",tag:"CINEMA",title:"Новинки проката в Chaplin Cinemas",date:"Сеансы каждый день",ts:"2027-01-07",place:"Chaplin MEGA · Алматы",city:"Алматы",price:null,image:IMG("photo-1489599849927-2ee91cede3ba"),desc:"Свежие премьеры на большом экране. Расписание и цены на сеансы — на сайте кинотеатра.",url:"https://sxodim.com/almaty",verified:false},
{id:"kinopark",type:"cinema",category:"Кино",tag:"CINEMA",title:"Кино в Kinopark · Астана",date:"Сеансы каждый день",ts:"2027-01-08",place:"Kinopark · Астана",city:"Астана",price:null,image:IMG("photo-1478720568477-152d9b164e26"),desc:"Премьеры, IMAX и семейные сеансы. Выбирай фильм и время в расписании кинотеатра.",url:"https://sxodim.com/astana",verified:false}
];
const T={
ru:{navHome:"Главная",navEvents:"Афиша",navTours:"Туры",navAbout:"О нас",logout:"Выйти",heroTag:"ТВОЙ ГОРОД. ТВОИ ВПЕЧАТЛЕНИЯ.",heroTitle:"Планы, которые<br><em>запомнятся.</em>",heroText:"Концерты, театр, кино и маленькие путешествия — выбирай настроение, остальное мы уже нашли.",findEvent:"Найти событие ↗",exploreTours:"Исследовать туры →",catTitle:"Что тебе по душе?",allEvents:"Вся афиша ↗",concerts:"Концерты",concertDesc:"Живая музыка и большие сцены",theatre:"Театр",theatreDesc:"Истории, которые трогают",cinema:"Кино",cinemaDesc:"Большой экран, полный эффект",trips:"Туры",tripsDesc:"Сменить картинку за день",weekTitle:"Сейчас в афише",nlTitle:"Пусть хорошие планы<br>приходят сами.",nlText:"Раз в неделю — подборка событий, на которые правда хочется пойти.",nlLabel:"ТВОЯ ПОЧТА",nlPrivacy:"Никакого спама. Только поводы выйти.",footer:"Собирай впечатления, а не чеки."},
kk:{navHome:"Басты бет",navEvents:"Афиша",navTours:"Турлар",navAbout:"Біз туралы",logout:"Шығу",heroTag:"СЕНІҢ ҚАЛАҢ. СЕНІҢ ӘСЕРЛЕРІҢ.",heroTitle:"Есте қалатын<br><em>жоспарлар.</em>",heroText:"Концерттер, театр, кино және шағын саяхаттар — көңіл күйіңді таңда, қалғанын біз таптық.",findEvent:"Іс-шара табу ↗",exploreTours:"Турларды көру →",catTitle:"Саған не ұнайды?",allEvents:"Барлық афиша ↗",concerts:"Концерттер",concertDesc:"Жанды музыка мен үлкен сахна",theatre:"Театр",theatreDesc:"Жүрекке жететін оқиғалар",cinema:"Кино",cinemaDesc:"Үлкен экран, ерекше әсер",trips:"Турлар",tripsDesc:"Бір күнде жаңа әсер",weekTitle:"Қазір афишада",nlTitle:"Жақсы жоспарлар<br>өзі келсін.",nlText:"Аптасына бір рет — барғың келетін іс-шаралар топтамасы.",nlLabel:"ПОШТАҢ",nlPrivacy:"Спам жоқ. Тек жақсы ұсыныстар.",footer:"Чек емес, әсер жина."},
en:{navHome:"Home",navEvents:"What's on",navTours:"Trips",navAbout:"About",logout:"Log out",heroTag:"YOUR CITY. YOUR KIND OF FUN.",heroTitle:"Plans worth<br><em>remembering.</em>",heroText:"Gigs, theatre, movies and little escapes. Pick a mood — we've found the rest.",findEvent:"Find an event ↗",exploreTours:"Explore trips →",catTitle:"What are you in the mood for?",allEvents:"All events ↗",concerts:"Concerts",concertDesc:"Live music, big stages",theatre:"Theatre",theatreDesc:"Stories that stay with you",cinema:"Cinema",cinemaDesc:"The big screen experience",trips:"Trips",tripsDesc:"A change of scenery",weekTitle:"Now on",nlTitle:"Good plans,<br>straight to your inbox.",nlText:"A weekly shortlist of things actually worth going out for.",nlLabel:"YOUR EMAIL",nlPrivacy:"No spam. Just reasons to go out.",footer:"Collect memories, not receipts."}
};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const ls={get:(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set:(k,v)=>localStorage.setItem(k,JSON.stringify(v))};
const page=(location.pathname.split("/").pop()||"index.html").toLowerCase();
const price=p=>p?`от ${p.toLocaleString("ru-RU")} ₸`:"Цена у организатора";

/* ---------- AUTH ---------- */
async function sha(s){try{const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")}catch(e){let h=0;for(const c of s)h=(h*31+c.charCodeAt(0))|0;return"x"+h}}
const session=()=>ls.get("qalaSession",null);
function requireAuth(){if(page==="auth.html"){if(session())location.replace("index.html");return}if(!session())location.replace("auth.html")}
function setupAuth(){
  const tabs=$$(".tabs button");if(!tabs.length)return;
  const forms={login:$("#loginForm"),register:$("#registerForm")};
  tabs.forEach(t=>t.addEventListener("click",()=>{tabs.forEach(x=>x.classList.toggle("on",x===t));Object.entries(forms).forEach(([k,f])=>f.classList.toggle("hidden",k!==t.dataset.tab));$$(".auth-error").forEach(e=>e.textContent="")}));
  forms.register.addEventListener("submit",async e=>{e.preventDefault();const f=new FormData(e.target),err=$("#registerError"),email=f.get("email").trim().toLowerCase(),name=f.get("name").trim(),pass=f.get("password");
    if(pass.length<6)return err.textContent="Пароль — минимум 6 символов";if(pass!==f.get("password2"))return err.textContent="Пароли не совпадают";
    const users=ls.get("qalaUsers",{});if(users[email])return err.textContent="Такой аккаунт уже есть — войди";
    users[email]={name,hash:await sha(pass)};ls.set("qalaUsers",users);ls.set("qalaSession",{email,name});location.replace("index.html")});
  forms.login.addEventListener("submit",async e=>{e.preventDefault();const f=new FormData(e.target),err=$("#loginError"),email=f.get("email").trim().toLowerCase(),u=ls.get("qalaUsers",{})[email];
    if(!u||u.hash!==await sha(f.get("password")))return err.textContent="Неверная почта или пароль";ls.set("qalaSession",{email,name:u.name});location.replace("index.html")});
}
function logout(){localStorage.removeItem("qalaSession");location.replace("auth.html")}

/* ---------- CHROME (шапка и подвал) ---------- */
function renderChrome(){
  const h=$("#siteHeader"),f=$("#siteFooter");const s=session();
  const nav=[["index.html","navHome","Главная"],["events.html","navEvents","Афиша"],["tours.html","navTours","Туры"],["about.html","navAbout","О нас"]];
  const active=page==="event.html"?"events.html":page;
  if(h)h.outerHTML=`<header class="site-header"><a class="brand" href="index.html"><span class="brand-mark">Q</span><span>qala<span class="brand-light">pass</span></span></a><nav class="main-nav">${nav.map(n=>`<a href="${n[0]}" data-i18n="${n[1]}" class="${active===n[0]?"active":""}">${n[2]}</a>`).join("")}</nav><div class="header-tools"><select id="citySelect" aria-label="Город"><option>Алматы</option><option>Астана</option><option>Шымкент</option><option>Караганда</option></select><select id="langSelect" aria-label="Language"><option value="ru">RU</option><option value="kk">KZ</option><option value="en">EN</option></select><a class="icon-link" href="events.html#favorites" title="Избранное">♡</a><span class="user-chip">${(s?.name||"").replace(/[<>&]/g,"")}</span><button class="logout-btn" id="logoutBtn" data-i18n="logout">Выйти</button></div><button class="menu-toggle" aria-label="Меню">☰</button></header>`;
  if(f)f.outerHTML=`<footer class="footer"><a class="brand" href="index.html"><span class="brand-mark">Q</span><span>qala<span class="brand-light">pass</span></span></a><span data-i18n="footer">Собирай впечатления, а не чеки.</span><div class="footer-contacts"><a href="${CONTACTS.telegram}" target="_blank" rel="noreferrer">Telegram</a><a href="${CONTACTS.whatsapp}" target="_blank" rel="noreferrer">WhatsApp</a><a href="mailto:${CONTACTS.email}">E-mail</a></div><small>© 2026 QalaPass</small></footer>`;
}
function setLanguage(l){document.documentElement.lang=l;$$("[data-i18n]").forEach(el=>{const v=T[l]?.[el.dataset.i18n];if(v)el.innerHTML=v});ls.set("qalaLang",l)}
function setupChrome(){
  $("#logoutBtn")?.addEventListener("click",logout);
  $(".menu-toggle")?.addEventListener("click",()=>{$(".main-nav").classList.toggle("open");$(".site-header").classList.toggle("open-tools")});
  const city=$("#citySelect"),lang=$("#langSelect");
  if(city){city.value=ls.get("qalaCity","Алматы");city.addEventListener("change",()=>{ls.set("qalaCity",city.value);renderAll()})}
  if(lang){lang.value=ls.get("qalaLang","ru");lang.addEventListener("change",()=>setLanguage(lang.value))}
  setLanguage(ls.get("qalaLang","ru"));
}

/* ---------- EVENTS ---------- */
const favs=()=>ls.get("qalaFavorites",[]);
function cardHTML(e){const s=favs().includes(e.id);return`<article class="event-card reveal"><a href="event.html?id=${e.id}" class="event-image"><img src="${e.image}" alt="${e.title}" loading="lazy" onerror="this.remove()"><span class="event-type">${e.tag}</span><span class="date-badge">${e.date}</span></a><button class="favorite-btn ${s?"saved":""}" data-fav="${e.id}" aria-label="В избранное">${s?"♥":"♡"}</button><div class="event-info"><div class="event-meta"><span>${e.category}</span><span>${e.city}</span></div><h3><a href="event.html?id=${e.id}">${e.title}</a></h3><p>${e.desc.slice(0,95)}…</p><div class="event-bottom"><span>${price(e.price)}${e.verified?' <span class="verified">✓ дата подтверждена</span>':""}</span><a href="event.html?id=${e.id}">Подробнее ↗</a></div></div></article>`}
function sortByCity(a){const c=ls.get("qalaCity","Алматы");return[...a].sort((x,y)=>(y.city===c)-(x.city===c)||x.ts.localeCompare(y.ts))}
function bindFav(){$$("[data-fav]").forEach(b=>b.onclick=()=>{let f=favs(),id=b.dataset.fav;f=f.includes(id)?f.filter(x=>x!==id):[...f,id];ls.set("qalaFavorites",f);renderAll()})}
function reveal(){const io=new IntersectionObserver(en=>en.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});$$(".reveal:not(.in)").forEach(el=>io.observe(el))}
function renderHome(){const el=$("#homeEvents");if(el)el.innerHTML=sortByCity(events).slice(0,3).map(cardHTML).join("")}
function renderEvents(){const list=$("#eventsList");if(!list)return;const q=($("#eventSearch")?.value||"").toLowerCase(),type=$("#typeFilter")?.value||"all",sort=$("#sortFilter")?.value||"date";
  let a=events.filter(e=>(type==="all"||e.type===type)&&`${e.title} ${e.category} ${e.place} ${e.city}`.toLowerCase().includes(q));
  a=sort==="city"?sortByCity(a):a.sort((x,y)=>x.ts.localeCompare(y.ts));
  list.innerHTML=a.map(cardHTML).join("");$("#resultsCount").textContent=`Найдено: ${a.length}`;$("#emptyState").classList.toggle("hidden",a.length>0);
  const fl=$("#favoriteList");if(fl){const f=events.filter(e=>favs().includes(e.id));fl.innerHTML=f.length?f.map(cardHTML).join(""):'<p class="muted">Здесь пока пусто — нажми ♡ на карточке.</p>'}
  const fc=$("#favoritesCount");if(fc)fc.textContent=favs().length}
function renderDetail(){const el=$("#eventDetail");if(!el)return;const id=new URLSearchParams(location.search).get("id"),e=events.find(x=>x.id===id)||events[0];document.title=e.title+" — QalaPass";const s=favs().includes(e.id);
  el.innerHTML=`<div class="detail-poster"><img src="${e.image}" alt="${e.title}" onerror="this.remove()"></div><div class="detail-copy"><div class="event-meta"><span>${e.category}</span><span>${e.tag}</span></div><h1 style="font-size:clamp(2rem,4.5vw,3.4rem)">${e.title}</h1><p>${e.desc}</p><div class="detail-facts"><div><span>Дата</span><b>${e.date}</b></div><div><span>Место</span><b>${e.place}</b></div><div><span>Город</span><b>${e.city}</b></div><div><span>Билеты</span><b>${price(e.price)}</b></div></div><div class="detail-actions"><a class="button button-lime" href="${e.url}" target="_blank" rel="noreferrer">Билеты и расписание ↗</a><button class="button button-dark" id="detailBook">Оставить заявку</button><button class="favorite-btn ${s?"saved":""}" data-fav="${e.id}">${s?"♥":"♡"}</button></div><p class="form-message">${e.verified?"Дата подтверждена по афише организатора.":"Точные даты и цены уточняй на сайте организатора — программа площадки обновляется."}</p></div>`;
  $("#detailBook")?.addEventListener("click",()=>openBooking("Заявка: "+e.title,"Оставь контакты — мы свяжемся с тобой."))}
function renderAll(){renderHome();renderEvents();renderDetail();bindFav();reveal()}

/* ---------- MODAL ---------- */
function openBooking(t,d){const m=$("#bookingModal");if(!m)return;$("#modalTitle").textContent=t;if(d)$("#modalDescription").textContent=d;m.classList.remove("hidden");document.body.style.overflow="hidden"}
function closeBooking(){$("#bookingModal")?.classList.add("hidden");document.body.style.overflow=""}
function setupModal(){$$(".book-tour").forEach(b=>b.addEventListener("click",()=>openBooking(b.dataset.tour,"Оставь контакты — мы расскажем детали тура.")));$$(".modal-close,.modal-backdrop").forEach(b=>b.addEventListener("click",closeBooking));
  const f=$("#bookingForm");f?.addEventListener("submit",e=>{e.preventDefault();$("#bookingMessage").innerHTML=`Заявка принята (демо). Быстрее — напиши в <a href="${CONTACTS.telegram}" target="_blank" rel="noreferrer"><b>Telegram ${CONTACTS.telegramName}</b></a>.`;f.reset()})}

/* ---------- INIT ---------- */
requireAuth();
document.addEventListener("DOMContentLoaded",()=>{
  setupAuth();
  if(page!=="auth.html"){renderChrome();setupChrome();
    const t=new URLSearchParams(location.search).get("type");if(t&&$("#typeFilter"))$("#typeFilter").value=t;
    renderAll();setupModal();
    ["eventSearch","typeFilter","sortFilter"].forEach(id=>$("#"+id)?.addEventListener(id==="eventSearch"?"input":"change",renderEvents));
    $("#resetFilters")?.addEventListener("click",()=>{$("#eventSearch").value="";$("#typeFilter").value="all";renderEvents()});
    $("#newsletterForm")?.addEventListener("submit",e=>{e.preventDefault();$("#newsletterMessage").textContent="Ты в списке! (демо — рассылка пока не подключена)";e.target.reset()});
    $$(".contact-details,.values-grid article,.tour-card,.category-card").forEach(el=>el.classList.add("reveal"));reveal();
  }
});
