$(document).ready(function () {

    const mobileNav = $('#mobile-nav');
    const headerBottomNav = $('#header-bottom-nav');

    if($(window).width() >= 992) {
        headerBottomNav.css({'display': 'block'});
    } else {
        headerBottomNav.css({'display': 'none'});
    }

    mobileNav.click(() => headerBottomNav.toggle());


    $(window).resize(function() {
        if($(window).width() >= 992) {
            headerBottomNav.css({'display': 'block'});
        } else {
            headerBottomNav.css({'display': 'none'});
        }
    });
});