var input;
 var letter;
 function start()
 {
      input=parseInt(prompt("Enter How Many Words You Want"));
      document.getElementById("input").disabled=false;
      document.getElementById("Start").disabled=true;
      document.getElementById("Submit").disabled=false;    
      var str="qwertyuiopasdfghjklzxcvbnm";
      letter="";
      for(i=0;i<input;i++)
      {
         var alpha=str.charAt(Math.floor(Math.random()*str.length));
         letter += alpha;       
      }
      // document.getElementById("box").innerText=letter;
      var boxx=document.getElementById("boxx");
      boxx.innerHTML="";
      for(i=0;i<letter.length;i++)
      {
         boxx.innerHTML+="<span>"+letter[i]+"</span>";
      }
      document.getElementById("input").value="";
      //  letter.addEventListner("copy",function(e)
      //    {
      //       e.preventDefault();
      //       alert("copy");
      //    })
 }
 
 function inputt()
 {
    document.getElementById("timer_d").style.display="Block";
   var user_write=document.getElementById("input").value;
   var span=document.querySelectorAll("#boxx span");
   for(i=0;i<Math.min(letter.length,user_write.length);i++)
   {
      if(letter[i]==user_write[i])
      {
         span[i].style.color="green"; 
      }
      else
      {
         span[i].style.color="red"; 
      }
   }
   for(var j=user_write.length;j<letter.length;j++)
   {
      span[j].style.color="white";
   }
}
   var min;
   var sec;
   var c=0;
function timer()
{
    min=0;
    sec=0;
   document.getElementById("sec").innerText="0"+sec;
   document.getElementById("min").innerText="0"+min;
     setInterval(function()
   {     
      sec++;
      if(sec<10)
      {
         document.getElementById("sec").innerText="0"+sec;
      }
      else if(sec>9)
      {
         document.getElementById("sec").innerText=sec;
      }
      if(sec==60)
      {
         min++;
         sec=0;
      }
      if(min<9)
      {
          document.getElementById("min").innerText="0"+min;
      }
      else
      {
          document.getElementById("min").innerText=min;
      }
      c++;
   },1000);
}
// console.log(c);
function submit()
{
   document.getElementById("t").innerText=min+" minutes " +sec+" seconds ";
   document.getElementById("s").innerText=c+" seconds ";
   document.getElementById("timer_d").style.display="none";
   if(min>0)
   {
       var speed=input/(min*5);
       document.getElementById("speed").innerText=speed +"WPM";
   }
   else
   {
     document.getElementById("speed").innerText="0 WPM";
   }
    document.getElementById("summary").style.display="Block";
    document.getElementById("Submit").disabled=true;
}
