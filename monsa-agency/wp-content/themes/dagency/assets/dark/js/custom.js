/* -----------------------------------------------------------

[ Custom Settings ]

01. ScrollIt
02. Preloader
03. Navbar scrolling background
04. Close navbar-collapse when a clicked
05. Close mobile menu "on click"
06. Sections background image from data background 
07. Slider & Slider-Fade owlCarousel
08. Services owlCarousel
09. Services 2 owlCarousel
10. Team owlCarousel
11. Portfolio owlCarousel
12. Portfolio Home owlCarousel 
13. Services owlCarousel
14. Services 2 owlCarousel
15. Testimonials owlCarousel
16. Portfolio owlCarousel
17. Blog owlCarousel
18. MagnificPopup (Image, Youtube, Vimeo & Custom PopUp)
19. Accordion
20. Isotope Active Masonry Gallery
21. Animations
22. YouTubePopUp
23. Scroll back to top

----------------------------------------------------------- */

$(function () {
    "use strict";
    var wind = $(window);
    
    // ScrollIt
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -70 // offste (in px) for fixed top navigation
    });
    
    // Preloader
    $("#preloader").fadeOut(500);
    $(".preloader-bg").delay(500).fadeOut(500);
    var wind = $(window);
    
    // Navbar scrolling background
    wind.on("scroll", function () {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo1> img");
        if (bodyScroll > 100) {
            navbar.addClass("nav-scroll");
            logo.attr('src', 'https://shthemes.net/demosd/dagency/wp-content/uploads/2025/05/logo-1.png');
        } else {
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'https://shthemes.net/demosd/dagency/wp-content/uploads/2025/05/logo-1.png');
        }
    });
   
    // Close navbar-collapse when a clicked
    $(".navbar-nav .dropdown-item a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    // Close mobile menu "on click"
    $(function () {
        var navMain = $(".scroll-init");
        navMain.on("click", "a", null, function () {
            navMain.collapse('hide');
        });
    });
    
    // Sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    
    // Slider & Slider-Fade owlCarousel  
    $(document).ready(function () {
        var owl = $('.header .owl-carousel');
        // Slider owlCarousel - (Inner Page Slider)
        $('.slider .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            margin: 0,
            autoplay: false,
            autoplayTimeout: 5000,
            nav: true,
            navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    dots: false,
                },
                600: {
                    dots: false,
                },
                1000: {
                    dots: false,
                }
            }
        });
        $('.slider-fade .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            margin: 0,
            autoplay: false,
            autoplayTimeout: 5000,
            animateOut: 'fadeOut',
            nav: true,
            navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>']
        });
        owl.on('changed.owl.carousel', function (event) {
            var item = event.item.index - 2; // Position of the current item
            $('h6').removeClass('animated fadeInUp');
            $('h1').removeClass('animated fadeInUp');
            $('h2').removeClass('animated fadeInUp');
            $('h5').removeClass('animated fadeInUp');
            $('p').removeClass('animated fadeInUp');
            $('.button-1').removeClass('animated fadeInUp');
            $('.button-2').removeClass('animated fadeInUp');
            $('.button-3').removeClass('animated fadeInUp');
            $('.button-4').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h6').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h2').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h5').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.button-1').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.button-2').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.button-3').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.button-4').addClass('animated fadeInUp');
        });
    });
    
    // Team owlCarousel
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        dots: false,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('.rooms2 .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    
    // Portfolio owlCarousel 
    $('.portfolio .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            }
        }
    });
    
    // Portfolio Home owlCarousel
    $(".portfolio-home-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoHeight: false,
        autoplayTimeout: 5000,
        dots: false,
        nav: true,
        navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                dots: false,
                items: 1,
            },
            600: {
                dots: false,
                items: 1,
            },
            1000: {
                dots: false,
                items: 1,
            }
        }
    });
    
    // Services owlCarousel 
    $('.services .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    // Services 2 owlCarousel 
    $('.services2 .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        mouseDrag: true,
        autoplay: false,
        autoplayTimeout: 5000,
        dots: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    // Clients owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        loop: true
        , margin: 45
        , stagePadding: 0
        , smartSpeed: 3500
        , mouseDrag: true
        , autoplay: true
        , autoplayTimeout: 3500
        , autoplayHoverPause: false
        , dots: false
        , nav: false
        , navText: ["<span class='fa-light fa-angle-left'></span>", "<span class='fa-light fa-angle-right'></span>"]
        , responsiveClass: true
        , responsive: {
            0: {
                items: 2
            , }
            , 600: {
                items: 3
            , }
            , 1000: {
                items: 5
            , }
        }
    });
    
    //  Blog owlCarousel 
    $('.blog .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
     
    // Gallery Scroll owlCarousel
    $('.galleryscroll .owl-carousel').owlCarousel({
        loop: true
        , margin: 20
        , mouseDrag: true
        , autoplay: true
        , autoplayTimeout: 4000
        , smartSpeed: 1000
        , dots: false
        , nav: false
        , navText: ["<span class='fa-light fa-angle-left'></span>", "<span class='fa-light fa-angle-right'></span>"]
        , autoplayHoverPause: true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            , }
            , 1000: {
                items: 4
            , }
        }
    });
    
    // MagnificPopup
    $(".img-zoom").magnificPopup({
        type: "image",
        closeOnContentClick: !0,
        mainClass: "mfp-fade",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        }
    })
    $('.magnific-youtube, .magnific-vimeo, .magnific-custom').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 300,
        preloader: false,
        fixedContentPos: false
    });
    
    // Accordion
    if ($(".accordion-box").length) {
        $(".accordion-box").on("click", ".acc-btn", function () {
            var outerBox = $(this).parents(".accordion-box");
            var target = $(this).parents(".accordion");
            if ($(this).next(".acc-content").is(":visible")) {
                //return false;
                $(this).removeClass("active");
                $(this).next(".acc-content").slideUp(300);
                $(outerBox).children(".accordion").removeClass("active-block");
            } else {
                $(outerBox).find(".accordion .acc-btn").removeClass("active");
                $(this).addClass("active");
                $(outerBox).children(".accordion").removeClass("active-block");
                $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
                target.addClass("active-block");
                $(this).next(".acc-content").slideDown(300);
            }
        });
    }
    
    // Isotope Active Masonry Gallery
    $('.gallery-items').imagesLoaded(function () {
        // Add isotope on click filter function
        $('.gallery-filter li').on('click', function () {
            $(".gallery-filter li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".gallery-items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });
        $(".gallery-items").isotope({
            itemSelector: '.single-item',
            layoutMode: 'masonry',
        });
    });
    
    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            } else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    $(function () {
        contentWayPoint();
    });
    
    // YouTubePopUp
    $("a.vid").YouTubePopUp();
    
    // Video Text
    letterCarousel('.video-wrapper', '.video-text');
    function letterCarousel(parent_cls, child_cls) {
        var e = jQuery(parent_cls + ' ' + child_cls)
            , t = jQuery(window).height();
        jQuery(window).on("scroll", function () {
            if (jQuery(parent_cls).length) {
                var t = jQuery(document).scrollTop() + jQuery(window).height()
                    , n = jQuery(parent_cls).offset().top;
                if (n <= t) {
                    var i = jQuery(document).scrollTop() - n + jQuery(window).height();
                    var scroll = i - 150;
                    var scroll_slow = scroll + ((scroll / 70) / 100);
                    var img_scroll = scroll_slow * 30 / 100;
                    e.css({
                        transform: "translateX(" + img_scroll + "px)"
                    })
                }
            }
        });
    }
    
    // Scroll back to top
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    })

jQuery(document).ready(function($) {
    document.body.addEventListener('click', function (e) {
        const minusBtn = e.target.closest('.qty-minus');
        const plusBtn = e.target.closest('.qty-plus');
        
        if (minusBtn) {
            e.preventDefault();
            const quantityDiv = minusBtn.closest('.quantity');
            const input = quantityDiv.querySelector('.qty');
            let currentVal = parseFloat(input.value) || 0;
            const step = parseFloat(input.step) || 1;
            const min = parseFloat(input.min) || 0;
            input.value = Math.max(currentVal - step, min);
            jQuery(input).trigger('input').trigger('change');
        } else if (plusBtn) {
            e.preventDefault();
            const quantityDiv = plusBtn.closest('.quantity');
            const input = quantityDiv.querySelector('.qty');
            let currentVal = parseFloat(input.value) || 0;
            const step = parseFloat(input.step) || 1;
            const max = parseFloat(input.max) || Infinity;
            input.value = Math.min(currentVal + step, max);
            jQuery(input).trigger('input').trigger('change');
        }
    });
});

jQuery(document).ready(function($) {
    const galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    const galleryMain = new Swiper('.gallery-main', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });
});

    
jQuery(document).ready(function($) {
    // Pre-initialize all modals on page load for better first-click response
    $('.modal').each(function() {
        $(this).modal({ show: false });
        $(this).data('modal-initialized', true);
    });
    
    // Handle icon button click
    $('.icon-btn').on('click', function(e) {
        e.preventDefault(); // Prevent any default action
        
        var targetModal = $(this).data('target');
        var $modalElement = $(targetModal);
        
        // Double-check modal is initialized
        if (!$modalElement.data('modal-initialized')) {
            $modalElement.modal({ show: false });
            $modalElement.data('modal-initialized', true);
        }
        
        // Get slider elements
        var mainSlider = $modalElement.find('.product-main-slider')[0];
        var thumbSlider = $modalElement.find('.product-thumbnail-slider')[0];
        
        // If sliders not found, just show modal immediately
        if (!mainSlider || !thumbSlider) {
            setTimeout(function() {
                $modalElement.modal('show');
            }, 50);
            return;
        }
        
        // Get existing swiper instances if already created
        var mainSwiper = $modalElement.data('mainSwiper');
        var thumbSwiper = $modalElement.data('thumbSwiper');
        
        // Show modal function with delay to ensure DOM is ready
        function showModal() {
            setTimeout(function() {
                $modalElement.modal('show');
            }, 50);
        }
        
        // If swipers don't exist yet, create them
        if (!mainSwiper || !thumbSwiper) {
            // IMPORTANT FIX: Create thumbnail swiper first
            thumbSwiper = new Swiper(thumbSlider, {
                loop: true,
                spaceBetween: 10,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                init: true // Initialize immediately
            });
            
            // Store thumb swiper right away
            $modalElement.data('thumbSwiper', thumbSwiper);
            
            // Create main swiper with options, but INITIALIZE DIRECTLY instead of using .init()
            mainSwiper = new Swiper(mainSlider, {
                loop: true,
                spaceBetween: 10,
                init: true, // Initialize immediately
                navigation: {
                    nextEl: mainSlider.querySelector('.swiper-button-next'),
                    prevEl: mainSlider.querySelector('.swiper-button-prev'),
                },
                pagination: {
                    el: mainSlider.querySelector('.swiper-pagination'),
                    clickable: true,
                },
                thumbs: {
                    swiper: thumbSwiper
                }
            });
            
            // Store the main swiper
            $modalElement.data('mainSwiper', mainSwiper);
            
            // IMPORTANT: Show modal directly - don't wait for init event
            showModal();
        } else {
            // Update existing swipers and show modal
            try {
                mainSwiper.update();
                thumbSwiper.update();
            } catch (e) {
                console.log("Swiper update error:", e);
                // Recreate swipers if update fails
                thumbSwiper = new Swiper(thumbSlider, {
                    loop: true,
                    spaceBetween: 10,
                    slidesPerView: 4,
                    freeMode: true,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    init: true
                });
                
                $modalElement.data('thumbSwiper', thumbSwiper);
                
                mainSwiper = new Swiper(mainSlider, {
                    loop: true,
                    spaceBetween: 10,
                    init: true,
                    navigation: {
                        nextEl: mainSlider.querySelector('.swiper-button-next'),
                        prevEl: mainSlider.querySelector('.swiper-button-prev'),
                    },
                    pagination: {
                        el: mainSlider.querySelector('.swiper-pagination'),
                        clickable: true,
                    },
                    thumbs: {
                        swiper: thumbSwiper
                    }
                });
                
                $modalElement.data('mainSwiper', mainSwiper);
            }
            
            showModal();
        }
    });
    
    // Handle modal close
    $(document).on('click', '[data-dismiss="modal"]', function() {
        var modal = $(this).closest('.modal');
        modal.modal('hide');
    });
});
    
});