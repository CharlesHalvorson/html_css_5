$(document).ready(() => {
    var currentFileArr = document.location.href.match(/[^\/]+$/);
    var currentFile = currentFileArr != null ? currentFileArr[0] : "index.html";
    
     // Display the header and footer consistently across all pages.
     $('#header-placeholder').load('header.html', function() {
        // This code handles the hamburger menu
        const mobileNav = $('#mobile-nav');
        const headerBottomNav = $('#header-bottom-nav');
        mobileNav.click(() => {
            headerBottomNav.toggle()
        });

        // Close header-bottom-nav when a link is clicked
        headerBottomNav.find('a').click(() => {
            headerBottomNav.hide();
        });

        $('#header-bottom-nav a').each(function() {
            // Check if the link's href matches the current URL
            if (currentFile.indexOf($(this).attr('href')) >= 0) {
                // Add the 'active' class to the matching link
                $(this).addClass('active');
            }
        });

     });

     $('#footer-placeholder').load('footer.html', function() {
        $('#copyright-year').text(new Date().getFullYear());

        // This code handles showing and hiding the go-to-top button.
        // Source Google Gemini
        // Get the link element
        let toTopLink = document.getElementById("to-top-link");

        // 1. Show/Hide button on scroll
        window.onscroll = function() {
            // A scroll threshold of 100px
            let scrollThreshold = 100;

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
     

    


    


    // This code handles the light and dark mode favicon
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const favicon = document.getElementById('favicon');

    function updateFavicon(e) {
        if (e.matches) {
            // console.log("Dark mode");
            favicon.href = "images/gavel-solid-light.svg";
        } else {
            // console.log("Light mode");
            favicon.href = "images/gavel-solid.svg";
        }
    }

    // Initial check
    updateFavicon(darkModeMediaQuery);

    // Listen for changes in color scheme preference
    darkModeMediaQuery.addEventListener('change', updateFavicon);

});