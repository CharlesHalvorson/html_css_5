document.addEventListener('DOMContentLoaded', function() {
    const mobileNav = document.getElementById('mobile-nav');
    const navList = document.querySelector('#header-bottom-nav ul');
// coded by gemini
    mobileNav.addEventListener('click', function() {
        if (navList.style.display === 'none' || navList.style.display === '') {
            navList.style.display = 'block';
        } else {
            navList.style.display = 'none';
        }
    });
});
