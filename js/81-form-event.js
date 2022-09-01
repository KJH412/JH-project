window.onload=function(){
    //checkText 데이터를 입력하면 콘솔 값 출력하기
    var checkText = document.querySelector("#checkText");
    checkText.addEventListener("select",function(e){
        console.log(e)
    })

    var uiLabel = document.querySelectorAll(".ui");
    for(i=0; i<uiLabel.length; i++){
        uiLabel[i].addEventListener("change",function(e){
            console.log(e)
        })
    }

    var like = document.querySelector("#likecolor");
    like.addEventListener("change",function(e){
        console.log(e.target.value);
    })

    //전송
    var myform = document.querySelector("#myform");
    myform.addEventListener("submint",function(e){
        //html a => 동작
        //form submit => 동작
        //기본 이벤트 막아주기
        e.preventDefault();
    })
}