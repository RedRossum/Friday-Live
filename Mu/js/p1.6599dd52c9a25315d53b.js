(()=>{"use strict";const e=document.querySelector(".welcome"),a=document.querySelectorAll(".nav__dot"),r=document.querySelector(".nav__left"),t=document.querySelector(".nav__right");function g(e){a.forEach(((a,r,t)=>{a.classList.remove("nav__dot_active"),t[e-1].classList.add("nav__dot_active")}))}function n(a,r){document.documentElement.clientWidth<984?e.style.background=`url(assets/img/welcome-slider/${r}.webp) center center / cover no-repeat`:(e.animate([{backgroundImage:`linear-gradient(90deg, #000000 30%, rgba(0, 0, 0, 0.5) 46.19%, rgba(0, 0, 0, 0) 60.73%), url('assets/img/welcome-slider/${a}.jpg')`},{backgroundImage:`linear-gradient(90deg, #000000 30%, rgba(0, 0, 0, 0.5) 56.19%, rgba(0, 0, 0, 0) 70.73%), url('assets/img/welcome-slider/${a}.jpg')`},{backgroundImage:`linear-gradient(90deg, #000000 30%, rgba(0, 0, 0, 0.5) 66.19%, rgba(0, 0, 0, 0) 80.73%), url('assets/img/welcome-slider/${a}.jpg')`},{backgroundImage:`linear-gradient(90deg, #000000 40%, rgba(0, 0, 0, 0.5) 76.19%, rgba(0, 0, 0, 0) 90.73%), url('assets/img/welcome-slider/${a}.jpg')`},{backgroundImage:`linear-gradient(90deg, #000000 50%, rgba(0, 0, 0, 0.5) 86.19%, rgba(0, 0, 0, 0) 100%), url('assets/img/welcome-slider/${a}.jpg')`},{backgroundImage:`linear-gradient(90deg, #000000 60%, rgba(0, 0, 0, 0.5) 96.19%, rgba(0, 0, 0, 0) 100%), url('assets/img/welcome-slider/${a}.jpg')`},{backgroundImage:`linear-gradient(90deg, #000000 70%, rgba(0, 0, 0, 0.5) 100.19%), url('assets/img/welcome-slider/${a}.jpg')`},{backgroundImage:`linear-gradient(90deg, #000000 80%, rgba(0, 0, 0, 0.5) 100%), url('assets/img/welcome-slider/${a}.jpg')`},{backgroundImage:`linear-gradient(90deg, #000000 90%, rgba(0, 0, 0, 0.5) 100%), url('assets/img/welcome-slider/${a}.jpg')`},{backgroundImage:`linear-gradient(90deg, #000000 90%, rgba(0, 0, 0, 0.5) 100%), url('assets/img/welcome-slider/${r}.jpg')`},{backgroundImage:`linear-gradient(90deg, #000000 80%, rgba(0, 0, 0, 0.5) 100%), url('assets/img/welcome-slider/${r}.jpg')`},{backgroundImage:`linear-gradient(90deg, #000000 70%, rgba(0, 0, 0, 0.5) 100.19%), url('assets/img/welcome-slider/${r}.jpg')`},{backgroundImage:`linear-gradient(90deg, #000000 60%, rgba(0, 0, 0, 0.5) 96.19%, rgba(0, 0, 0, 0) 100%), url('assets/img/welcome-slider/${r}.jpg')`},{backgroundImage:`linear-gradient(90deg, #000000 50%, rgba(0, 0, 0, 0.5) 86.19%, rgba(0, 0, 0, 0) 100%), url('assets/img/welcome-slider/${r}.jpg')`},{backgroundImage:`linear-gradient(90deg, #000000 40%, rgba(0, 0, 0, 0.5) 76.19%, rgba(0, 0, 0, 0) 90.73%), url('assets/img/welcome-slider/${r}.jpg')`},{backgroundImage:`linear-gradient(90deg, #000000 30%, rgba(0, 0, 0, 0.5) 66.19%, rgba(0, 0, 0, 0) 80.73%), url('assets/img/welcome-slider/${r}.jpg')`},{backgroundImage:`linear-gradient(90deg, #000000 30%, rgba(0, 0, 0, 0.5) 56.19%, rgba(0, 0, 0, 0) 70.73%), url('assets/img/welcome-slider/${r}.jpg')`},{backgroundImage:`linear-gradient(90deg, #000000 30%, rgba(0, 0, 0, 0.5) 46.19%, rgba(0, 0, 0, 0) 60.73%), url('assets/img/welcome-slider/${r}.jpg')`}],{duration:500}),e.style.backgroundImage=`var(--welcome-shadow), url('assets/img/welcome-slider/${r}.jpg')`)}r.addEventListener("click",(()=>{let e=+document.querySelector(".nav__start").textContent,a=e-1;0==a&&(a=5),document.querySelector(".nav__start").textContent=`0${a}`,g(a),n(e,a)})),t.addEventListener("click",(()=>{let e=+document.querySelector(".nav__start").textContent,a=e+1;6==a&&(a=1),document.querySelector(".nav__start").textContent=`0${a}`,document.querySelector(".nav__start").textContent=`0${a}`,g(a),n(e,a)})),a.forEach(((e,r)=>{let t,g;e.addEventListener("click",(()=>{g=r+1,a.forEach(((e,a)=>{e.classList.contains("nav__dot_active")&&(t=a+1),e.classList.remove("nav__dot_active")})),document.querySelector(".nav__start").textContent=`0${r+1}`,n(t,g),e.classList.add("nav__dot_active")}))}));let s=0,d=0,i=!1,l=0,o=0;e.addEventListener("mousedown",(e=>{s=e.offsetX,i=!0,l=+document.querySelector(".nav__start").textContent})),e.addEventListener("mousemove",(e=>{if(d=e.offsetX,i)return d>s?(i=!1,o=l-1,0==o&&(o=5),document.querySelector(".nav__start").textContent=`0${o}`,n(l,o),a.forEach((e=>{e.classList.remove("nav__dot_active")})),void a[o-1].classList.add("nav__dot_active")):d<s?(i=!1,o=l+1,6==o&&(o=1),document.querySelector(".nav__start").textContent=`0${o}`,n(l,o),a.forEach((e=>{e.classList.remove("nav__dot_active")})),void a[o-1].classList.add("nav__dot_active")):void 0})),e.addEventListener("mouseup",(e=>{i=!1}))})();