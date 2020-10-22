$(function(){
    $(".input_area input[type='text']").keypress(function(e){
//console.log(e.keyCode);
if(e.keyCode == 13 && $(this).val().length > 0){ //엔터를 누를 겨우와, 입력하고 있는 input에 값이 있을때 실행하는 조건문
   var _val = $(this).val(); //입력된 input의 내용을 담는 변수
   var _class = $(this).attr("class"); //입력된 input의 클레스명을 담는 변수
   
  var _time;
  //현재 시간구하기 
var _data = new Date(); //pc에 있는 시간이 데이터 변수에 담김
var _hh = _data.getHours(); //시간 정보중 시간만 담김
var _mm = _data.getMinutes();


// 시간 오전 오후 계산
var _apm = "오전"; //초기값을오전으로 해두면, 조건문이 12을 넘으면 오후
if(_hh > 12){
    _apm = "오후"
    _hh = _hh - 12; //시간에서 12을 빼고 변수 hh에 다시 값을 담음
}
if(_hh < 10 ){
    _hh = "0"+_hh; //hh시간이 10보다 작을때 나 자신에게 +0을 더함
} 
if(_mm < 10) _mm = "0" + _mm; //분이 한자리일 경우(0~9) 앞에 0을 추가
var _ct = _apm +":" + _hh + ":"+ _mm; //시+분+초를 하나의 변수에 담기

  //현재 시간 구하기 끝
   //말풍선 태그를 추가하는 append
  $(".chat_area").append('<div class="item '+_class+'"><div class="box"><p class="msg">'+_val+'</p><span class="time">'+_ct+'</span></div></div>')
  //트렌지션 효과를 쓰기 위해 0.01초 딜리에 타임 이후 on 클레스를 추가해줌
  setTimeout(function(){
    $(".chat_area .item").last().addClass("on");
    //내용 추가 후 스크롤을 맨 밑으로 내림
    var _itemH = $(".chat_area .item").height() + 15; //각 아이템의 높이 체크
    var __itemC = $(".chat_area .item").length; //아이템의 갯수 체크
    var _itemTOtal = (_itemH *__itemC -15); //처음 높이값은 마진 값이 없어서 한번만 15를 빼준다.
    //$(".chat_area").scrollTop(_itemTOtal);
    $(".chat_area").stop().animate({
        scrollTop:_itemTOtal
    },500);
},10)
  
  $(this).val(""); //input의 내용을 삭제
   
    // 엔터 키코드 13일 때만 콘솔에 표기
};
    });
})

//현재 시간 > 최산화 