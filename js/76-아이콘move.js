window.onload = function(){
    //아이콘 선택
    var icon = document.querySelector(".icon");
    //아이콘 0,0
    icon.style.left=0;
    icon.style.top=0;

    //d
    document.addEventListener("click",function(e){
        //클릭한 위치의 x,y
        var xPos =  e.clientX;
        var yPos = e.clientY;
        console.log(xPos,yPos);

        //출발위치 parseInt()숫자로 변환
        var iconX = parseInt(icon.style.left);
        var iconY = parseInt(icon.style.top);
        console.log(iconX,iconY);

        //이동할 거리
        var moveX = xPos - iconX;
        var moveY = yPos - iconY;

        //아이콘의 위치는
        setInterval(function(){
            if((moveX >0 && iconX < xPos)||(moveX<0 && iconX > xPos)){
            iconX += moveX*0.05; //10% 만큼 0.1
            iconY += moveY*0.05;
            icon.style.left = iconX +"px"; //위치'값'이라 단위px붙임.
            icon.style.top = iconY +"px";
            }
        },10); 
        
    })

}