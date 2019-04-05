var rezultat;
var tekst_input;
var uzorak_input;
var raspon;
var vrijednost;
var rezultatZbrajanja;

function inicijalizacija() {
    rezultat = document.getElementById("rezultat");
    tekst_input = document.getElementById("tekst");
    uzorak_input = document.getElementById("uzorak");
    raspon = document.getElementById("slider");
    vrijednost = document.getElementById("vrijednost");
    rezultatZbrajanja = document.getElementById("rezultat-zbrajanja");

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
}

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