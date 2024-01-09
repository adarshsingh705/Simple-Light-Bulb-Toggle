let img = document.querySelector("img");
let btn = document.querySelector("button");
let blubon = true;

bulubONoff = () => {
    if (blubon === true) {
        img.src = "bulb-off.jpg";
        btn.innerText = "BULB-ON";
        // console.log("off")
        blubon = false;
    } else {
        img.src = "bulb-on.jpg";
        btn.innerText = "BULB-OFF";
        // console.log("on")
        blubon = true;
    }
};

btn.addEventListener("click", bulubONoff);
