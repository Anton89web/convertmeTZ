!function(){var e={862:function(e,t,n){"use strict";function o(e,t){e.forEach((e=>e.classList.remove(t)))}function a(e,t){o(e),e.forEach((n=>{n.addEventListener("click",(()=>{o(e,t),n.classList.add(t)}))}))}n.d(t,{z:function(){return a}}),a(document.querySelectorAll(".links__item"),"header__link_active")},957:function(){},46:function(){document.addEventListener("DOMContentLoaded",(function(){let e=function(e){let t=e.target,n=t.dataset.phoneClear,o=t.dataset.phonePattern||"+7(___) ___-__-__",a=0,i=o.replace(/\D/g,""),r=e.target.value.replace(/\D/g,"");"false"!==n&&"blur"===e.type&&r.length<o.match(/([\_\d])/g).length?e.target.value="":(i.length>=r.length&&(r=i),e.target.value=o.replace(/./g,(function(e){return/[_\d]/.test(e)&&a<r.length?r.charAt(a++):a>=r.length?"":e})))},t=document.querySelectorAll("[data-phone-pattern]");for(let n of t)for(let t of["input","blur","focus"])n.addEventListener(t,e)}))},762:function(e,t,n){"use strict";n.d(t,{A:function(){return c}});const o=document.querySelector(".hamburger"),a=document.querySelector(".header__links-wrapper"),i=document.querySelector(".hamburger__line-top"),r=document.querySelector(".hamburger__line-center"),s=document.querySelector(".hamburger__line-bottom");function c(){a.classList.toggle("hide_mobile_menu"),document.body.classList.toggle("stop__scroll"),i.classList.toggle("top"),r.classList.toggle("none"),s.classList.toggle("bottom")}o.addEventListener("click",(e=>c()))},4:function(e,t,n){"use strict";var o=n(762);!function(){const e=document.querySelector(".popup"),t=document.querySelector(".btn-modal"),n=document.querySelector(".popup__close"),a=document.querySelector(".form__btn"),i=document.querySelector(".popup__close-cross"),r=document.body,s=()=>{r.classList.remove("stop__scroll"),e.classList.add("popup-hide"),e.style.top="0"};t.addEventListener("click",(()=>{e.style.top=`${window.pageYOffset}px`,e.classList.remove("popup-hide"),(0,o.A)()})),e.addEventListener("click",(t=>{t.target===a?(t.preventDefault(),s()):t.target!==e&&t.target!==n&&t.target!==i||s()}))}()},912:function(e,t,n){"use strict";var o=n(762);document.querySelectorAll(".link").forEach((e=>e.addEventListener("click",(t=>{t.preventDefault(),(0,o.A)(),document.querySelector("#"+e.hash.slice(1)).scrollIntoView({behavior:"smooth"})}))))},804:function(){$(document).ready((function(){$(".carousel").slick({dots:!0,infinite:!0,speed:800,fade:!0,cssEase:"linear",arrows:!1,autoplay:!0,autoplaySpeed:2e3})}))},293:function(e,t,n){"use strict";var o=n(862);const a=[["Create and edit video content for multi-platform use and distribution for social media channels (Facebook, Youtube, Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).","Design & Create highly engaging industry-related content in both photo, gif & video format","Publish Posts on various social media channels","Promote content on social networks and monitor engagement (e.g. comments and shares)","Research industry-related topics","Editing audio and sound design on projects","Engage in opportunities to develop original content and concepts for web and mobile","Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.","Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels"],["Requirements","Design & Create highly engaging industry-related content in both photo, gif & video format","Instagram, Tiktok and YouTube, adapting content to suit different channels","Publish Posts on various social media channels","Editing audio and sound design on projects","Promote content on social networks and monitor engagement (e.g. comments and shares)","Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest","Engage in opportunities to develop original content and concepts for web and mobile","Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage."],["Responsibilities","Design & Create highly engaging industry-related content in both photo, gif & video format","Engage in opportunities to develop original content and concepts for web and mobile","Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.","Publish Posts on various social media channels","Promote content on social networks and monitor engagement (e.g. comments and shares)","Research industry-related topics","Editing audio and sound design on projects","Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels"]],i=document.querySelector(".details__list-items"),r=document.querySelectorAll(".details__tab");function s(e){i.innerHTML="",e.forEach((e=>{i.insertAdjacentHTML("beforeend",`<li class="details__list-item">${e}</li>`)}))}(0,o.z)(r,"details__tab-active"),r.forEach(((e,t)=>{e.addEventListener("click",(()=>{s(a[t])}))})),s(a[0])}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(862),n(957),n(46),n(762),n(4),n(912),n(804),n(293)}();