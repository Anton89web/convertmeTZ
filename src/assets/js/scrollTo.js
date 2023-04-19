import {showMenu} from "./mobileMenu";

function scrollTo(links) {
  links.forEach(link => link.addEventListener("click", e => {
    e.preventDefault()
    showMenu()
    const target = document.querySelector("#" + link.hash.slice(1))
    target.scrollIntoView({behavior: "smooth"})
  }))
}

scrollTo(document.querySelectorAll('.link'))