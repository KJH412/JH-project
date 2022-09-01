window.onload = function(){
    //아이콘 선택
    var icon = document.querySelector(".icon");
    //아이콘 0,0
    icon.style.left=0;
    icon.style.top=0;

   //클릭할 위치를 저장한 변수
   var xPos = 0;
   var yPos = 0;
   var iconX= 0;
   var iconY= 0;
   document.addEventListener("mousemove",function(e){
    xPos = e.clientX;
    yPos = e.clientY;
   })

//    setInterval(moveIcon,50); 원래는 이거 쓰는게 맞음.
   moveIcon();
   function moveIcon(){
    requestAnimationFrame(moveIcon);   //훨씬 자연스러움.
    iconX += (xPos - iconX)*0.1;
    iconY += (yPos - iconY)*0.1;
    icon.style.left=iconX+"px";
    icon.style.top=iconY+"px";
   }

   
}