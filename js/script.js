/* this function switches between banners when called, in order of 1st, 2nd, 3rd */
function changeClass() {
    alert(document.querySelector('#carousel #1'));
    var first = document.getElementById("1");
    var second = document.getElementById("2");
    var third = document.getElementById("3");

    
    if (first.classList.contains("on")) {
        // first.classList.remove("on");
        // first.classList.add("off");
        // second.classList.remove("off");
        // second.classList.add("on");
        first.className.replace("on", "off");
        second.className.replace("off", "on");
        alert("in first conditional");
    }
    else if (second.classList.contains("on")) {
        second.classList.remove("on");
        second.classList.add("off");
        third.classList.remove("off");
        third.classList.add("on");
        alert("in second conditional");
    }
    else {
        third.classList.remove("on");
        third.classList.add("off");
        first.classList.remove("off");
        first.classList.add("on");
        alert("in third conditional");
    }
} 

/* this function calls the changeClass function every 2000 milliseconds */
function rideCarousel() {
    window.setInterval(changeClass(), 2000);
}

// rideCarousel();

setInterval(rideCarousel(), 2000);