/* Hamburger Menu */
const bar = document.getElementById("bar")
const html = document.querySelector('html')
const contentSlide = document.querySelector('.content__slide')
const mobileHeader = document.querySelector('.mobile__header')
const contentWrap = document.querySelector('.content__wrapper')

let activeMenu = false

const removeClass = (element, className) => element.classList.remove(className)
const addClass = (element, className) => element.classList.add(className)

/* function interactionClass(el, class) {
    
} */

bar.addEventListener('click', event => {
    if (html.classList.contains('open_menu')) {
        removeClass(html, 'open_menu')
        activeMenu = false
    } else {
        addClass(html, 'open_menu')
        activeMenu = true
    }
})

/* contentSlide.addEventListener('click', event => {
    if (html.classList.contains('open_menu')) {
        html.classList.remove('open_menu')
    }
}) */

if (activeMenu) {
    contentWrap.addEventListener('click', event => {
        const target = event.target

        console.log(html.matches('.open_menu'));

        if (html.matches('.open_menu')) {
            if (!target.matches('.mobile__menu')) {
                removeClass(html, 'open_menu')
            }
        }

    })
}


/* Fixed Header */
const header = document.querySelector(".mobile__header");
const sticky = header.offsetTop;
const content = document.querySelector(".catalog");

window.onscroll = function () {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }
};