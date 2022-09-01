window.onload = function () {
    //코드를 보여줄 영역
    var code = document.querySelector("#code");
    //아이콘
    var mini = document.querySelector(".icon");
    //아이콘 위치체크
    var xPos = 0;
    var yPos = 0;


    document.addEventListener("keydown", function (e) {
        console.log(e.key, e.keyCode, e.code);
        code.value = e.key;
        switch (e.key) {
            case "ArrowRight":
                if(xPos<580){
                xPos += 10;
                }
                else{
                    xPos =0;
                }
                
                break;
            case "ArrowLeft":
                if(xPos>0){
                xPos -= 10;
                }else{
                    //0보다 작으면 반대편에서 나오도록
                    xPos =570;
                }
                break;
            case "ArrowUp":
                if(yPos>0){
                yPos -= 10;
            }else{
                yPos = 360;
            }
                break;
            case "ArrowDown":
                if(yPos<360){
                yPos += 10;
                }else{
                    yPos = 0;
                }
        }
        mini.style.left = xPos + "px"
        mini.style.top = yPos + "px"

    })

}