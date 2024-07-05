function l1() {
    localStorage.setItem("level", 1)
}

function l2() {
    localStorage.setItem("level", 2)
}

function l3() {
    localStorage.setItem("level", 3)
}

function l4() {
    localStorage.setItem("level", 4)
}

function l5() {
    localStorage.setItem("level", 5)
}

function l6() {
    localStorage.setItem("level", 6)
}

function l7() {
    localStorage.setItem("level", 7)
}

function l8() {
    localStorage.setItem("level", 8)
}

function l9() {
    localStorage.setItem("level", 9)
}

function l10() {
    localStorage.setItem("level", 10)
}

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