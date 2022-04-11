'use strict';

const smoothScroll = () => {
    const buttonUp = document.querySelector('.up')
    
    buttonUp.style.display = 'none'
    
    window.onscroll = function () {
      if (window.pageYOffset > 580) {
        buttonUp.style.display = 'block'
      } else {
        buttonUp.style.display = 'none'
      }
    }
  
    buttonUp.addEventListener('click', (e) => {
      e.preventDefault()
      window.scrollBy({
        top: -document.documentElement.scrollHeight,
        behavior: 'smooth',
      })
    })
}

export default smoothScroll