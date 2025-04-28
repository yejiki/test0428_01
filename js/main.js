$(document).ready(function(){
  AOS.init();

  //모바일메뉴
  $(".mgnb-wrap").hide();

  $(".btn-menu").click(function(){
    $(".mgnb-wrap").fadeIn();
  });
  $(".mgnb-close").click(function(){
    $(".mgnb-wrap").fadeOut();
  });


  //검색영역
  $(".search").hide();

  $(".btn-search").click(function(){
    $(".search").fadeToggle();
    $("header").toggleClass("active");
    $(this).toggleClass("active");
  });


  //상단메뉴
  $(".depth2, .depth2-bg").hide();

  $("header nav .gnb > li").mouseenter(function(){
    $(this).children(".depth2").stop().fadeIn();
    $(".depth2-bg").stop().fadeIn();
    $("header").addClass("active");
  });

  $("header nav .gnb > li").mouseleave(function(){
    $(this).children(".depth2").stop().fadeOut();
    $(".depth2-bg").stop().fadeOut();
    $("header").removeClass("active");
  });
  

  //모바일 2차메뉴
  $(".mgnb > li").click(function(){
    $(this).children(".mdepth2").slideDown();
  });


  //mb
  const mb = new Swiper('.mb', {

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction", // 'bullets' 'fraction' 'progressbar'
      clickable: true,
    },

  });



  //재생정지
  $(".mb-play").hide();

  $(".mb-pause").click(function(){
    mb.autoplay.stop();
    $(".mb-play").show();
    $(".mb-pause").hide();
  });

  $(".mb-play").click(function(){
    mb.autoplay.start();
    $(".mb-play").hide();
    $(".mb-pause").show();
    
  });

  //공지
  const news_list = new Swiper('.news-list', {
    autoplay: {
      // 자동슬라이드
      delay: 5000, // 슬라이드 한장이 머무르는 시간 5000 = 5초
      disableOnInteraction: false,
    },
    loop: true, // 슬라이드 반복 (centeredSlides 사용안됨)
    direction: "vertical", // 수직 슬라이드 (높이값 설정)
  });


  //
  const prd_list = new Swiper('.prd-list', {
    
    loop: true, 

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: { 
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      type: "progressbar", // 'bullets' 'fraction' 'progressbar'
      clickable: true,
    },

  });

  //아코디언 배너
  $("#store ul li").eq(0).addClass("active");
  $("#store ul li").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active")
    })


  //탭메뉴
  //첫번째 탭 빼고 숨기기
  $("#brand .brand-img ul li").not(":first").hide();
 

  //#brand .brand-img ul li 클릭하면
  $("#brand .brand-name ul li").click(function(){
    //1.선택한 li만 active가 붙고 나머지는 active지워져야함
    $(this).addClass("active").siblings().removeClass("active");
    //2.선택한 li의 순번을 담을 변수 생성
    let aa = $(this).index();
    //3.#brand .brand-img ul li중 순번과 동일한 요소만 보여주고 나머지는 숨겨야함
    $("#brand .brand-img ul li").eq(aa).fadeIn().siblings().hide();

  });



//끝
});