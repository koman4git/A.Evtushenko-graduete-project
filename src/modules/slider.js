'use strict';

const slider = () => {
    const topSlider = document.querySelector('.top-slider')
    const slides = topSlider.querySelectorAll('.item')
    const table = topSlider.querySelectorAll('.table')
    const timeInterval = 3000  
    
    let currentSlide = 0
    let interval

    const prevSlide = (elems, index) => {
        elems[index].hidden = true;
        
    }

    const  nextSlide = (elems, index) => {
        elems[index].hidden = false;
       
    }
    const autoSlide = () => {
        prevSlide(slides, currentSlide)
        prevSlide(table, currentSlide)
        currentSlide++
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        nextSlide(slides, currentSlide)
        nextSlide(table, currentSlide)
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }

    const stopSlide = () => {
        clearInterval(interval)
    }
    startSlide(timeInterval)
}

export default slider
