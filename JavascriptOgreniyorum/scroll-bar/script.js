window.onscroll = function () {
    scrollfuntion();
}

function scrollfuntion() {
    var winscroll = document.body.scrollTop || document.documentElement.scrollTop;


    //the full page height
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    //the percente we-ev scrolld
    var scrolled = (winscroll / height) * 100;

    document.getElementById("progres-bar").style.width = scrolled + "%";
}