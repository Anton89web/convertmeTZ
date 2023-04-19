import {showMenu} from "./mobileMenu";

function Popup() {
  const popup = document.querySelector('.popup')
  const btnModal = document.querySelector('.btn-modal')
  const btnClose = document.querySelector('.popup__close')
  const btnSubmit = document.querySelector('.form__btn')
  const closeCross = document.querySelector(".popup__close-cross")
  const body = document.body

  const hidePopup = () => {
    body.classList.remove('stop__scroll')
    popup.classList.add('popup-hide')
    popup.style.top = '0'
  }

  const showPopup = () => {
    popup.style.top = `${window.pageYOffset}px`
    popup.classList.remove('popup-hide')
    showMenu()
    body.classList.add('stop__scroll')
  }

  btnModal.addEventListener("click", showPopup)

  popup.addEventListener("click", e => {
    if (e.target === btnSubmit) {
      e.preventDefault()
      document.popup.reset()
      hidePopup()
    } else if (e.target === popup || e.target === btnClose || e.target === closeCross) {
      hidePopup()
    }
  })
}

Popup()