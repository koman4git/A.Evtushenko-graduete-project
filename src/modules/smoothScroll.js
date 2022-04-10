'use strict';

const smoothScroll = () => {
    const buttonUp = document.querySelector(".up")
  
    window.onscroll = function () {
      if (window.pageYOffset > 580) {
        buttonUp.style.display = "block"
      } else {
        buttonUp.style.display = "none"
      }
    }
  
    buttonUp.addEventListener("click", () => {
      window.scrollBy({
        top: -document.documentElement.scrollHeight,
        behavior: "smooth",
      })
    })
}

export default smoothScroll