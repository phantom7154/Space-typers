let x = 0;

function toggle() {
    var audio = document.getElementById("aud");
    audio.muted = !audio.muted;
    var img = document.getElementById("tog");
    if(x == 0) {
        img.src = "/unmute.png";
        x = 1;
    }
    else if(x == 1) {
        img.src = "/mute.png";
        x = 0;
    }   
}

var l = localStorage.getItem("level")

function next() {
    if(l == 1) {
        localStorage.setItem("level", 2);
    }
    else if(l == 2) {
        localStorage.setItem("level", 3);
    }
    else if(l == 3) {
        localStorage.setItem("level", 4);
    }
    else if(l == 4) {
        localStorage.setItem("level", 5);
    }
    else if(l == 5) {
        localStorage.setItem("level", 6);
    }
    else if(l == 6) {
        localStorage.setItem("level", 7);
    }
    else if(l == 7) {
        localStorage.setItem("level", 8);
    }
    else if(l == 8) {
        localStorage.setItem("level", 9);
    }
    else if(l == 9) {
        localStorage.setItem("level", 10);
    }
    else if(l == 10) {
        localStorage.setItem("level", 1);
    }
}