var mySwiper1 = new Swiper('.bg_experience.subpage .swiper-container', {
	slidesPerView: 1, //슬라이드를 한번에 3개를 보여준다
    spaceBetween: 30, //슬라이드간 padding 값 30px 씩 떨어뜨려줌
	loop: true, //loop 를 true 로 할경우 무한반복 슬라이드 false 로 할경우 슬라이드의 끝에서 더보여지지 않음
    navigation: {   // 버튼 사용자 지정
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
    pagination: {
        el: '.swiper-paging',
        type: 'fraction',
    },
});

var mySwiper2 = new Swiper('.slider_area.swiper-container', {
	slidesPerView: 1.5, //슬라이드를 한번에 3개를 보여준다
    spaceBetween: 0, //슬라이드간 padding 값 30px 씩 떨어뜨려줌
	loop: true, //loop 를 true 로 할경우 무한반복 슬라이드 false 로 할경우 슬라이드의 끝에서 더보여지지 않음
    loopedSlides:1,
    centeredSlides : true,
    navigation: {   // 버튼 사용자 지정
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
    pagination: {
        el: '.swiper-paging',
        type: 'fraction',
    },
    thumbs: {
        swiper: mySwiper3,
    },
    // controller: {
    //     control: mySwiper3,
    // },
});
var mySwiper3 = new Swiper('.desc_area .swiper-container', {
    slidesPerView: "auto", //슬라이드를 한번에 3개를 보여준다
    spaceBetween: 0, //슬라이드간 padding 값 30px 씩 떨어뜨려줌
	loop: true, //loop 를 true 로 할경우 무한반복 슬라이드 false 로 할경우 슬라이드의 끝에서 더보여지지 않음
    loopedSlides:1,
    centeredSlides : true,
    // navigation: {   // 버튼 사용자 지정
    //     nextEl: '.swiper-btn-next',
    //     prevEl: '.swiper-btn-prev',
    // },
    // controller: {
    //     control: mySwiper2,
    // },
    // pagination: {
    //     el: '.swiper-paging',
    //     type: 'fraction',
    // },
    effect: "fade",
});
mySwiper2.controller.control = mySwiper3;
mySwiper3.controller.control = mySwiper2;

var mySwiper4 = new Swiper('.visual.subpage .swiper-container', {
    effect: "fade",
	slidesPerView: 1, //슬라이드를 한번에 3개를 보여준다
    spaceBetween: 0, //슬라이드간 padding 값 30px 씩 떨어뜨려줌
	loop: false, //loop 를 true 로 할경우 무한반복 슬라이드 false 로 할경우 슬라이드의 끝에서 더보여지지 않음
    centeredSlides : true,
    navigation: {   // 버튼 사용자 지정
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
});