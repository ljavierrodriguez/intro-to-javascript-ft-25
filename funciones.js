/* Funciones */
/* 
Syntaxis:

1) Funciones Declarativas (hoisting)

function funcName (){
    // codigo
}

funcName()

2) Funciones Expresivas

const funcName = function(){
    // codigo
}

funcName()

3) Funciones Flecha

const funcName = () => {
    // codigo
}

funcName()

const prueba = () => console.log("Hola")

*/

saludar()

function saludar(){
    console.log("Hola Mundo desde una funcion!")
}

saludar()
saludar()
saludar()
saludar()
saludar()
saludar()

//saludar2()

const saludar2 = function(){
    console.log("Hola Mundo desde una funcion 2!")
}

saludar2()
saludar2() // 
saludar2()
saludar2()

const saludar3 = () => console.log("Hola Mundo desde una Funcion Flecha")

saludar3()

let age = 10;


function imprimirNombre(nombre){
    console.log(`Hola como estas, ${nombre} ${age}`)
}

let nombre = "Pedro"
let resultadoImp = imprimirNombre(nombre)
console.log(resultadoImp)
/*
function sumar(a, b){
    return a + b
}

let resultado = sumar(10, 10)
console.log(resultado)

const calcularSuma = (a, b) => a + b; */


const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;


const operacion = (func, a, b) => func(a, b)

let result1 = operacion(sumar, 12)
let result2 = operacion(multiplicar, 12, 10)
let result3 = operacion((x, y) => x * y, 10, 20)
let result4 = operacion(function(x){ return x * x}, 10)

console.log("Suma: ", result1)
console.log("Multiplicacion: ",result2)
console.log("Cuadrado", result3)


function nombreCompleto(nombre = "John", apellido){
    return `${nombre} ${apellido}`;
}


console.log(nombreCompleto('John', 'Doe'))
console.log(nombreCompleto('Doe', 'Jane'))
console.log(nombreCompleto(apellido='Doe', nombre='Jane'))
console.log(nombreCompleto(undefined, "Rodriguez"))