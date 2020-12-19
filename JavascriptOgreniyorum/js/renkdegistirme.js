var btn, result, count = 0;
btn = document.querySelector("#btn");
result = document.querySelector("#result");
btn.addEventListener("click", function () {
    if (count % 2 === 0) {
        result.style.backgroundColor = "Green";
    } else {
        result.style.backgroundColor = "Red";
    }
    count++;
})