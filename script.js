var buttonEl =document.querySelector(".btn");
var divEl = document.querySelector(".my-div");


var colors= ["red", "green","blue"]
var i=0;


buttonEl.onclick =  function() {
    divEl.style.backgroundColor = colors[i];
    i++;

    if (i == 3) {
        i=0
    }
    }

    //i = 0
    // i=1
    // i= 3