"use strict";
// 1. Declaración de variables con tipos básicos
// string: Para texto
let nombre = "Juan";
// number: Para números (enteros y decimales)
let edad = 25;
// boolean: Para verdadero o falso
let esProgramador = true;
// 2. Arreglos con tipos específicos
// Un arreglo de números
let numeros = [1, 2, 3, 4, 5];
// Un arreglo de cadenas (strings)
let lenguajes = ["TypeScript", "JavaScript", "Python"];
// 3. Tuplas: Arreglos con tipos en posiciones específicas
let persona = ["Juan", 25]; // El primer elemento es string y el segundo es number
// 4. Enumeraciones (Enums): Un conjunto de valores constantes con nombre
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 0] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 1] = "Martes";
    DiaSemana[DiaSemana["Miercoles"] = 2] = "Miercoles";
    DiaSemana[DiaSemana["Jueves"] = 3] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 4] = "Viernes";
})(DiaSemana || (DiaSemana = {}));
let diaHoy = DiaSemana.Lunes;
// 5. Funciones con tipos
// Tipamos los parámetros y el valor de retorno
function sumar(a, b) {
    return a + b;
}
// Función que no retorna nada (void)
function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}
let juan = {
    nombre: "Juan",
    edad: 25,
    esProgramador: true,
};
// 7. Uniones de tipos: Permitir múltiples tipos para una variable
let id;
id = 123;
id = "ABC123";
// 8. Aserciones de tipos: Para forzar un tipo específico
let algo = "Esto es un string";
let longitudString = algo.length; // Aserción que 'algo' es string
// 9. Clases: Similar a otros lenguajes orientados a objetos
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    mover(distancia) {
        console.log(`${this.nombre} se movió ${distancia} metros.`);
    }
}
let perro = new Animal("Perro");
perro.mover(10);
