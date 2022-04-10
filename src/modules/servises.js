'use strict';

const servisesScroll = () => {
    const topMenu = document.querySelectorAll('.top-menu a')
    
    topMenu.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            const href = item.getAttribute('href').substring(1)
            const section = document.getElementById(href)
            
            section.scrollIntoView({
                behavior: 'auto',
                block: 'start',
                inline: 'center'
            })
        })
    })
}

export default servisesScroll