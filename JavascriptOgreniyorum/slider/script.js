var images = [];
var time = 5000;
var i = 0;

images[0] = "/img/1.jpg";
images[1] = "/img/2.jpg";
images[2] = "/img/3.jpg";
images[3] = "/img/4.jpg";


function Changeimg() {

    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("Changeimg()", time);

}

next = document.querySelector("#next");
prev = document.querySelector("#prev");

next.addEventListener("click", function () {

    i++;


    if (i > images.length - 1) {
        i = 0;
    }
    document.slide.src = images[i];
})
prev.addEventListener("click", function () {

    i--;


    if (i < 0) {
        i = images.length - 1;
    }
    document.slide.src = images[i];
})




window.onload = Changeimg;