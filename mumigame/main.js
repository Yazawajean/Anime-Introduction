var mapArray,ctx,currentImgMainX,currentImgMainY;
var imgMountain,imgMain,imgEnemy,imgGrandpa;

$(document).ready(function(){
    mapArray=[0,1,1,0,0,0,3,1,2];
    ctx = $("#myCanvas")[0].getContext("2d");
    
    imgMain=new Image();
    imgMain.src = "mumigame/images/spriteSheet.png";
    currentImgMainX=0;
    currentImgMainY=0;
    imgMain.onload=function()
    {
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,200,200);
    };
    //擺上障礙物跟敵人
    imgMountain = new Image();
    imgMountain.src = "mumigame/images/mountainman2.png";
    imgEnemy = new Image();
    imgEnemy.src = "mumigame/images/dio2.png";
    imgGrandpa = new Image();
    imgGrandpa.src = "mumigame/images/阿公.png";
    imgMountain.onload=function(){
        imgEnemy.onload=function(){
        for(var x in mapArray)
        {
            if(mapArray[x]==1)
            {
               ctx.drawImage(imgMountain,0,0,640,640,x%3*200,Math.floor(x/3)*200,200,200);
               }else if(mapArray[x]==3)
               {
                ctx.drawImage(imgEnemy,7,40,793,793,x%3*200,Math.floor(x/3)*200,200,200);   
                }else if(mapArray[x]==2){
                    ctx.drawImage(imgGrandpa,0,0,735,735,x%3*200,Math.floor(x/3)*200,200,200);
                    
                }
        }
        }
    }
}); 

$(document).keydown(function(event){
    var targetImgMainX,targetImgMainY,targetBlock,cutImagePositionX;
    event.preventDefault();
    switch(event.which){
        case 37:
            targetImgMainX = currentImgMainX-200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 175;
            break;
        case 38:
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY-200;
            cutImagePositionX = 355;
            break;
        case 39:
            targetImgMainX = currentImgMainX+200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 540;
            break;
        case 40:
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY+200;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }
    
    if(targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainY<=400 && targetImgMainY>=0)
    {
        targetBlock=targetImgMainX/200+targetImgMainY/200*3;
    }else
    {
        targetBlock=-1;
    }
    
    ctx.clearRect(currentImgMainX,currentImgMainY,200,200);
    if (targetBlock==-1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3 ||mapArray[targetBlock]==2)
    {
        
    }else
    {
        $("#talkbox").text("")
        currentImgMainX=targetImgMainX;
        currentImgMainY=targetImgMainY;
    }
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,200,200);
    
    switch(mapArray[targetBlock])
        {
            case undefined:
                $("#talkbox").text("請勿超出邊界");
                break;
            case 1:
                $("#talkbox").text("我是山，不要過來");
                break;
            case 2:
                $("#talkbox").text("找到爺爺啦~快把牠帶回家(≧▽≦)");
                break;
            case 3:
                $("#talkbox").text("おれは人間をやめるぞ！　ジョジョ──ッ！！");
                break;
        }
});