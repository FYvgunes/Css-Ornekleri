//Get input Element
let filterInput = document.querySelector("#filterInput");
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
    //Get  values input

    let FilterValue = document.getElementById("filterInput").value.toUpperCase();


    //get names ul

    let ul = document.getElementById("names");


    //get list from ul

    let li = ul.querySelectorAll("li.collection-item");


    //loop throug collection-item lis

    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(FilterValue) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
