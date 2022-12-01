window.onload=function(){
    //
    const banner = document.querySelector(".banner");
    const bannerLi = document.querySelectorAll(".banner>li");
    const arrowRight = document.querySelector(".rightBtn");
    const arrowLeft = document.querySelector(".leftBtn");
    const pagerBtn = document.querySelectorAll(".pager>li");

    //변수 초기화
    //몇번째 배너인지 체크할 변수
    let showBanner = 0;
    //배너 한개의 너비
    const liWidth = bannerLi[0].clientWidth;
    console.log(liWidth);
    let moveX = 0;
    
    /*버튼 클릭 이벤트*/
    arrowRight.addEventListener("click",moveRight);
    arrowLeft.addEventListener("click",moveLeft);

    function moveRight(e){
        e.preventDefault(); //기본동작 막아 주는 것.
        //e.currentTarget:이벤트를 준 대상
        //e.target:실제로 이벤트를 받은 대상.
        // console.log(e.target);
        if(showBanner === bannerLi.length-1) return;  
        showBanner++;
       
        moveSlide();//자동으로 바뀌는 함수 선언
    }
    function moveLeft(e){
        if(showBanner === 0) return; //showBanner가 0일 때 끝냄.
        showBanner--;

        moveSlide();  //함수선언     
    }


    /* 배너랑 페이지버튼연결 함수 */
    let moveSlide = () =>{
        //모든버튼클래스 취소
        for(i=0; i<pagerBtn.length; i++){
              pagerBtn[i].classList.remove("active");
        }     
        //보여지는 요소버튼만 클래스 추가
        pagerBtn[showBanner].classList.add("active");    
        moveX = -liWidth*showBanner;
        banner.style.transform = `translateX(${moveX}px)`
    }//결과는 똑같음. 


    /* 페이지버튼 클릭 */
    pagerBtn.forEach((n,id)=>{
        // console.log(n);//li 5개 다 출력됨.
        pagerBtn[id].addEventListener("click",function(){
            showBanner = id;
            
            moveSlide();  //함수선언     

            // console.log(id); //클릭한 버튼 순서 확인
            // console.log(n); //클릭한 버튼의 li 확인가능. 
  
        })
    });

    /*3초마다 오른쪽화살표를 클릭하기*/
    function showSliding(){
        setInterval(()=>{
        // console.log("dsfs");
        arrowRight.click(); //onclick이 아닌 click은 강제실행
        },3000)
    }
    showSliding(); 
}