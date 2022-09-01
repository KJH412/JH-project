window.onload = function(){
    //버튼선택
    var btns = document.querySelectorAll(".pager>li")
    console.log(btns)
    //배너 선택
    var banners = document.querySelectorAll(".banner>li")
    console.log(banners)
    

    for(let i=0; i<btns.length; i++){
        btns[i].onclick = function(){
            // remove (다른 버튼 선택 > active제거)
            for(j=0; j<btns.length; j++){
                btns[j].classList.remove("active");
                banners[j].classList.remove("active");
            }
            btns[i].classList.add("active");
            banners[i].classList.add("active");
        }
    }
}