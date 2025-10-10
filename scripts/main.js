document.addEventListener('DOMContentLoaded', function() {
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
