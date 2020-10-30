var a1 = 1;
var a2 = 0;
var d1 = 1000;
function trocaNome1(){
    a1++;
    localStorage.setItem("contador", a1);
    if (a1%2==0) {
        document.getElementById("data1").innerHTML = "ano" ;
        document.getElementById("din1").innerHTML = d1*360 ;
        document.getElementById('k').src='assets/g31.png';}
    else {
    document.getElementById("data1").innerHTML = "dia" ;
    document.getElementById("din1").innerHTML = d1 ;
    document.getElementById('k').src='assets/g1.png';}
}

function trocaNome2(){
    a2++;
    localStorage.setItem("contador", a2);
    if (a2%2==0) {
        document.getElementById("data2").innerHTML = "mês" ;
        document.getElementById('j').src='assets/g2.png';}
    else {
    document.getElementById("data2").innerHTML = "ano" ;
    document.getElementById('j').src='assets/g100.png';}
}
document.addEventListener('DOMContentLoaded', function() {

})