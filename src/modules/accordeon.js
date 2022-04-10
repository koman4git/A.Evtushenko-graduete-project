'use strict';

const accordeon = () => {
    const accordeon = document.querySelector('.accordeon')
    const element = accordeon.querySelectorAll('.element')
    const elementContent = accordeon.querySelectorAll('.element-content')

    element.forEach((elem, index) => {
        elementContent[index].style.display = 'none'
        elem.addEventListener('click', (e) => {
            e.preventDefault()
            if (elementContent[index].classList.contains('active')) {
                elementContent[index].style.display = 'none'
            } else {
                elementContent[index].style.display = 'block'
            }
            elementContent[index].classList.toggle('active')
            elem.classList.toggle('active')

            element.forEach((item, index2) => {
                if (index !== index2) {
                    item.classList.remove('active')
                    elementContent[index2].style.display = 'none'
                    elementContent[index2].classList.remove('active')
                }
            })
            
        })
    })
    
}

export default accordeon