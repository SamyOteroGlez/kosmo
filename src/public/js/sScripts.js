$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".flecha-arriba").fadeIn();
        } else {
            $(".flecha-arriba").fadeOut();
        }
    });

});