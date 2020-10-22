$(function () {
	//메인 헤더 스크롤 이벤트


	//네비 열기

	$(".header .btn_nav").click(function(){

		$(".header .navi_area").addClass("on");
		})
	//네비 닫기
	$(".header .btn_nav_close").click(function(){

		$(".header .navi_area").removeClass("on");
		})
	//메인 베너 슬라이드
	$(".section.visual > ul").bxSlider({
		slideWidth: 1080,
		slideMargin: 209,
		minSlides: 1,
		maxSlides: 2,
		moveSlides: 1,
		onSliderLoad: function() {
			//가로 위치를 가운데 오게 하는 사이즈 구하는 공식
			//처음 페이지가 실행될때 
			slide_resize();
		}
	});
	//리사이즈 이벤트
	$(window).resize(function() {
		slide_resize();
	})
	//베스트 아이템 슬라이드
	function slide_resize() {
		var main_slide_w = ($(".visual").with() - $(".visual .bx-wrapper ul >li").widht()) / 2;
		$(".visual .bx-wrapper ul").css({ "margin-left": main_slide_w });
	}


})