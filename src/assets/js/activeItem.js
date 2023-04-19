function removeActive(items, addClass) {
  items.forEach(e => e.classList.remove(addClass))
}

export function activeItem(items, addClass) {
  removeActive(items)
  items.forEach(item => {
    item.addEventListener("click", () => {
      removeActive(items, addClass)
      item.classList.add(addClass)
    })
  })
}

activeItem(document.querySelectorAll('.links__item'), 'header__link_active')
