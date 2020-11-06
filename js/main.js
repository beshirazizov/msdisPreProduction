'use strict';

(function ($) {

    $('.width-to-height').each(function () {
        var width = $(this).width();
        $(this).css("height", width);
    });

    $(".selector span").click(function(){
        $(".selector span").removeClass("active");
        $(this).addClass("active");
        
        $(".projecttobeselected").addClass("d-none");

        if($(this).data("status")=="All"){
            $(".projecttobeselected").removeClass("d-none");
            return true;
        }
        
        var selection = $(this).data("status");
        $('.projecttobeselected[data-status='+selection+']').removeClass("d-none");
        
    });

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        if($(this).hasClass('darkenbg')){
            $(this).css('background-image', 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(' + bg + ')');
        }else{
            $(this).css('background-image', 'url(' + bg + ')');
        }
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });


    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: false
    });

    /*-----------------------
        Hero Slider
    ------------------------*/
    $(".images-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: false,
        smartSpeed: 2500,
        autoHeight: false,
        autoplay: true
    })

    $(".hero__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        nav: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 2500,
        autoHeight: false,
        mouseDrag:false,
        autoplayTimeout:5000,
        autoplay: true,
        onInitialized: function (e) {
            var a = this.items().length;
            $("#snh-1").html("<span>01</span><span>" + "0" + a + "</span>");
            var presentage = Math.round((100 / a));
            $('.slider__progress span').css("width", presentage + "%");
        }
    }).on("changed.owl.carousel", function (e) {
        var b = --e.item.index,
            a = e.item.count;
        $("#snh-1").html("<span> " + "0" + (1 > b ? b + a : b > a ? b - a : b) + "</span><span>" + "0" + a + "</span>");

        var current = e.page.index + 1;
        var presentage = Math.round((100 / e.page.count) * current);
        $('.slider__progress span').css("width", presentage + "%");
    });

    /*--------------------------
        Project Slider
    ----------------------------*/
    $(".project__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='arrow_carrot-left'><span/>", "<span class='arrow_carrot-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false,
        responsive: {
            320: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    /*-----------------------------
        Testimonial Slider
    -------------------------------*/
    $('.testimonial__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        // autoplay:true,
        asNavFor: '.testimonial__client',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"><i></i></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"><i></i></i></button>',
      });

    /*---------------------------------
        Logo Carousel
    ----------------------------------*/
    $(".logo__carousel").owlCarousel({
        loop: true,
        margin: 80,
        items: 5,
        dots: false,
        nav: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 2
            },
            576: {
                items: 3
            },
            992: {
                items: 5
            },
        }
    });

    /*------------------
        Counter
    --------------------*/
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
})(jQuery);