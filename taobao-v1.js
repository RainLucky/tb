// computedScreen();

// function computedScreen() {
//     var navTop = document.getElementsByClassName('nav-top')[0];
//     var contentWrapper = document.getElementsByClassName('content-wrapper')[0];
//     var contentNav = document.getElementsByClassName('content-nav')[0];
//     var contentAll = document.getElementsByClassName('content-all')[0];

// }
$(function() {
    $(window).scroll(function() {
        var navTop = $('.nav-top').height();
        var conWrapper = $('.content-wrapper').height();
        if ($(window).scrollTop() >= navTop + conWrapper) {
            $('.content1').css('display', 'block');
        } else {
            $('.content1').css('display', 'none');

        }
    })
});