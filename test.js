window.addEventListener("load", function() {
var ime;
var priimek;

var osebaShrani = function(event) {
    ime = document.querySelector("#ime").value;
    priimek = document.querySelector("#priimek").value;
    console.log("Funkcija uspesna");
    console.log("Pozdravljeni, "+ime+" "+priimek);
}

var osebaIzpisi = function(event){
    console.log("Success");
    alert("Pozdravljeni, "+ime+" "+priimek);
}

document.querySelector("#shrani").addEventListener("click", osebaShrani);
document.querySelector("#izpis").addEventListener("click", osebaIzpisi);

});