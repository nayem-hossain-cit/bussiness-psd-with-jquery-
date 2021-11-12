$(document).ready(function(){

    // back-top button show;
    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop();
        // back-top btn
        if(scrolling > 100){
            $('.bc-tp-btn').fadeIn();
        }else{
            $('.bc-tp-btn').fadeOut();
        }

        // navbar fixed
        if(scrolling > 100){
            $('.navbg').addClass('navbar-fixed');
        }else{
            $('.navbg').removeClass('navbar-fixed');
        };
    });

    // back-top click;
    $('.bc-tp-btn').on('click',function(){
        $('body,html').animate({
            scrollTop: '0',
        },1500);
    });

    // banner slider
    $('.banner-slider').slick({
        dots: true,
        prevArrow: '<i class="fas fa-chevron-left slick-prev left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-next right-arrow"></i>',
    });

    // testimonial-item slider
    $('.testi-main').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    // gallery filter 
    var mixer = mixitup('.gl-main');

    // gallery filter active class add remove
    $('.gallery-menu li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    // image/video show venobox gallery popup
    $('.venobox').venobox({
        spinner: 'wave',
        spinColor: '#ffc155',
        framewidth: '750px',
        closeColor: 'red',
        border: '3px',
    });


});