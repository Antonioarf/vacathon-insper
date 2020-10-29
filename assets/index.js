
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
function trocaNome2(){
    a2++;
    localStorage.setItem("contador", a2);
    if (a2%2==0) {
        document.getElementById("data2").innerHTML = "ano" ;
        document.getElementById("din2").innerHTML = d2*360 ;}
    else {
    document.getElementById("data2").innerHTML = "dia" ;
    document.getElementById("din2").innerHTML = d2 ;
}}
function trocaNome3(){
    a3++;
    localStorage.setItem("contador", a3);
    if (a3%2==0) {
        document.getElementById("data3").innerHTML = "ano" ;
        document.getElementById("din3").innerHTML = d2*360 ;}
    else {
    document.getElementById("data3").innerHTML = "dia" ;
    document.getElementById("din3").innerHTML = d2 ;
}}

document.addEventListener('DOMContentLoaded', function() {

    localStorage.setItem("contador", a);
    
    if (a%2==0) {troca("din1", 36000)}
    else {document.getElementById("din1").innerHTML = d1 ;}
})