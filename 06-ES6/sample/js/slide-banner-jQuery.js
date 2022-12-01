$(function(){
    //보여지는 배너를 체크할 변수
    let showBanner = 0;  //초기값0

    //let liWidth = $(".banner>li").eq(0).width(); //li의 너비값
    let moveX = 0;

    //복사
    let cloneObj = $(".banner>li").eq(0).clone();  //clone() 복제해서 li가 1개늘어남. 6개가됨.
    $(".banner").append(cloneObj);                 //append:(속)뒤에 붙이기
    let liWidth = $(".banner>li").eq(0).width();   //(순서중요)복사한 이후의 사이즈 계산
    //배너의 개수
    let count = $(".banner>li").length; 
    console.log(count); //6 찍힘 (배너5개+복사본1개)

    //자동으로 이동
    let timer;

    function moveSlide(){
        moveX =  -liWidth*showBanner;
        $(".banner").stop().animate({
            "margin-left":moveX+"px"
        },500)

        if(showBanner === 5){
            //다음버튼 눌러서 콘솔에 찍힌 showBanner가 4가되면 복사본 1번째(1번배너)가 나와야함.
            //.eq(0): li첫번째것이 활성화(add)되고 나머진 비활성화(remove)
            $(".pager>li").eq(0).addClass("active") //클릭한 페이지버튼에 class추가/나머진삭제
            .siblings("li").removeClass("active");  //sibings("li") 나머지 자식인li들
        }
        else{
            $(".pager>li").eq(showBanner).addClass("active")
            .siblings("li").removeClass("active");
        }      
    }

    //오른쪽버튼을 클릭하면 배너한개를 왼쪽으로 이동
    $(".rightBtn").on("click",function(){
        console.log(showBanner);  //다음버튼 눌러서 콘솔에 찍힌 showBanner가 5가되면 배너가없으므로
        if(showBanner === 5){
            showBanner = 0;
            $(".banner").css("margin-left",0);            
        }
        showBanner++; //처음값0에서 1씩 증가
        moveSlide(); 
    })
    //왼쪽버튼을 클릭하면 배너한개를 오른쪽으로 이동
    $(".leftBtn").on("click",function(){
        if(showBanner === 0){
            showBanner = count-1; //showBanner를 5로! 
            $(".banner").css("margin-left", -(count-1)*liWidth) //복사본이 앞(왼쪽)으로 5칸을 와야함.
        }
        showBanner--; //처음값0에서 1씩 감소
        moveSlide(); 
    })
    //버튼을 클릭하면 해당하는 배너가 슬라이딩되면서 보이도록
    $(".pager>li").on("click",function(){
        console.log($(this).index()); //현재 내가 몇번째를 클릭하고 있는지?
        showBanner = $(this).index();
        moveSlide();
    })

    //3초 마다 배너가 하나씩 이동하도록
    //오른쪽 버튼을 클릭한것처럼 한개씩 왼쪽으로 이동   
    timer = setInterval(() => {
        $(".rightBtn").trigger("click");
    },3000)

    //배너에 마우스를 올리면 배너가 중지
    //마우스가 벗어나면 배너 자동실행
    $("#mainBanner").on({
        "mouseover":function(){
            clearInterval(timer);
        },
        "mouseout":function(){
            timer = setInterval(() => {
                $(".rightBtn").trigger("click");
            },3000)
        }
    })
});