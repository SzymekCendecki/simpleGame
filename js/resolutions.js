document.addEventListener("DOMContentLoaded", () => {
    
    module.exports.resolutions = function(){
    var resolutions = [ // list of window.matchMedia() queries
        window.matchMedia("(min-width: 320px)"),//0
        window.matchMedia("(min-width: 375px)"),//1
        window.matchMedia("(min-width: 425px)"),//2
        window.matchMedia("(min-width: 480px)"),//3
        window.matchMedia("(min-width: 768px)"),//4
        window.matchMedia("(min-width: 1024px)"),//5
        window.matchMedia("(min-width: 1366px)")//6
    ]
  function mediaqueryresponse(mql){
    if (resolutions[0].matches){ 
        $("#timeTitle").attr("x","5%").attr("y", "30%");
        $("#time").attr("x", "25%").attr("y", "65%");

        $("#pointsTitle").attr("x", "65%").attr("y", "30%");
        $("#points").attr("x", "74%").attr("y", "65%");
    
        $("#rect").attr("width", "25px").attr("height", "25px");
    }
    if (resolutions[1].matches){ 
        $("#timeTitle").attr("x","9%").attr("y", "30%");
        $("#time").attr("x", "25%").attr("y", "65%");

        $("#pointsTitle").attr("x", "69%").attr("y", "30%");
        $("#points").attr("x", "76%").attr("y", "65%");
    
        $("#rect").attr("width", "25px").attr("height", "25px");
    }

    if (resolutions[2].matches){ 
        $("#time").attr("x", "22%");
        $("#rect").attr("width", "6%");
    }

    if (resolutions[3].matches){ 
        $("#time").attr("x", "20%").attr("y", "65%");
        $("#points").attr("x", "75%").attr("y", "65%");

        $("#rect").attr("width", "25px").attr("height", "25px");
    }   

    if (resolutions[4].matches){ 
        $("#timeTitle").attr("x", "20%");
        $("#pointsTitle").attr("x", "65%");
        $("#time").attr("x", "28%");
        $("#points").attr("x", "68.5%");
        $("#rect").attr("width", "30px");
        $("#rect").attr("height", "30px");
    }

    if (resolutions[5].matches){ 
        $("#time").attr("x", "26%");
        $("#points").attr("x", "67.5%");
    }

    if (resolutions[6].matches){ 
        $("#time").attr("x", "24%");
        $("#points").attr("x", "67%");
    }
}

for (var i=0; i<resolutions.length; i++){
    mediaqueryresponse(resolutions[i]);
    resolutions[i].addListener(mediaqueryresponse);
}
    }
});