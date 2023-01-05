$(function(){
    // 메인슬라이드
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });

    // 모든 a태그를 클릭하면 href속성 막기
    $('a').click(function(e){
        e.preventDefault();
    }); 

    //모든 탭내용을 숨김
    $('.tab_con > div').hide();
    //첫번째 탭내용만 보임
    $('.tab_con > div:first').show();

    // 탭메뉴
    $('.tab_title ul li').click(function(){
        $('.tab_title ul li:first').addClass('active');
        $('.tab_title ul li:last').removeClass('active');
        $('.tab_con > div:first').show();
        $('.tab_con > div:last').hide();
    });

    $('.tab_title ul li:last').click(function(){
        $('.tab_title ul li:first').removeClass('active');
        $('.tab_title ul li:last').addClass('active');
        $('.tab_con > div:first').hide();
        $('.tab_con > div:last').show();
    });

    //탭메뉴-와플 슬라이드
    var swiper2 = new Swiper(".waffle_Swiper", {
        loop:true,
        pagination:{
            el: ".waffle_Swiper .swiper-pagination",
            clickable: true,
        },
           
        navigation: {
            nextEl: ".waffle_Swiper .swiper-button-next",
            prevEl: ".waffle_Swiper .swiper-button-prev",
        },

        breakpoints:{
            481: {
                slidesPerView: 1,
                spaceBetween: 0,
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 50,
            },

            1281: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });

    //탭메뉴-커피 슬라이드
    var swiper3 = new Swiper(".coffee_Swiper", {
        loop:true,
        pagination:{
            el: ".coffee_Swiper .swiper-pagination",
            clickable: true,
        },
           
        navigation: {
            nextEl: ".coffee_Swiper .swiper-button-next",
            prevEl: ".coffee_Swiper .swiper-button-prev",
        },

        breakpoints:{
            481: {
                slidesPerView: 1,
                spaceBetween: 0,
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 50,
            },

            1281: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },

    });

    //이벤트 슬라이드 영역
    var swiper4 = new Swiper(".eventSlide", {
        slidesPerView: 1.5,
        spaceBetween: 30,
        loop:true,
        navigation: {
            nextEl: ".eventSlide .swiper-button-next",
            prevEl: ".eventSlide .swiper-button-prev",
        },

        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },

        breakpoints:{
            480: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            
            1280: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
        
    });

    //이벤트 슬라이드 안의 이미지의 세로길이 설정
    var event_img=$('.notice .eventSlide .swiper-slide .event_img');
    var img_width=event_img.width();
    event_img.css('height', img_width*1.1);

    // 모바일에서만 실행이 되어야만 함
    if($(window).width() <= 1280) {

        // 햄버거 메뉴를 클릭하면 팝업메뉴가 왼쪽에서 나타남 */
        $('.menu').click(function(){
            $('.popup_menu').animate({'left': 0});
            //윈도우의 화면 스크롤을 막음
            $('html,body').css('overflow-y','hidden');

        });

        // 팝업 메뉴의 닫기 버튼을 클릭하면 팝업 메뉴가 왼쪽으로 들어감
        $('.close_btn').click(function(){
            $('.popup_menu').animate({ 'left': '-110vw'});
            $('html,body').css('overflow-y','visible');
        });

        // 팝업메뉴의 아코디언 메뉴
        var popup_nav = $('.popup_menu .popup_nav nav > ul > li > a');
        popup_nav.click(function(){
            if($(this).attr('class') != 'active'){
                popup_nav.next().slideUp();
                popup_nav.removeClass('active');
                $(this).next().slideDown();
                $(this).addClass('active');

            }else{
                $(this).next().slideUp();
                $(this).removeClass('active');
            }
        });

    }else{
        // 모바일이 아니면 실행
        $('header nav .sub').hide();
        $('header nav > ul > li > a').hover(function(){
            $('header nav .sub').stop().slideDown();
            $('header nav .sub').css('z-index',11)
            $(this).next().css('z-index',20);
        });
            
        $('header nav').mouseleave(function(){
            $('header nav .sub').stop().slideUp();

        });
    }

    //PC버전에서만 fullpage가 실행 
    if($(window).width()>=1281){
        $('#fullpage').fullpage();
    }



});