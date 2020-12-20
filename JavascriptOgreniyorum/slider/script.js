var images = [];
var time = 3000;
let i = 0;

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

window.onload = Changeimg;