document.addEventListener('DOMContentLoaded', function() {
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
        // let toTopLink = document.getElementById("to-top-link");

        // 1. Show/Hide button on scroll
        // window.onscroll = function() {
            // A scroll threshold of 100px
            // let scrollThreshold = 100;

            // Check both documentElement and body for cross-browser compatibility
            // if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
                // Using a class is cleaner than setting style.display directly
                // toTopLink.classList.add("show");
            // } else {
                // toTopLink.classList.remove("show");
            // }
        // };

        // 2. Smooth scroll to top on click
        // toTopLink.onclick = function(event) {
            // Prevent the default anchor behavior (#)
            // event.preventDefault();
            
            // Scroll smoothly to the top of the page
            // window.scrollTo({
                // top: 0,
                // behavior: 'smooth'
            // });
        // }
     });
    const mobileNav = document.getElementById('mobile-nav');
    const navList = document.querySelector('#header-bottom-nav ul');

    if (mobileNav) {
        mobileNav.addEventListener('click', function() {
            if (navList.style.display === 'none' || navList.style.display === '') {
                navList.style.display = 'block';
            } else {
                navList.style.display = 'none';
            }
        });
    }

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
