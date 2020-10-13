$(function () {
    $(".box_intro .btn_setting ").click(function () {
        $(".box_intro").hide();

        loadDataFn()
        //seatInfo
    });


    var complateData;
    //함수 밖에서선언 하는것이중요하다.
    //배열로 담아둠
    var seatSave = []; //선택된 자리 정보를 담는 배열
    var seatPriceSave = 0;

    function loadDataFn() {
        $.ajax({ //json데이터 넣기
            url: "js/data.json",
            dataType: "json",
            success: function (result) {
                complateData = result.seatInfo; //변수로 담은것
                settingSeatFn(); //자리 셋팅 함수 호출

            }
        });
    }
    //자리 셋팅 함수
    function settingSeatFn() {
        $(".section.reservation").show();
        console.log(complateData.length);
        for (var i = 0; i < complateData.length; i++) {

            var n = complateData[i].name;
            var p = complateData[i].price;
            var r = complateData[i].reserve;
            //.console.log(n, p)
            //$(".section.reservation> ol").append("<li class='unit'><button data-price='1000' class='select'>"+n+"</button></li>")
            $(".section.reservation> ol").append("<li class='unit'><button data-price=" + p + " " + r + ">" + n + "</button></li>")

        }

        $(".section.reservation .unit button").click(function () {
            $(this).toggleClass("select");
            seatSave = []; //같은 배열을 한번더 선언하면 배열 초기화
            seatPriceSave = 0; //가격 정보 초기화

            //select라는 클레스를 갖고 있는 정보만저장하는 for문
            for (var i = 0; i < complateData.length; i++) {
                var boo = $(".section.reservation .unit").eq(i).find("button").hasClass("select");
                if (boo) {
                    //console.log(complateData[i].name); //좌석 정보 배열에 선택좌석 저장
                    seatSave.push(complateData[i].name);
                    seatPriceSave += Number(complateData[i].price); //값을 더하는 연산자(축적)
                }
                //console.log(seatSave, seatPriceSave);
                //저장된 배열과 변수를 html에 업데이트 > text
                $(".txt_info_number").text(seatSave);
                //총비용에 값 넣기
                $(".txt_info_total").text(seatPriceSave);
            }

        });



    };
    //자리선택 완료 화면
    $(".btn_submit").click(function () {
        //기존에 있던 섹션에 
       // $(".section.reservation").hide();
       $(".section.reservation").slideUp();
       $(".section.complete").show();
      


        //좌석 이름 저장된 배열로 업데이트
        $(".txt_number").text(seatSave);
        //좌석 가격 저장된 변수로 없데이트
        $(".txt_price > strong").text(seatPriceSave);

   //리셋버튼
   $(".section.complete .btn_reset").click(function () {
    $(".section.complete").hide(); //완료 div를 숨김
    $(".box_intro").show(); //첫화면 div를 보여줌
    $(".section.reservation > ol .unit").remove(); //셋팅된 json데이터 로드후 셋팅된 자리 li를 삭제
    });
 
    });
})