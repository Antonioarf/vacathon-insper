
var a1 = 1;
var a2 = 1;
var a3 = 1;
var d1 = 1000
var d2 = 1000
var d3 = 1000
function trocaNome1(){
    a1++;
    localStorage.setItem("contador", a1);
    if (a1%2==0) {
        document.getElementById("data1").innerHTML = "ano" ;
        document.getElementById("din1").innerHTML = d1*360 ;}
    else {
    document.getElementById("data1").innerHTML = "dia" ;
    document.getElementById("din1").innerHTML = d1 ;
    }}

document.addEventListener('DOMContentLoaded', function() {

    localStorage.setItem("contador", a);
    
    if (a%2==0) {troca("din1", 36000)}
    else {document.getElementById("din1").innerHTML = d1 ;}
})