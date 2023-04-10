$(function(){


    /**
     * @topSlide
     */
    
    const bannerSlide1 = new Swiper(".banner-slide1", {
        loop : true,
        effect : 'fade',
        speed:2000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    
    
    
    /**
     * @mainSlide
     */
    
    const visualSlide = new Swiper(".visual-slide", {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    
    

    /**
     * @searchPopup오픈
     */
    
    $('.btn-search').click(function(e){
        e.preventDefault(); 
        $('.popup-search').addClass('on');
        $('.sc-banner1').addClass('on');
        $('body').addClass('hidden')
    })
    
    $('.btn-back').click(function(e){
        e.preventDefault();
        $('.popup-search').removeClass('on')
        $('.sc-banner1').removeClass('on')
        $('body').removeClass('hidden')
    })
    
    

    /**
     * @sideMenu오픈
     */
    
    $('.btn-menu').click(function(e){
        e.preventDefault(); 
        $('.aside-menu').addClass('on')
    })
    
    $('.btn-close').click(function(e){
        e.preventDefault();
        $('.aside-menu').removeClass('on')
    })



    /**
     * @sideMenuToggle
     */

    $('.nav-item').click(function(e){
        e.preventDefault();

        $(this).children('.sub-list').stop().slideToggle()

        if ($(this).children('.btn-open').hasClass('on')){
            $(this).children('.btn-open').removeClass('on');
        } else {
            $(this).children('.btn-open').addClass('on');
        }
    })



    /**
     * @sideMenuBG
     */

    $('#menuBtn').click(function(e){
        e.preventDefault();

        $('.aside-menu,.gnb-bg').addClass('on');
        $('body').addClass('hidden')
    });

    $('.aside-menu .btn-close,.gnb-bg').click(function(e){
        e.preventDefault();

        $('.aside-menu,.gnb-bg').removeClass('on');
        $('body').removeClass('hidden')

    });



    /**
     * @tab
     * 
     */

    $('.sc-collect .cate-item a').click(function(e){
        e.preventDefault();

        target = $(this).data('tab');

        $(this).addClass('point').parent().siblings().children().removeClass('point');
        $(target).addClass('on').siblings().removeClass('on');

    });
    
    

    /**
     * @fixedBtns
     */
    
    let scrollTop = 0;
    $(window).scroll(function(){
        const curr = $(this).scrollTop();
      
        if ( curr > 0 ) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }  
  
        if(curr >= 100){
            if (curr < scrollTop) {
                $('.fixed-btns').addClass('show');
            } else {
                $('.fixed-btns').removeClass('show');
            }
            scrollTop = curr;
        } else {
            $('.fixed-btns').removeClass('show');
        }

    });
    
    $(window).trigger('scroll');
    
    
    
    /**
     * @topBtnToggle
     */

    $('#gnbBtn').click(function(){
        $('.gnb').toggleClass('on')
        $('.gnb .group-all').slideToggle();
    });
    
    
    
    /**
     * @itemSlide
     */

    const itemSlide = new Swiper(".cate-slide", {

        slidesPerView: 2.2,
        spaceBetween: 10,
        debugger: true

    });
    
    
    
    /**
     * @btnTop
     */

    $("#topBtn").click(function(){
        $("html, body").animate({scrollTop : 0}, 500);
        // window.scrollTo({top:0,behavior:"smooth"})
        return false;
    });
    

}); //삭제금지