$(function () {

    init(); //임시 호출
});

//초기 셋팅 함수
function init() {
    //풀페이지 플러그인 호출
    $(".fullpage").fullpage({
        //각 섹션별 색상 지정
        sectionsColor: ["#d5dee5", "#eaeef2", "#b6e4fe", "e2bcd4", "fff"],
        navigation: true,
        navigationTooltips: ["MAIN", "PROPILE", "SKILL", "PORTFOLIO", "CONACT"],
        anchors: ["page1", "page2", "page3", "page4", "page5"],
        scrollingSpeed: 1500,
    });

    //main a링크 hover 효과
    $("#section0 .wrap_link li a").mouseover(function () {
        // 인덱스를 찾아서 > 그 bg라운드에 addclass
        var idx = $(this).parent().index();
        // a가 형제가 없어서, a의 부모가 되는 li에서 인덱스 찾기> parent
        $("#section0 .wrap_bg .bg").removeClass("on");
        // 먼저 세 녀석 다 제거 해주고 , 초기화 후에 
        $("#section0 .wrap_bg .bg").eq(idx).addClass("on");
    });


    //profile a링크 호버 효과
    $("#section1 .wrap_link a").mouseover(function(){
var idx = $(this).parent().index();
$("#section1 .wrap_bg").removeClass("select_0 select_1 select_2");
$("#section1 .wrap_bg").addClass("select_"+idx);
// 무조건 영만 아니라, 숫자가 늘어나야 해서
    });
    // 마우스 아웃 됬을시
    $("#section1 .wrap_link a").mouseout(function(){
        $("#section1 .wrap_bg").removeClass("select_0 select_1 select_2"); 
    });
};