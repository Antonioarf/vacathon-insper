function myFunction(numero){
    console.log(numero)
    document.getElementById("t1").innerHTML = (numero*261).toLocaleString() ;
    document.getElementById("t2").innerHTML = (numero*2264.5).toLocaleString() ;
    document.getElementById("t3").innerHTML = (numero*263).toLocaleString() ;
    document.getElementById("t4").innerHTML = (numero*266.5).toLocaleString() ;
    
}
var a1 = 1
var d1 = 1000
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

})