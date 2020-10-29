$(function () {
var totalImg;
var loadImg = 0;
//프리로딩
$(".fullpage").imagesLoaded().progress(function(index , image){
    totalImg = index.images.length;
    loadImg++;
    var percent = Math.floor(loadImg/totalImg*100);
    console.log(percent);
    $(".wrap_loading > span").css({"width": percent+"%"}).text(percent);
}).done(function(){ //이미지 로드 완료 이벤트
$(".wrap_loading").addClass("on");
// 한번더 프리로드를 제거해 줘야 한다: 다른 js 반응 해야해서
setTimeout(function(){
    $(".wrap_loading").remove();
},700)
init()
});

});
//common
//초기 셋팅 함수
function init() {
    //풀페이지 플러그인 호출
    $(".fullpage").fullpage({
        //각 섹션별 색상 지정
        sectionsColor: ["", "#eaeef2", "#b6e4fe", "e2bcd4", "fff"],
        navigation: true,
        navigationTooltips: ["MAIN", "PROPILE", "SKILL", "PORTFOLIO", "CONACT"],
        anchors: ["page1", "page2", "page3", "page4", "page5"],
        scrollingSpeed: 1500,
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex == 1) { //메인으로 이동했을때
                $(".ico").css({ 'transform': 'translateY(0px)' })
            } else { //메인 이외의 section으로 갔을때
                $(".ico").css({ 'transform': 'translateY(-300px)' })
            }
        },
        afterLoad: function (name, index, direction) { //섹션,페이드인효과
            $(".section").eq(index - 1).addClass("on");
        }
    });
    //main
    //main a링크 hover 효과
    $("#section0 .wrap_link li a").mouseover(function () {
        // 인덱스를 찾아서 > 그 bg라운드에 addclass
        var idx = $(this).parent().index();
        // a가 형제가 없어서, a의 부모가 되는 li에서 인덱스 찾기> parent
        $("#section0 .wrap_bg .bg").removeClass("on");
        // 먼저 세 녀석 다 제거 해주고 , 초기화 후에 
        $("#section0 .wrap_bg .bg").eq(idx).addClass("on");
    }).mouseout(function () {
        $("#section0 .wrap_bg .bg").removeClass("on");

    })
    $("#section0").parallax({
        imageSrc: 'img/bg_main.png'
    });




    // profile
    //profile a링크 호버 효과
    $("#section1 .wrap_link a").mouseover(function () {
        var idx = $(this).parent().index();
        $("#section1 .wrap_bg").removeClass("select_0 select_1 select_2");
        $("#section1 .wrap_bg").addClass("select_" + idx);
        // 무조건 영만 아니라, 숫자가 늘어나야 해서
    }).mouseout(function () {
        // 마우스 아웃 됬을시
        $("#section1 .wrap_bg").removeClass("select_0 select_1 select_2");
    });

    // skill
    var id; //setinterval 을 저장하는 변수
    var unit = $('#section2 .wrap_wave .unit');

    $("#section2 .wrap_link > li >a").mouseover(function () {
        var idx = $(this).parent().index(); //인덱스 값을 idx변수안에
        if (idx == 0) {
            //인덱스 0
            unit.css("transform", "translateY(0%)")
        } else if (idx == 1) {
            unit.css("transform", "translateY(55%)")
        } else if (idx == 2) {
            unit.css("transform", "translateY(24%)")
        } else if (idx == 3) {
            unit.css("transform", "translateY(73%)")
        }
        clearInterval(id);
        id = setInterval(checkNum, 10); //a링크에 마우스 오버하는 시점에어 0.01초 마다 호출하는 setinterval
    }).mouseout(function () {
        unit.css("transform", "translateY(100%)");
    });
    unit.on("transitionend", function () { //마우스 멈출때 셋인터벌 멈춤
        clearInterval(id); //연속 호출되는 셋인버털 정지
    });
    function checkNum() {
        var value = unit.css('transform').split(",")[5];
        value = value.replace(")", "");
        var allH = $("#section2 .wrap_wave").height();
        value = 100 - Math.round(value / allH * 100); //소수점 버리기
        console.log(value);
        $("#section2 .wrap_wave .unit .num > strong").text(value);
    }
    // 포트폴리오 ,슬릭필요
    $("#section3 .wrap_photo > ul").slick({
        //슬릭 상세 설정
        dots: false, //pager 버튼 역할 삭제
        slidsToshow: 3, //한 화면에 보여지는 이미지 갯수
        slidesToScroll: 1, //한번의 이벤트에 슬라이드 이동 갯수
        variableWidth: true, //이미지 넓이 속성-동일하게
        centerMode: true, //가로에 대한 정렬
        arrows: false //좌우로 나오는 화살표 삭제
    }).on("afterChange", function (event, slick, current) {
        $("#section3 .wrap_txt > ul >li").removeClass("select"); //처음에 있던 select 클레스를 없앰
        $("#section3 .wrap_txt > ul >li").removeClass("select").eq(current).addClass("select");
        //기존에 있던 select를 지우고, 해당 eq에 current를 넣기
    })
    // 커서
    document.addEventListener("mousemove", function (e) {
        //특정 선택자document(브라우저) 마우스 오버 이벤트를 건다. 
        var ul = $("#section3 .wrap_photo > ul"); //커서의 기준점
        var cursor = $("#section3 .wrap_photo .cursor"); //빨간색 커서 선택
        var cW = cursor.width() / 2;
        var cH = cursor.height() / 2;
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        // console.log(mouseX,mouseY);
        cursor.css({
            "top": mouseY - cH,
            "left": mouseX - cW
        });
    });
    // contact
    $("#section4 .wrap_input input").on("textInput", function (e) { //input에 타이핑시 발생하는 이벤트
        // console.log(e.originalEvent.data);
        var value = e.originalEvent.data; //타이핑한 키값
        //랜덤 구하기 Math.random()은 랜덤 값을 구한다*숫자 이하의 모든 수(소수점)
        //Math.floor()은 소수점 버리고 자연수 만듬
        var randomNum = Math.floor(Math.random() * 3); //텍스트 애니메이션 css에 필요한 랜덤값
        var c1 = Math.floor(Math.random() * 256);//c1,c2,c3은 텍스트 색상값(rgb)
        var c2 = Math.floor(Math.random() * 256);
        var c3 = Math.floor(Math.random() * 256);
        //console.log(randomNum);
        //$("#section4 .wrap_txt_inner").append("<span>"+value+"</span>"); //동적으로 span을 추가
        $("<span style='color:rgb("+c1+","+c2+","+c3+")'>" + value + "</span>").appendTo("#section4 .wrap_txt_inner")
            .addClass("ani" + randomNum)
            .on("animationend", function () {//ani0, ani1 ,  ani2 애니메이션이 끝나는 시점에 발생하는 이벤트
                //애니메이션이 끝나고 난뒤 발생하는 함수
                $(this).remove(); //해당 엥ㄹ리먼트 태그를 삭제함
            });
    });
};