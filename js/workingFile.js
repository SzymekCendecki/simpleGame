let mobile=require("./resolutions.js");

document.addEventListener("DOMContentLoaded", () => {

    mobile.resolutions();

    $("#mainContainer, #newGame").hide();

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
                $("#newGame").show();

                $("#newGame").on("click", ()=>{
                    time = 60;
                    counterPoints = 0;
                    $(".menu text:nth(2)").empty().append(time);
                    $(".menu text:nth(3)").empty().append(counterPoints);
                    $("#newGame").hide();
                    $("#rect").show();
                });
            }
        }, 1000);
    }

    $(".mainText").on("click", ()=>{
        $(".mainText").addClass("anim");
        $("#intro").delay(2200).fadeOut();
        $("#mainContainer").delay(2500).fadeIn();

        setTimeout(() => {
            countDown(time);
        }, 2500);
    });
 
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
