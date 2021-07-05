/* Hamburger Menu */
var bar = document.getElementById("bar")
var html = document.querySelector('html')

bar.addEventListener('click', function() {
    if (html.classList.contains('open_menu')) {
        html.classList.remove('open_menu')
    } else {
        html.classList.add('open_menu')
    }
})


/* Fixed Header */
var header = document.querySelector(".mobile__header");
var sticky = header.offsetTop;

window.onscroll = function () {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};