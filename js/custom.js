
// (function ($) {
//     "use strict"

    jQuery(document).ready(function($){
    var contentSections = $('.cd-section'),
        navigationItems = $('#side-nav a');

    updateNavigation();
    $(window).on('scroll', function(){
        updateNavigation();
    });

    //smooth scroll to the section
    navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    function updateNavigation() {
        contentSections.each(function(){
            $this = $(this);
            var activeSection = $('#side-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
            if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
                navigationItems.eq(activeSection).addClass('is-selected');
            }else {
                navigationItems.eq(activeSection).removeClass('is-selected');
            }
        });
    }

    function smoothScroll(target) {
        $('body,html').animate(
            {'scrollTop':target.offset().top},
            600
        );
    }


    //wow js
    new WOW().init();


    //owlCarousel js
    if ($('.owl-carousel').length > 0) {
        $('#testimonial .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 15,
            mouseDrag: false,
            autoplay: true,
            smartSpeed: 500
        });

    }

    //toggle btn js
    $('.header-toggle').on('click', function() {
        $('header .header-items').toggleClass('on');
    });


    });
// })(jQuery);