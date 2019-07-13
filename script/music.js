var myVideo=document.getElementById("video1");
var Time;
/**/
var apple=document.getElementById('apple'); 
var play_icon=document.getElementById("play_con2");
var img_play=document.getElementById("img_play");
var Srrc =img_play.getAttribute("src");
var Btn=document.getElementById("acc");//試用按鈕
var SetMinute = 0;
var timer;

/*改為全局變數*/

var SetMinute;

/*換歌 換 名子*/
var Che_Name =document.getElementById('music_name');
var One = document.getElementById('high');
var oul = document.getElementById('list');
var Music_deta=oul.getElementsByTagName('li');

var Nams=document.getElementsByClassName('qw');
var raD=document.getElementsByClassName('radiu2');

//alert(One.src.innerHTML);
/**/
      
for(var i = 0; i < Music_deta.length; i++) {
    getConsole(i);
}


/*進度條宣告*/
//var player = document.getElementById('player');  //撥放myVideo
//var btn=document.getElementById('btn');        //撥放按鈕  img_play   
var MyNemeIsDiv=document.getElementById('MyNemeIsDiv');   //進度條加寬 

var oDiv;


/*進度條*/



function Time(){

	
	if (myVideo.currentTime > 0) {//大於0代表開始撥放並執行下面
      value = 100 / myVideo.duration * myVideo.currentTime;
   }
 
   MyNemeIsDiv.style.width = value + "%"; 

}
window.onload=function(scale){


               oDiv=document.getElementById('div2');    //操控用
               var oParent=document.getElementById('hp_slide');//進度條大包
			   var disX=0;
			
			oDiv.onmousedown=function(ev){ 
				
				var oEvent=ev || event; 

				disX=oEvent.clientX-oDiv.offsetLeft;


				document.onmousemove=function(ev){
					
					var oEvent= ev || event; 
					var l=oEvent.clientX-disX;	

					 if(l<0){l=0;}
				     else if(l>oParent.offsetWidth-oDiv.offsetWidth) 
				     	{l=oParent.offsetWidth-oDiv.offsetWidth;}				

					oDiv.style.left=l+'px';  


					var scale=Math.floor((l/(oParent.offsetWidth-oDiv.offsetWidth))*myVideo.duration);
								
					document.title=scale;	
					myVideo.currentTime=scale;  
				   				
				};

				document.onmouseout=function(){
					document.onmousemove=null; 
					document.onmousedown=null;
					oDiv.style.left=100+"%";  
				};
				return false; 
			}


		}
/**/
 
 /*換歌失敗作品改作改名子函數*/
function getConsole(i){
    Music_deta[i].addEventListener("click", function() {
         var q=Nams[i].innerHTML;
        
        if(Music_deta[i]===Music_deta[0])
        {
         window.clearInterval(timer);
         img_play.src ="icon/play-sign.png";    
         One.src="mp3/AprilShowersAimer.mp3";
         Che_Name.innerHTML=q;
         Check_i.innerHTML="播放時間：0分0秒";
         apple.innerHTML="總時間：5分43秒";
         SetMinute=0;

         myVideo.load();
      
          if(raD[i].style.background==""){
          raD[i].style.background="black";
         }else if(raD[i].style.background=="black"){
          raD[i].style.background="#FFF";
         }else{raD[i].style.background="black";}

         }
        else if(Music_deta[i]===Music_deta[1])
        {  
        window.clearInterval(timer);
         img_play.src ="icon/play-sign.png";         
        One.src="mp3/LemonCoveredbyyurisa.mp3";
         Che_Name.innerHTML=q;
         Check_i.innerHTML="播放時間：0分0秒";
           apple.innerHTML="總時間：4分22秒";
         SetMinute=0;
         myVideo.load();
          
             if(raD[i].style.background==""){
          raD[i].style.background="crimson";
         }else if(raD[i].style.background=="crimson"){
          raD[i].style.background="#FFF";
         }else{raD[i].style.background="crimson";}

        }
        else if(Music_deta[i]===Music_deta[2])
        {  
         window.clearInterval(timer);
         img_play.src ="icon/play-sign.png"; 
         One.src="mp3/花篝り.mp3";
         Che_Name.innerHTML=q;
         Check_i.innerHTML="播放時間：0分0秒";
         apple.innerHTML="總時間：4分54秒";
         SetMinute=0;
         myVideo.load();
      
         if(raD[i].style.background==""){
          raD[i].style.background="lawngreen";
         }else if(raD[i].style.background=="lawngreen"){
          raD[i].style.background="#FFF";
         }else{raD[i].style.background="lawngreen";}

        }

        else if(Music_deta[i]===Music_deta[3])
        { 
         window.clearInterval(timer);
         img_play.src ="icon/play-sign.png"; 
         One.src="mp3/music.mp3";
         Che_Name.innerHTML=q;
         Check_i.innerHTML="播放時間：0分0秒";
         apple.innerHTML="總時間：4分52秒";
         SetMinute=0;
         myVideo.load();
         if(raD[i].style.background==""){
         	raD[i].style.background="green";
         }else if(raD[i].style.background=="green"){
         	raD[i].style.background="#FFF";
         }else{raD[i].style.background="green";}
         

        }
        


    });
     
}


/**/
img_play.onclick=function playVid()
  {
  	if (myVideo.style.background== "black"){
         
            myVideo.style.background="white";
            myVideo.play();
            
           // alert(Math.round(Time));//播放秒數　
            img_play.src ="icon/pause-button.png";               
           timer=setInterval("Check_Time()", 1500);
             timers=setInterval("Time()", 0.1);
             	



          
            
        
        

  	}else if(myVideo.style.background== "white"){
  		
           myVideo.style.background="black";
  		     myVideo.pause();
           img_play.src ="icon/play-sign.png";           
           window.clearInterval(timer);
            clearInterval(timers);  
            
         
  	}
  	//setInterval(console.log(myVideo.currentTime),1000);
   
}
/*歌曲時間試做*/
/*function MusicTime(){
   
   if(myVideo.style.background == "black"){
    alert(Math.round(Time));
      setTimeout('MusicTime()',1000);
   }

}*/





   
function Check_Time() {
      
       if (myVideo.style.background== "white"){
        
        
     
        var Check_i = document.getElementById("Check_i");
             
        var Cal_Minute = Math.floor(myVideo.currentTime);
        if(Cal_Minute >= 60){ Cal_Minute=(Cal_Minute%60)  + 1};

        var Cal_Second = Math.floor(myVideo.currentTime);
        if(Cal_Second >=  60){Cal_Second = Math.floor(myVideo.currentTime/60)}
        else if(Cal_Second < 60){Cal_Second = "0";};
         
          Check_i.innerHTML= "播放時間：" + Cal_Second + "分" + Cal_Minute + "秒";
        
        
          
       }else{
         
        return;
       }

        

    }


/*window.onload=function allTime(){

	     
  	  
	  
  }*/
//alert(play_icon);
//alert(Srrc);



