window.onload=function(){
    //변수선언
    const menuWrap = document.querySelector(".menuWrap")
    const ham = document.querySelector(".hamBtn")

    function toggleMenu(){
        //1.(조건)클래스가있는지 체크 후 클래스추가.
        if(ham.classList.contains("on")){
            ham.classList.remove("on");
            menuWrap.classList.remove("activeMenu");
        }else{
        //클래스 추가
        ham.classList.add("on");
        menuWrap.classList.add("activeMenu");
        }
    }
    ham.addEventListener("click",toggleMenu);    
}