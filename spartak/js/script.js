/* Hamburger Menu */
var bar = $('#bar')
var html = $('html')

bar.click(function () {
    if (html.hasClass('open_menu')) {
        html.removeClass('open_menu')
    } else {
        html.addClass('open_menu')
    }
});


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