$(function () {

    init(); //임시 호출
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
        onLeave:function(index, nextIndex, direction){
            if(nextIndex ==1){ //메인으로 이동했을때
                $(".ico").css({'transform' : 'translateY(0px)'})
            }else{ //메인 이외의 section으로 갔을때
                $(".ico").css({'transform' : 'translateY(-300px)'})
            }
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
$("#section2 .wrap_link > li >a").mouseover(function(){
var idx =  $(this).parent().index(); //인덱스 값을 idx변수안에
if(idx == 0){
    //인덱스 0
    $('#section2 .wrap_wave .unit').css("transform" , "translateY(0%)")
}else if(idx == 1){
    $('#section2 .wrap_wave .unit').css("transform" , "translateY(55%)")
}else if(idx == 2){
    $('#section2 .wrap_wave .unit').css("transform" , "translateY(24%)")
}else if(idx == 3){
    $('#section2 .wrap_wave .unit').css("transform" , "translateY(83%)")
}
});
};