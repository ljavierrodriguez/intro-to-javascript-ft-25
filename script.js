// var, let, const

/* 
Tipos Datos:

String
Number
Boolean
Undefined

Object:
    Arrays  
    Objects
    Null

functions

*/

let nombre = "Luis"; // string
var apellido = 'Rodriguez';
var nombreCompleto = `Luis Rodriguez`;

const PI = 3.1416

let edad = 42; // number
let peso = 10.50;
let saldo = -100;
let grados = -10.30; 
var altura = 10;

let open = true; // boolean
let activo = false;

let prueba; // undefined

let users = null; // object
            // 0    1    2         3
let valores = [1, false, [1, 2], "Pedro", -10, true, { name: 'luis'}, function(){}] // object

valores[3] // pedro
valores[6] // { name: 'Luis' }

let persona = {
    nombre: 'Luis',
    apellido: 'Rodriguez',
    edad: edad,
    saludar: function(){}
} // object

persona.nombre
persona["nombre"]



nombre = "Pedro";

//PI = 10;


const notas = [
    10, 10, 10, 10
]

//notas = [1, 20, 20]

notas.push(10)
console.log(notas)

const person = {
    name: 'John',
    lastname: 'Doe'
}

/* person = {
    name: 'Jane',
    lastname: 'Doe'
} */

person.name = 'Jane'

console.log(person)