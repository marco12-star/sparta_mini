/* Hamburger Menu */
const bar = document.getElementById("bar")
const html = document.querySelector('html')
const contentSlide = document.querySelector('.content__slide')
const mobileHeader = document.querySelector('.mobile__header')
const contentWrap = document.querySelector('.content__wrapper')

let activeMenu = false

const removeClass = (element, className) => element.classList.remove(className)
const addClass = (element, className) => element.classList.add(className)


document.addEventListener('click', () => {
    const target = event.target

    function matches() {
        if (target.classList.contains('bar') || target.classList.contains('bar_span')) {
            return true
        }
    }

    const ifMatch = matches()

    if (ifMatch && !html.classList.contains('open_menu')) {
        addClass(html, 'open_menu')
    } else if (html.classList.contains('open_menu')) {
        removeClass(html, 'open_menu')
    }

})




/* Fixed Header */
/* const header = document.querySelector(".mobile__header");
const sticky = header.offsetTop;
const content = document.querySelector(".catalog");

window.onscroll = function () {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }
}; */