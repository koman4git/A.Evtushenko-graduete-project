(()=>{"use strict";(()=>{const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay"),l=document.querySelector(".modal-close"),o=document.querySelectorAll(".fancyboxModal"),n=document.querySelector("body"),r=window.screen.width;o.forEach((l=>{l.addEventListener("click",(l=>{l.preventDefault(),t.style.display="block",e.style.display="block",e.style.top="-50%",n.classList.add("lock"),r>768?(({timing:e,draw:t,duration:l})=>{let o=performance.now();requestAnimationFrame((function n(r){let s=(r-o)/l;s>1&&(s=1);let c=e(s);t(c),s<1&&requestAnimationFrame(n)}))})({duration:500,timing:e=>e,draw(t){e.style.top=80*t-50+"%"}}):(t.style.display="block",e.style.top="20%")}))})),t.addEventListener("click",(()=>{t.style.display="none",e.style.display="none",n.classList.remove("lock")})),l.addEventListener("click",(()=>{t.style.display="none",e.style.display="none",n.classList.remove("lock")})),document.addEventListener("keydown",(l=>{"Escape"===l.key&&(t.style.display="none",e.style.display="none",n.classList.remove("lock"))}))})(),document.querySelectorAll(".top-menu a").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const l=e.getAttribute("href").substring(1);document.getElementById(l).scrollIntoView({behavior:"auto",block:"start",inline:"center"})}))})),(()=>{const e=document.querySelector(".top-slider"),t=e.querySelectorAll(".item"),l=e.querySelectorAll(".table");let o,n=0;const r=(e,t)=>{e[t].hidden=!0},s=(e,t)=>{e[t].hidden=!1},c=()=>{r(t,n),r(l,n),n++,n>=t.length&&(n=0),s(t,n),s(l,n)};((e=1500)=>{o=setInterval(c,e)})(3e3)})(),(()=>{const e=document.querySelector(".up");e.style.display="none",window.onscroll=function(){window.pageYOffset>580?e.style.display="block":e.style.display="none"},e.addEventListener("click",(e=>{e.preventDefault(),window.scrollBy({top:-document.documentElement.scrollHeight,behavior:"smooth"})}))})(),(()=>{const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element"),l=e.querySelectorAll(".element-content");t.forEach(((e,o)=>{l[o].style.display="none",e.addEventListener("click",(n=>{n.preventDefault(),l[o].classList.contains("active")?l[o].style.display="none":l[o].style.display="block",l[o].classList.toggle("active"),e.classList.toggle("active"),t.forEach(((e,t)=>{o!==t&&(e.classList.remove("active"),l[t].style.display="none",l[t].classList.remove("active"))}))}))}))})(),(()=>{const e=document.querySelectorAll(".col-sm-6"),t=document.querySelector(".arrow-left"),l=document.querySelector(".arrow-right");let o;o=window.outerWidth<570?1:window.outerWidth<870&&window.outerWidth>570?2:3;let n=0;e.forEach((e=>{n<o?n++:e.style.display="none"})),n=0,0===n&&(t.style.opacity=.2),t.addEventListener("click",(r=>{r.preventDefault(),n>0&&(n-=1,o-=1,e[n].style.display="block",e[o].style.display="none",l.style.opacity=1,0===n&&(t.style.opacity=.2))})),l.addEventListener("click",(r=>{r.preventDefault(),o<e.length&&(e[n++].style.display="none",e[o++].style.display="block",o===e.length&&(l.style.opacity=.2),t.style.opacity=1)}))})(),(()=>{const e=document.querySelectorAll("input[name=fio]"),t=document.querySelectorAll("input[name=tel]");e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-ЯёЁ\s]+/i,""),e.target.style.border=null})),e.addEventListener("invalid",(e=>{e.preventDefault(),e.target.style.border="1px solid red"}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d+()]+/gi,""),e.target.style.border=null})),e.addEventListener("invalid",(e=>{e.preventDefault(),e.target.style.border="1px solid red"}))}))})(),(({formId:e})=>{const t=document.getElementById(e),l=document.querySelector(".modal-callback"),o=document.querySelector(".modal-overlay"),n=document.querySelector("body"),r=document.createElement("div");try{if(!t)throw new Error("Верните форму на место!");t.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=t.querySelectorAll("input"),s=new FormData(t),c={};r.textContent="Загрузка...",t.append(r),s.forEach(((e,t)=>[c[t]=e])),(e=>{let t=!0;return e.forEach((e=>{"fio"===e.name&&e.value.length<2&&(e.style.border="3px solid red",t=!1),"tel"===e.name&&(e.value.length<6||e.value.length>16)&&(e.style.border="3px solid red",t=!1)})),t})(e)?(async e=>{await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))})(c).then((t=>{r.textContent="Спасибо! Наш менеджер с вами свяжется!",e.forEach((e=>{e.closest(".feedback")?e.style.border=null:e.value=""}))})).catch((e=>{r.textContent="Ошибка..."})).finally((()=>{setTimeout((()=>r.textContent=""),2e3),setTimeout((()=>{l.style.display="none",o.style.display="none",n.classList.remove("lock"),document.body.style.overflow=""}),3e3)})):r.textContent="Данные некорректны! Попробуйте ещё раз..."})()}))}catch(e){console.log(e.message)}})({formId:"form1"})})();