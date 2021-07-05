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

/* Academy Tabs */

$('[name=academyType]').on('change', function () {
    var p = $(this).prop('checked');

    var i = $('[name=academyType]').index(this);

    $('.academy__form_wrap').removeClass('on');
    $('.academy__form_wrap').eq(i).addClass('on');

    if ($('.academy__form_wrap').eq(i).hasClass('coach_tab')) {
        $('#remainSteps').html('8')
    } else {
        $('#remainSteps').html('10')
    }
});

if ($('.academy__form_wrap').hasClass('coach_tab')) {
    $('#remainSteps').html('8')
} else {
    $('#remainSteps').html('10')
}


function readURL() {
    var file = document.getElementById("loadAva").files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        document.getElementById('loadAvaLabel').style.background = "url(" + reader.result + ") 100%/cover no-repeat";
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {}
}