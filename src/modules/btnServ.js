'use strict';
import { animate } from "./helpers"

const btnServises = () => {
    const btnServ = document.querySelector('.button-services')
    const modalCallback = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const modalClose = document.querySelector('.modal-close')
  
    const screen = window.screen.width
  
    btnServ.addEventListener('click', (e) => {
        e.preventDefault()
        modalOverlay.style.display = 'block'
        modalCallback.style.display = 'block'
        modalCallback.style.top = -50 + '%'
  
        if (screen > 768) {
          animate({
            duration: 500,
            timing(timeFraction) {
              return timeFraction
            },
            draw(progress) {
              modalCallback.style.top = -50 + 80 * progress + '%'
            },
          })
        } else {
          modalOverlay.style.display = 'block'
          modalCallback.style.top = 20 + '%'
        }
      })
    
  
    modalOverlay.addEventListener('click', (e) => {
        e.preventDefault()
        modalOverlay.style.display = 'none'
        modalCallback.style.display = 'none'
    })
  
    modalClose.addEventListener('click', (e) => {
        e.preventDefault()
        modalOverlay.style.display = 'none'
        modalCallback.style.display = 'none'
    })
  
    document.addEventListener('keydown', (e) => {
        e.preventDefault()
        const key = e.key
        if (key === 'Escape') {
         modalOverlay.style.display = 'none'
         modalCallback.style.display = 'none'
      }
    })
  }

export default btnServises