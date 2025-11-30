(()=>{const e=()=>{document.documentElement.style.setProperty("--body-scroll-width",window.innerWidth-document.documentElement.clientWidth+"px")};window.addEventListener("resize",e),e()})();
feather.replace({class:"icon"});{const e=$(window),t=t=>{const o=e.height()||0,n=t.height()||0,s=(t.offset()||{top:0}).top,r=s+n,i=e.scrollTop()||0,a=i+o,l=n-(Math.max(r,a)-Math.min(s,i)-o);return l<=0?0:l/n},o=.25,n=$("[data-viewport-dark]").toArray().map((e=>({ratio:parseFloat(e.getAttribute("data-viewport-dark")||"")||o,$el:$(e)})));if(n.length){const o=()=>{const e=n.some((e=>t(e.$el)>e.ratio));setDarkMode(e)};e.on("scroll resize load",o),o()}}{class e{constructor(e){this.dd=e,this.placeholder=this.dd.find("span"),this.opts=this.dd.find(".uk-droplist-dropdown li"),this.val="",this.index=-1,this.initEvents(),this.onChangeHandlers=new Set}initEvents(){const e=this;e.dd.on("click",(function(e){e.preventDefault(),e.stopPropagation(),$(this).toggleClass("uk-active")})),e.opts.on("click",(function(){const t=$(this);e.val=t.text(),e.index=t.index(),e.placeholder.text(e.val),t.siblings().removeClass("uk-active"),t.filter(':contains("'+e.val+'")').addClass("uk-active"),e.dd.trigger("change")})).trigger("change"),$(document).on("click",(function(){e.dd.removeClass("uk-active")}))}get options(){return this.opts}get value(){return this.val}get selectedIndex(){return this.index}}$((function(){document.querySelectorAll(".uk-droplist").forEach((t=>{const o=new e($(t));t.classList.contains("uk-droplist-filter")&&o.dd.on("change",(()=>{const e=o.options[o.selectedIndex];UIkit.filter(o.dd.closest("[data-uk-filter]")).apply(e)}))}))}))}{const e=[...document.querySelectorAll(".uk-navbar-nav ul")],t=()=>{if(!e[0]||!e[0].offsetParent)return;const t=document.documentElement.clientWidth;e.forEach((e=>{e.classList.remove("reverse-submenu-open");e.getBoundingClientRect().right>t&&e.classList.add("reverse-submenu-open")}))};window.addEventListener("load",t),window.addEventListener("resize",t),setInterval(t,1e3)}{const e=document.querySelectorAll("[data-image-hover-revealer]");if(e.length){const t=17,o=400,n=!0,s=document.createElement("img");let r,i;s.alt="",s.className="image-hover-revealer",document.body.append(s);let a=!1;e.forEach((e=>{if(!(e instanceof HTMLElement))return;if(!(s instanceof Image))return;const l=e.getAttribute("data-image-hover-revealer");e.addEventListener("mouseover",(()=>{s.setAttribute("src",l),s.classList.add("uk-active"),r=Date.now(),a=!0,clearTimeout(i)})),window.addEventListener("mousemove",(e=>{if(!a)return;let o=e.pageX,r=e.pageY;const i=s.clientWidth,l=s.clientHeight;o+i>=window.scrollX+window.innerWidth-t&&(n?o-=i:o=window.innerWidth-t-i),r+l>=window.scrollY+window.innerHeight&&(n?r-=l:r=window.scrollY+window.innerHeight-l),s.style.setProperty("--move-x",o+"px"),s.style.setProperty("--move-y",r+"px")})),e.addEventListener("mouseleave",(()=>{const e=Date.now()-r;i=setTimeout((()=>{s.classList.remove("uk-active"),i=setTimeout((()=>{a=!1,s.style.setProperty("--move-x","0px"),s.style.setProperty("--move-y","0px")}),o)}),Math.max(0,o-e))}))}))}}const stickyItemContrast=(e,t,o,n={})=>{n=Object.assign({black:"contrast-black",white:"contrast-white"},n);const s=(e=>{const t={};return o=>{if(null!=t[o])return t[o];{const n=e(o);return t[o]=n,n}}})((e=>{if(!e.startsWith("rgb("))return"black";const t=e.slice(4,-1).split(",").map(Number);return(299*t[0]+587*t[1]+114*t[2])/1e3>=128?"black":"white"})),r=$(window);let i="";const a=()=>{const r="function"==typeof o?o(t):o,a=e.map((e=>e instanceof HTMLElement&&window.scrollY+r>=e.offsetTop)).lastIndexOf(!0),l=(e=>{let t="";for(;e&&(t=window.getComputedStyle(e,null).getPropertyValue("background-color"),/rgba\(.*?,\s*0\)$/.test(t));)e=e.parentElement;return t})(e[-1===a?0:a]),c=s(l);i!==c&&n[i]&&t.classList.remove(n[i]),n[c]&&t.classList.add(n[c]),i=c};r.on("scroll resize load darkmodechange",a),a()},getElementParents=e=>{const t=[];for(;e=e.parentNode;)t.push(e);return t},stickyItemsDarkMode=(e,t)=>{const o=[...document.querySelectorAll('.uk-section, [class*="uk-section-"]')],n=[...document.querySelectorAll(e)];for(const e of n)stickyItemContrast(o,e,t,{black:"",white:"uk-dark"})};stickyItemsDarkMode(".uni-header, .uni-sticky-menu, .uni-header-social",(e=>e.offsetTop+e.clientHeight/2)),stickyItemsDarkMode(".uni-header-location, .uni-header-section-indicator",(()=>window.innerHeight/2));{const e=document.querySelector(".uni-header-section-indicator");if(e){const t=[...e.querySelectorAll("li[data-selector]")].map((e=>document.querySelector(e.getAttribute("data-selector")))),o=$(window);let n=0;const s=()=>{const o=window.innerHeight/2,s=t.map((e=>e instanceof HTMLElement&&window.scrollY+o>=e.offsetTop)).lastIndexOf(!0);-1!==s&&n!==s&&(n=s,e.style.setProperty("--section-indicator-index",n+""))};o.on("scroll resize load darkmodechange",s),s()}}document.querySelectorAll("[data-darkmode-toggle] input").forEach((e=>{e.addEventListener("change",(()=>{setDarkMode(!isDarkMode());const e=isDarkMode();localStorage.setItem("darkMode",e?"1":"0")})),e.checked=isDarkMode()})),document.querySelectorAll("[data-uk-modal] [data-uk-scrollspy-nav] a").forEach((e=>{e.addEventListener("click",(t=>{UIkit.toggle(e.closest("[data-uk-modal].uk-open")).toggle()}))})),document.querySelectorAll(".uk-horizontal-scroll").forEach((e=>{e.addEventListener("wheel",(t=>{t.preventDefault(),e.scrollBy(t.deltaY,0)}))}));
/* ====== City data (deduped, normalized) ======
   NOTE:
   - status defaults to "visited" (adjust to "lived" later if desired)
   - lat/lng can be filled later when you want markers
   - image path is a suggested convention using the id slug
*/
var cityData = [
  // Spain
  { id: "madrid-es",         name: "Madrid, Spain",                 status: "visited", lat: null, lng: null, image: "assets/images/cities/madrid-es.jpg",         caption: "" },
  { id: "segovia-es",        name: "Segovia, Spain",                status: "visited", lat: null, lng: null, image: "assets/images/cities/segovia-es.jpg",        caption: "" },
  { id: "valle-de-los-caidos-es", name: "Valle de los Caídos, Spain", status: "visited", lat: null, lng: null, image: "assets/images/cities/valle-de-los-caidos-es.jpg", caption: "" },

  // United States
  { id: "miami-us",          name: "Miami, USA",                    status: "visited", lat: null, lng: null, image: "assets/images/cities/miami-us.jpg",          caption: "" },
  { id: "new-york-us",       name: "New York, USA",                 status: "visited", lat: null, lng: null, image: "assets/images/cities/new-york-us.jpg",       caption: "" },
  { id: "boston-us",         name: "Boston, USA",                   status: "visited", lat: null, lng: null, image: "assets/images/cities/boston-us.jpg",         caption: "" },
  { id: "philadelphia-us",   name: "Philadelphia, USA",             status: "visited", lat: null, lng: null, image: "assets/images/cities/philadelphia-us.jpg",   caption: "" },
  { id: "new-haven-us",      name: "New Haven, USA",                status: "visited", lat: null, lng: null, image: "assets/images/cities/new-haven-us.jpg",      caption: "" },
  { id: "hanover-us",        name: "Hanover, USA",                  status: "visited", lat: null, lng: null, image: "assets/images/cities/hanover-us.jpg",        caption: "" },
  { id: "mercer-us",         name: "Mercer, USA",                   status: "visited", lat: null, lng: null, image: "assets/images/cities/mercer-us.jpg",         caption: "" },
  { id: "honolulu-us",       name: "Honolulu, USA",                 status: "visited", lat: null, lng: null, image: "assets/images/cities/honolulu-us.jpg",       caption: "" },
  { id: "kauai-us",          name: "Kauai, USA",                    status: "visited", lat: null, lng: null, image: "assets/images/cities/kauai-us.jpg",          caption: "" },
  { id: "hawaii-island-us",  name: "Hawaii Island, USA",            status: "visited", lat: null, lng: null, image: "assets/images/cities/hawaii-island-us.jpg",  caption: "" },

  // Mexico
  { id: "cancun-mx",         name: "Cancún, Mexico",                status: "visited", lat: null, lng: null, image: "assets/images/cities/cancun-mx.jpg",         caption: "" },
  { id: "oaxaca-mx",         name: "Oaxaca, Mexico",                status: "visited", lat: null, lng: null, image: "assets/images/cities/oaxaca-mx.jpg",         caption: "" },
  { id: "bacalar-mx",        name: "Bacalar, Mexico",               status: "visited", lat: null, lng: null, image: "assets/images/cities/bacalar-mx.jpg",        caption: "" },
  { id: "mexico-city-mx",    name: "Mexico City, Mexico",           status: "visited", lat: null, lng: null, image: "assets/images/cities/mexico-city-mx.jpg",    caption: "" },
  { id: "puerto-vallarta-mx",name: "Puerto Vallarta, Mexico",       status: "visited", lat: null, lng: null, image: "assets/images/cities/puerto-vallarta-mx.jpg",caption: "" },
  { id: "valle-de-bravo-mx", name: "Valle de Bravo, Mexico",        status: "visited", lat: null, lng: null, image: "assets/images/cities/valle-de-bravo-mx.jpg", Caption: "" },

  // Australia
  { id: "sydney-au",         name: "Sydney, Australia",             status: "visited", lat: null, lng: null, image: "assets/images/cities/sydney-au.jpg",         caption: "" },
  { id: "melbourne-au",      name: "Melbourne, Australia",          status: "visited", lat: null, lng: null, image: "assets/images/cities/melbourne-au.jpg",      caption: "" },
  { id: "hamilton-island-au",name: "Hamilton Island, Australia",    status: "visited", lat: null, lng: null, image: "assets/images/cities/hamilton-island-au.jpg",caption: "" },
  { id: "blue-mountains-au", name: "Blue Mountains, Australia",     status: "visited", lat: null, lng: null, image: "assets/images/cities/blue-mountains-au.jpg", Caption: "" },
  { id: "airlie-beach-au",   name: "Airlie Beach, Australia",       status: "visited", lat: null, lng: null, image: "assets/images/cities/airlie-beach-au.jpg",   caption: "" },
  { id: "brisbane-au",       name: "Brisbane, Australia",           status: "visited", lat: null, lng: null, image: "assets/images/cities/brisbane-au.jpg",       caption: "" },
  { id: "gold-coast-au",     name: "Gold Coast, Australia",         status: "visited", lat: null, lng: null, image: "assets/images/cities/gold-coast-au.jpg",     caption: "" },
  { id: "byron-bay-au",      name: "Byron Bay, Australia",          status: "visited", lat: null, lng: null, image: "assets/images/cities/byron-bay-au.jpg",      caption: "" },

  // Malaysia
  { id: "cameron-highlands-my", name: "Cameron Highlands, Malaysia",status: "visited", lat: null, lng: null, image: "assets/images/cities/cameron-highlands-my.jpg", caption: "" },
  { id: "kuala-lumpur-my",   name: "Kuala Lumpur, Malaysia",        status: "visited", lat: null, lng: null, image: "assets/images/cities/kuala-lumpur-my.jpg",   caption: "" },
  { id: "perhentian-islands-my", name: "Perhentian Islands, Malaysia", status: "visited", lat: null, lng: null, image: "assets/images/cities/perhentian-islands-my.jpg", caption: "" },

  // Indonesia
  { id: "bali-id",           name: "Bali, Indonesia",               status: "visited", lat: null, lng: null, image: "assets/images/cities/bali-id.jpg",           caption: "" },
  { id: "nusa-penida-id",    name: "Nusa Penida, Indonesia",        status: "visited", lat: null, lng: null, image: "assets/images/cities/nusa-penida-id.jpg",    caption: "" },
  { id: "nusa-lembongan-id", name: "Nusa Lembongan, Indonesia",     status: "visited", lat: null, lng: null, image: "assets/images/cities/nusa-lembongan-id.jpg", caption: "" },
  { id: "komodo-island-id",  name: "Komodo Island, Indonesia",      status: "visited", lat: null, lng: null, image: "assets/images/cities/komodo-island-id.jpg",  caption: "" },

  // China
  { id: "wuhan-cn",          name: "Wuhan, China",                  status: "visited", lat: null, lng: null, image: "assets/images/cities/wuhan-cn.jpg",          caption: "" },
  { id: "chengdu-cn",        name: "Chengdu, China",                status: "visited", lat: null, lng: null, image: "assets/images/cities/chengdu-cn.jpg",        caption: "" },
  { id: "kashgar-cn",        name: "Kashgar, China",                status: "visited", lat: null, lng: null, image: "assets/images/cities/kashgar-cn.jpg",        caption: "" },
  { id: "tashkurgan-cn",     name: "Tashkurgan, China",             status: "visited", lat: null, lng: null, image: "assets/images/cities/tashkurgan-cn.jpg",     caption: "" },
  { id: "urumqi-cn",         name: "Urumqi, China",                 status: "visited", lat: null, lng: null, image: "assets/images/cities/urumqi-cn.jpg",         caption: "" },
  { id: "turpan-cn",         name: "Turpan, China",                 status: "visited", lat: null, lng: null, image: "assets/images/cities/turpan-cn.jpg",         caption: "" },
  { id: "dunhuang-cn",       name: "Dunhuang, China",               status: "visited", lat: null, lng: null, image: "assets/images/cities/dunhuang-cn.jpg",       caption: "" },
  { id: "lanzhou-cn",        name: "Lanzhou, China",                status: "visited", lat: null, lng: null, image: "assets/images/cities/lanzhou-cn.jpg",        caption: "" },
  { id: "lijiang-cn",        name: "Lijiang, China",                status: "visited", lat: null, lng: null, image: "assets/images/cities/lijiang-cn.jpg",        caption: "" },
  { id: "shangri-la-cn",     name: "Shangri-La, China",             status: "visited", lat: null, lng: null, image: "assets/images/cities/shangri-la-cn.jpg",     caption: "" },
  { id: "chongqing-cn",      name: "Chongqing, China",              status: "visited", lat: null, lng: null, image: "assets/images/cities/chongqing-cn.jpg",      caption: "" },

  // New Zealand
  { id: "christchurch-nz",   name: "Christchurch, New Zealand",     status: "visited", lat: null, lng: null, image: "assets/images/cities/christchurch-nz.jpg",   caption: "" },
  { id: "arthurs-pass-nz",   name: "Arthur’s Pass, New Zealand",    status: "visited", lat: null, lng: null, image: "assets/images/cities/arthurs-pass-nz.jpg",   caption: "" },
  { id: "lake-tekapo-nz",    name: "Lake Tekapo, New Zealand",      status: "visited", lat: null, lng: null, image: "assets/images/cities/lake-tekapo-nz.jpg",    caption: "" },
  { id: "mount-cook-nz",     name: "Mount Cook, New Zealand",       status: "visited", lat: null, lng: null, image: "assets/images/cities/mount-cook-nz.jpg",     caption: "" },
  { id: "queenstown-nz",     name: "Queenstown, New Zealand",       status: "visited", lat: null, lng: null, image: "assets/images/cities/queenstown-nz.jpg",     caption: "" },
  { id: "milford-sound-nz",  name: "Milford Sound, New Zealand",    status: "visited", lat: null, lng: null, image: "assets/images/cities/milford-sound-nz.jpg",  caption: "" },
  { id: "wanaka-nz",         name: "Wanaka, New Zealand",           status: "visited", lat: null, lng: null, image: "assets/images/cities/wanaka-nz.jpg",         caption: "" },
  { id: "arrowtown-nz",      name: "Arrowtown, New Zealand",        status: "visited", lat: null, lng: null, image: "assets/images/cities/arrowtown-nz.jpg",      caption: "" },

  // Singapore & Japan
  { id: "singapore-sg",      name: "Singapore",                     status: "visited", lat: null, lng: null, image: "assets/images/cities/singapore-sg.jpg",      caption: "" },
  { id: "tokyo-jp",          name: "Tokyo, Japan",                  status: "visited", lat: null, lng: null, image: "assets/images/cities/tokyo-jp.jpg",          caption: "" },
  { id: "kyoto-jp",          name: "Kyoto, Japan",                  status: "visited", lat: null, lng: null, image: "assets/images/cities/kyoto-jp.jpg",          caption: "" },
  { id: "osaka-jp",          name: "Osaka, Japan",                  status: "visited", lat: null, lng: null, image: "assets/images/cities/osaka-jp.jpg",          caption: "" },
  { id: "sapporo-jp",        name: "Sapporo, Japan",                status: "visited", lat: null, lng: null, image: "assets/images/cities/sapporo-jp.jpg",        caption: "" },
  { id: "niseko-jp",         name: "Niseko, Japan",                 status: "visited", lat: null, lng: null, image: "assets/images/cities/niseko-jp.jpg",         caption: "" }
];
// Initialize Leaflet map on About page
document.addEventListener('DOMContentLoaded', function () {
  var mapElement = document.getElementById('world-map');
  if (!mapElement || typeof L === 'undefined') return;

  // Create the map inside the #world-map container
  var map = L.map('world-map', {
    worldCopyJump: true,
    zoomControl: true
  }).setView([20, 0], 2); // [lat, lng], zoom

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 1,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
});
