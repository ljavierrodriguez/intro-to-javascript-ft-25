// Condicionales
/* 

if (condicion) {
    // codigo
}

if (condicion) {
    // codigo
} else {
    // codigo
}

if (condicion) {
    // codigo
} else if (condicion) {
    // codigo
} else {
    // codigo
}

*/

/* Operadores de Comparacion */
/* 
=== identico (valor y tipo de dato)
== igual (valor)
!== distinto (valor y tipo de dato)
!= diferente (valor)
>= igual o mayor que
<= igual o menor que 
> mayor que
< menor que
*/

/* Operadores Logicos */
/* 
and => &&
or => ||  
not => !


true && true => true
true && false => false
false && false => false

true || true => true
true || false => true
false || false => false


!true && !true => false
!true && !false => false
!false && !false => true

!true || !true => true
!true || !false => true
!false || !false => false





*/

let a = 4;
let b = 5;
let c = 6;
let d = 3;

if (a >= b) {
    // codigo
    console.log("Verdadero")
}

if (b === a) {

}

if (a >= b) {
    // codigo
    console.log("Verdadero")
} else {
    // codigo
    console.log("Falso")
}

console.log("Hola")

if (a > c) {
    console.log("A es mayor a B")
} else if (a !== b) {// 5 === '5'
    console.log("A y B son Distinto")
}

let edad = 18

/* if(edad >= 21){
    console.log("Puedes Manejar")
} else {
    console.log("No tienes la edad suficiente para manejar")
} */

if(!(edad >= 21)){
    console.log("No tienes la edad suficiente para manejar")
}
/*
let a = 4;
let b = 5;
let c = 8;
let d = 3;
*/

if (a > b && a > c){
    console.log("El mayor es A")
} else if ( b > c) {
    console.log("El mayor es B")
} else {
    console.log("El mayor es C")
}

if (a > b && a > c && a > d){
    console.log("Hacer algo")
} else {
    console.log("No puedo hacer nada")
}

if (a > b || a > c || a > d){
    console.log("Hacer algo")
}


console.log("Final")


