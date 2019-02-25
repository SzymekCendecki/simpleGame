let mobile=require("./mobile320width.js");

document.addEventListener("DOMContentLoaded", () => {

  let time = 60;
  let counterPoints = 0;
  
  function countDown(time){
      setInterval(()=>{
          if(time > 0){
              time--;
              $(".menu text:nth(2)").empty().append(time);
          }else{
              $(".menu text:nth(2)").empty().append(0);
              clearInterval(countDown);
              $("#rect").hide();
          }
      }, 1000);
  }
  countDown(time);
  
  document.getElementById("rect").addEventListener("click", xy);
  
      function xy(){
  
              counterPoints = counterPoints + 1;
              $(".menu text:nth(3)").empty().append(counterPoints);
  
        $("#rect").hide();
        setTimeout(function(){
                  $("#rect").attr("x", Math.round(Math.random()*95)+"%");
                  $("#rect").attr("y", Math.round(Math.random()*70)+"%");
          $("#rect").show();
  
        }, 1000);
      }
});
