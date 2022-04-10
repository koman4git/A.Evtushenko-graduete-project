'use strict';

const carousel = () => {
    const cards = document.querySelectorAll('.col-sm-6')
    const buttonLeft = document.querySelector('.arrow-left')
    const buttonRight = document.querySelector('.arrow-right')

  let viewCard

  if (window.outerWidth < 570) {
    viewCard = 1
  } else if (window.outerWidth < 870 && window.outerWidth > 570) {
    viewCard = 2
  } else {
    viewCard = 3
  }

  let start = 0

  cards.forEach((item) => {
    if (start < viewCard) {
      start++
    } else {
      item.style.display = 'none'
    }
  })

  start = 0
  if (start === 0) {
    buttonLeft.style.opacity = 0.2
  }
  buttonLeft.addEventListener('click', () => {
    if (start > 0) {
      start -= 1
      viewCard -= 1
      cards[start].style.display = 'block'
      cards[viewCard].style.display = 'none'
      buttonRight.style.opacity = 1
      if (start === 0) {
        buttonLeft.style.opacity = 0.2
      }
    }
  })
  buttonRight.addEventListener('click', () => {
    if (viewCard < cards.length) {
      cards[start++].style.display = 'none'
      cards[viewCard++].style.display = 'block'
      if (viewCard === cards.length) {
        buttonRight.style.opacity = 0.2
      }
      buttonLeft.style.opacity = 1
    }
  })

}

export default carousel