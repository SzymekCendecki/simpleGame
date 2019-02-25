document.addEventListener("DOMContentLoaded", () => {
    
    var mqls = [ // list of window.matchMedia() queries
        window.matchMedia("(min-width: 320px)"),
        window.matchMedia("(min-width: 375px)"),
        window.matchMedia("(min-width: 425px)"),
        window.matchMedia("(min-width: 768px)"),
        window.matchMedia("(min-width: 1024px)")
    ]
  function mediaqueryresponse(mql){
    if (mqls[0].matches){ 
        $("#pointsTitle").attr("x", "65%");
        $("#time").attr("x", "30%");
        $("#points").attr("x", "75%");
        $("#rect").attr("width", "8%");
    }
    if (mqls[1].matches){ 
        $("#time").attr("x", "25%");
        $("#points").attr("x", "72%");
        $("#rect").attr("width", "7%");
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
}

for (var i=0; i<mqls.length; i++){ // loop through queries
    mediaqueryresponse(mqls[i]) // call handler function explicitly at run time
    mqls[i].addListener(mediaqueryresponse) // call handler function whenever the media query is triggered
}
});