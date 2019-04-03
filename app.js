var rezultat = document.getElementById("rezultat");
var tekst_input = document.getElementById("tekst");
var uzorak_input = document.getElementById("uzorak");
var raspon = document.getElementById("slider");
var vrijednost = document.getElementById("vrijednost");
var rezultatZbrajanja = document.getElementById("rezultat-zbrajanja");

tekst_input.addEventListener("input", function () {
    ispitajTekst();
});

uzorak_input.addEventListener("input", function () {
    ispitajTekst();
});

raspon.addEventListener("input", function () {
    vrijednost.innerHTML = raspon.value;
    rezultatZbrajanja.innerHTML = 100 + parseInt(raspon.value);
});

function ispitajTekst() {
    var tekst = tekst_input.value;
    var uzorak = new RegExp(uzorak_input.value);

    console.log(tekst);
    console.log(uzorak);

    if (uzorak.test(tekst)) {
        rezultat.innerHTML = "Ima pokrivanja!";
        pofarbaj(true);
    } else {
        rezultat.innerHTML = "Nema pokrivanja!";
        pofarbaj(false);
    }
}

function pofarbaj(poklapanje) {
    if (tekst_input.value === "" || uzorak_input.value === "") {
        isprazni();
        return;
    }

    if (poklapanje) {
        tekst_input.style.backgroundColor = "#ADE88D";
        uzorak_input.style.backgroundColor = "#ADE88D";
    } else {
        tekst_input.style.backgroundColor = "#EA473A";
        uzorak_input.style.backgroundColor = "#EA473A";

    }
}

function isprazni() {
    tekst_input.style.backgroundColor = "white";
    uzorak_input.style.backgroundColor = "white";
    rezultat.innerHTML = "";
}