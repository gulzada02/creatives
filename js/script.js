$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 115) {
            $('.scroll-menu').fadeIn ('slow');
            $('#scroll-menu').addClass('header-fixed')
        }
        else {
            $('#scroll-menu').removeClass('header-fixed');
        }
    });});