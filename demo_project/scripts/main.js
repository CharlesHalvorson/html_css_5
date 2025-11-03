$(document).ready(() => {
    // This code handles the hamburger menu
    const mobileNav = $('#mobile-nav');
    const headerBottomNav = $('#header-bottom-nav');
    mobileNav.click(() => {
        console.log('clicked');
        headerBottomNav.toggle()
    });

    // Close header-bottom-nav when a link is clicked
    headerBottomNav.find('a').click(() => {
        headerBottomNav.hide();
    });


    // This code handles showing and hiding the go-to-top button.
    // Source Google Gemini
    // Get the link element
    var toTopLink = document.getElementById("to-top-link");

    // 1. Show/Hide button on scroll
    window.onscroll = function() {
        // A scroll threshold of 100px
        var scrollThreshold = 100;

        // Check both documentElement and body for cross-browser compatibility
        if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
            // Using a class is cleaner than setting style.display directly
            toTopLink.classList.add("show");
        } else {
            toTopLink.classList.remove("show");
        }
    };

    // 2. Smooth scroll to top on click
    toTopLink.onclick = function(event) {
        // Prevent the default anchor behavior (#)
        event.preventDefault();
        
        // Scroll smoothly to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});