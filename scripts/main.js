document.addEventListener('DOMContentLoaded', function() {
    var pathParts = window.location.pathname.split('/');
    // The number of '../' needed is the number of directories deep the file is.
    // We subtract 2 to account for the initial empty string from the leading '/'
    // and the filename itself.
    var depth = pathParts.length - 2;
    if (depth < 0) depth = 0; // Sanity check for root case like '/'
    var relativePath = '';
    for (var i = 0; i < depth; i++) {
        relativePath += '../';
    }

    // Function to fix relative paths for images and links within a loaded element
    function fixRelativePaths(element, relPath) {
        element.find('img').each(function() {
            const src = $(this).attr('src');
            if (src && !src.startsWith('http') && !src.startsWith('/') && !src.startsWith('data:')) {
                $(this).attr('src', relPath + src);
            }
        });

        element.find('a').each(function() {
            const href = $(this).attr('href');
            if (href && !href.startsWith('http') && !href.startsWith('/') && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
                $(this).attr('href', relPath + href);
            }
        });
    }

    var currentFileArr = document.location.href.match(/[^\/]+$/);
    var currentFile = currentFileArr != null ? currentFileArr[0] : "index.html";

    // Display the header and footer consistently across all pages.
    $('#header-placeholder').load(relativePath + 'header.html', function(response, status, xhr) {
        if (status === "success") {
            fixRelativePaths($(this), relativePath);

            // This code handles the hamburger menu
            const mobileNav = $('#mobile-nav');
            const headerBottomNav = $('#header-bottom-nav');
            headerBottomNav.hide(); // Start with nav hidden
            mobileNav.click(() => {
                headerBottomNav.toggle();
            });

            // Close header-bottom-nav when a link is clicked
            headerBottomNav.find('a').click(() => {
                headerBottomNav.hide();
            });
            
            // Set the 'active' class on the correct navigation link
            $('#header-bottom-nav a').each(function() {
                var linkHref = $(this).attr('href');
                var linkFile = linkHref.substring(linkHref.lastIndexOf('/') + 1);
                if (linkFile === currentFile) {
                    $(this).addClass('active');
                }
            });
        }
    });

    $('#footer-placeholder').load(relativePath + 'footer.html', function(response, status, xhr) {
        if (status === "success") {
            fixRelativePaths($(this), relativePath);
            $('#copyright-year').text(new Date().getFullYear());
        }
    });

    // Carousel logic
    let carousel = document.querySelector('.carousel');
    if (carousel) {
        let currdeg  = 0;
        document.querySelector(".next").addEventListener("click", function() {
          currdeg = currdeg - 60;
          carousel.style.transform = "rotateY("+ currdeg +"deg)";
        });
        document.querySelector(".prev").addEventListener("click", function() {
          currdeg = currdeg + 60;
          carousel.style.transform = "rotateY("+ currdeg +"deg)";
        });
    }

    let carouselMobile = document.querySelector('.carousel-mobile');
    if (carouselMobile) {
        let currdegMobile  = 0;
        document.querySelector(".next-mobile").addEventListener("click", function() {
          currdegMobile = currdegMobile - 60;
          carouselMobile.style.transform = "rotateY("+ currdegMobile +"deg)";
        });
        document.querySelector(".prev-mobile").addEventListener("click", function() {
          currdegMobile = currdegMobile + 60;
          carouselMobile.style.transform = "rotateY("+ currdegMobile +"deg)";
        });
    }
});