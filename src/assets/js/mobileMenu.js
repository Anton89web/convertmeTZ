const menuBtn = document.querySelector('.hamburger')
const menu = document.querySelector(".header__links-wrapper")
const lineTop = document.querySelector('.hamburger__line-top')
const lineCenter = document.querySelector('.hamburger__line-center')
const lineBottom = document.querySelector('.hamburger__line-bottom')

export function showMenu() {
  menu.classList.toggle("hide_mobile_menu")
  document.body.classList.toggle("stop__scroll")
  lineTop.classList.toggle("top")
  lineCenter.classList.toggle("none")
  lineBottom.classList.toggle("bottom")
}

menuBtn.addEventListener("click", e => showMenu())
