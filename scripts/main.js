document.addEventListener('DOMContentLoaded', function() {
    // Determine the base path for the project. On GitHub Pages, projects are in a
    // subdirectory (e.g., /repo-name/), while on other platforms like Firebase,
    // they are at the root (/).
    const isGitHubPages = window.location.hostname.endsWith('github.io');
    const repoName = isGitHubPages ? window.location.pathname.split('/')[1] || '' : '';
    const basePath = isGitHubPages ? `/${repoName}/` : '/';

    /**
     * Creates an absolute path from a path relative to the project root.
     * @param {string} path - The relative path.
     * @returns {string} The absolute path.
     */
    const resolvePath = (path) => {
        if (!path || typeof path !== 'string') {
            return '';
        }
        // If path is already a full URL, absolute, a special link, or data URI, return as is.
        if (path.startsWith('http') || path.startsWith('/') || path.startsWith('#') || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('data:')) {
            return path;
        }
        // For relative paths, prepend the base path.
        return basePath + path;
    };

    /**
     * Traverses a loaded HTML fragment and corrects the paths of assets like images,
     * scripts, and links to be absolute from the project root.
     * @param {jQuery} element - The jQuery element containing the loaded HTML.
     */
    function fixAssetPaths(element) {
        element.find('img, script, source').each(function() {
            const el = $(this);
            const src = el.attr('src');
            if (src) {
                el.attr('src', resolvePath(src));
            }
        });
        element.find('a, link').each(function() {
            const el = $(this);
            const href = el.attr('href');
            if (href) {
                el.attr('href', resolvePath(href));
            }
        });
    }

    // Load header
    $('#header-placeholder').load(resolvePath('header.html'), function(response, status, xhr) {
        if (status === "success") {
            fixAssetPaths($(this));

            // --- Post-load logic for header ---

            // Hamburger menu functionality
            const mobileNav = $('#mobile-nav');
            const headerBottomNav = $('#header-bottom-nav');
            if (mobileNav.length && headerBottomNav.length) {
                headerBottomNav.hide();
                mobileNav.on('click', () => {
                    headerBottomNav.toggle();
                });
                // Hide menu when a link inside it is clicked
                headerBottomNav.find('a').on('click', () => {
                    headerBottomNav.hide();
                });
            }

            // Highlight the active navigation link
            const currentPath = window.location.pathname;
            $('#header-bottom-nav a').each(function() {
                const link = $(this);
                const linkHref = link.attr('href');
                if (linkHref) {
                    const resolvedLinkHref = resolvePath(linkHref);
                    // Check if the current path ends with the resolved link path.
                    // This handles cases like /repo/ and /repo/index.html both matching.
                    if (currentPath === resolvedLinkHref || (currentPath + 'index.html') === resolvedLinkHref || currentPath === (resolvedLinkHref + 'index.html')) {
                        link.addClass('active');
                    }
                }
            });
        }
    });

    // Load footer
    $('#footer-placeholder').load(resolvePath('footer.html'), function(response, status, xhr) {
        if (status === "success") {
            fixAssetPaths($(this));
            const yearSpan = $('#copyright-year');
            if (yearSpan.length) {
                yearSpan.text(new Date().getFullYear());
            }
        }
    });

    // --- Carousel Logic ---
    function setupCarousel(containerSelector, prevSelector, nextSelector) {
        const carousel = document.querySelector(containerSelector);
        if (carousel) {
            let currdeg = 0;
            const nextButton = document.querySelector(nextSelector);
            const prevButton = document.querySelector(prevSelector);
            if (nextButton) {
                nextButton.addEventListener("click", () => {
                    currdeg -= 60;
                    carousel.style.transform = `rotateY(${currdeg}deg)`;
                });
            }
            if (prevButton) {
                prevButton.addEventListener("click", () => {
                    currdeg += 60;
                    carousel.style.transform = `rotateY(${currdeg}deg)`;
                });
            }
        }
    }

    setupCarousel('.carousel', '.prev', '.next');
    setupCarousel('.carousel-mobile', '.prev-mobile', '.next-mobile');
});