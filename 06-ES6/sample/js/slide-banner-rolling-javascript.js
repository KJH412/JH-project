window.onload=function(){
    //선택자를 선언하기
    let mainBanner = document.querySelector("#mainBanner"); 
    let banner = document.querySelector(".banner");
    let bannerLi = document.querySelectorAll(".banner>li");
    const pagerBtn = document.querySelectorAll(".pager>li");
    const arrowright = document.querySelector(".rightBtn");
    const arrowleft = document.querySelector(".leftBtn");
    //필요한 기본 변수선언
    //보여지는 배너를 체크할 변수
    let showBanner=0;
    let moveX=0;
    //복사되기 전에 li의 너비
    let liWidth=bannerLi[0].clientWidth;

    //복사
    //첫번째 li룰복사
    let cloneObj=bannerLi[0].cloneNode(true); //true:li속 자식요소 포함
    //마지막 li복사(순서중요)
    let lastObj = bannerLi[bannerLi.length-1].cloneNode(true);

    //복사한 처음요소를 배너 마지막에 붙임.
    banner.appendChild(cloneObj);
    //복사한 마지막요소를 배너 처음에 붙임.
    banner.insertBefore(lastObj,bannerLi[0]);

    //복사된 후의 li의 개수
    bannerLi=document.querySelectorAll(".banner>li");
    console.log(bannerLi);
    let count = bannerLi.length;
    //부모사이즈 수정
    banner.style.width=liWidth*count+"px";

    //처음 시작하는 배너
    showBanner=1;
    moveX= -liWidth;
    banner.style.transform=`translateX(${moveX}px)`;


    //자동으로이동
    let timer;

    function moveSlide(){
        //모든버튼 취소
        for(i=0; i<pagerBtn.length; i++){
            pagerBtn[i].classList.remove("active")
        }
        if(showBanner===6){
        pagerBtn[0].classList.add("active");
        } 
        else if(showBanner===0){
            pagerBtn[4].classList.add("active");
        } else{
            pagerBtn[showBanner-1].classList.add("active");
            //페이저는 0번부터시작하고, showBanner는 1부터 시작하므로 -1
        }


        moveX= -liWidth*showBanner;
        banner.style.transition="0.5s";
        banner.style.transform=`translateX(${moveX}px)`; //moveX만큼 이동
    }

    //오른쪽버튼 클릭하면 배너 한개씩 왼쪽으로 이동
    arrowright.addEventListener("click",function(e){
        e.preventDefault();
        showBanner++; //순서
        moveSlide();  //순서

        if(showBanner === count-1){ //5(복제된 6번쨰li에서 실행됨. translateX:0으로 되돌아가고 다시 showBanner=0부터 시작. )
            setTimeout(function(){     //setTimeout : 일정시간 후에 실행
                banner.style.transition="0s";
                showBanner=1;
                moveX=  -liWidth;
                banner.style.transform=`translateX(${moveX}px)`;
            },500);   
        }
    })

    //왼쪽버튼 클릭
    arrowleft.addEventListener("click",function(e){
        e.preventDefault();          
        showBanner--;
        moveSlide();

        if(showBanner === 0){
            setTimeout(function(){
                banner.style.transistion="0s";
                showBanner=bannerLi.length-2;
                moveX=  showBanner * liWidth;
                banner.style.transform =`translateX(${-moveX})px`;
              },500);
        }        
    })

    //pager
    pagerBtn.forEach((n,id)=> {
        pagerBtn[id].addEventListener("click",function(){
            showBanner = id+1; //순서가 id
            moveSlide();
        })
    })

    //자동 슬라이드
    timer = setInterval(()=>{
        arrowright.click();
    },3000);

    //#mainBanner mouseover되면 자동실행 취소
    //mouseout되면 자동실행 
    banner.addEventListener("mouseover",function(){
        clearInterval(timer);
    })
    banner.addEventListener("mouseout",function(){
        timer = setInterval(()=>{
            arrowright.click();
        },3000);
    })

 

}