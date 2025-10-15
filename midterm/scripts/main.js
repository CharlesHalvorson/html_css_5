$(document).ready(() => {
    const mobileNav = $('#mobile-nav');
    const headerBottomNav = $('#header-bottom-nav');

    mobileNav.click(() => headerBottomNav.toggle());
});