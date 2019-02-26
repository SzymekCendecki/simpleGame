document.addEventListener("DOMContentLoaded", () => {
    
    var mqls = [ // list of window.matchMedia() queries
        window.matchMedia("(min-width: 320px)"),
        window.matchMedia("(min-width: 375px)"),
        window.matchMedia("(min-width: 425px)"),
        window.matchMedia("(min-width: 768px)"),
        window.matchMedia("(min-width: 1024px)"),
        window.matchMedia("(min-width: 1366px)")
    ]
  function mediaqueryresponse(mql){
    if (mqls[0].matches){ 
        $("#timeTitle").attr("x","5%").attr("y", "30%");
        $("#time").attr("x", "25%").attr("y", "65%");

        $("#pointsTitle").attr("x", "65%").attr("y", "30%");
        $("#points").attr("x", "74%").attr("y", "65%");
    
        $("#rect").attr("width", "25px").attr("height", "25px");
    }
    if (mqls[1].matches){ 
        $("#timeTitle").attr("x","9%").attr("y", "30%");
        $("#time").attr("x", "25%").attr("y", "65%");

        $("#pointsTitle").attr("x", "69%").attr("y", "30%");
        $("#points").attr("x", "76%").attr("y", "65%");
    
        $("#rect").attr("width", "25px").attr("height", "25px");
    }

    if (mqls[2].matches){ 
        $("#time").attr("x", "22%");
        $("#rect").attr("width", "6%");
    }

    if (mqls[3].matches){ 
        $("#timeTitle").attr("x", "20%");
        $("#pointsTitle").attr("x", "65%");
        $("#time").attr("x", "28%");
        $("#points").attr("x", "68.5%");
        $("#rect").attr("width", "30px");
        $("#rect").attr("height", "30px");
    }

    if (mqls[4].matches){ 
        $("#time").attr("x", "26%");
        $("#points").attr("x", "67.5%");
    }

    if (mqls[5].matches){ 
        $("#time").attr("x", "24%");
        $("#points").attr("x", "67%");
    }
}

for (var i=0; i<mqls.length; i++){ // loop through queries
    mediaqueryresponse(mqls[i]) // call handler function explicitly at run time
    mqls[i].addListener(mediaqueryresponse) // call handler function whenever the media query is triggered
}
});