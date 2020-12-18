var id,
    resultTrue,
    resultfalse,
    odd = 0,
    even = 0,
    i,
    j,
    z,
    result,
    Tctotal = 0;
id = document.querySelector("#tc");
resultfalse = document.querySelector("#resultfalse");
resultTrue = document.querySelector("#resultTrue");
btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    for (i = 0; i < 9; i += 2) {
        odd = Number(id.value[i]);

    }
    odd *= 7;
    for (j = 1; j < 9; j += 2) {
        even = Number(id.value[j]);

    }
    for (z = 0; z < 10; z++) {
        Tctotal += Number(id.value[z]);
    }


    result = Math.abs(odd - even);
    resultfalse.style.display = "block";

    if (id.value == "") {
        resultfalse.textContent = "Kimlik Numarası kısmı boş Bırakılmaz";

    } else if (id.value.length !== 11) {
        resultfalse.textContent = "Kimlik Numarası 11 Karakterterden oluşmalıdır.";

    } else if (isNaN(id.value)) {
        resultfalse.textContent = "Kimlik Numarası Sayılardan oluşmalıdır.";

    } else if (id.value[0] == 0) {
        resultfalse.textContent = "Kimlik Numarası ilk rakamaı 0  olamaz";

    } else if (result % 10 != Number(id.value[7])) {
        resultfalse.textContent = "Kimlik Numarası Bir şahsa ait değil";

    } else if (Tctotal % 10 != Number(id.value[10])) {
        resultfalse.textContent = "Kimlik Numarası Bir şahsa ait değil";

    } else {
        resultfalse.style.display = "none";
        resultTrue.style.display = "block";
        resultTrue.textContent = "Kişi Eşleşiyor";
    }

});