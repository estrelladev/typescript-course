// 1. Declaración de variables con tipos básicos

// string: Para texto
let nombre: string = "Juan";

// number: Para números (enteros y decimales)
let edad: number = 25;

// boolean: Para verdadero o falso
let esProgramador: boolean = true;

// 2. Arreglos con tipos específicos

// Un arreglo de números
let numeros: number[] = [1, 2, 3, 4, 5];

// Un arreglo de cadenas (strings)
let lenguajes: string[] = ["TypeScript", "JavaScript", "Python"];

// 3. Tuplas: Arreglos con tipos en posiciones específicas
let persona: [string, number] = ["Juan", 25]; // El primer elemento es string y el segundo es number

// 4. Enumeraciones (Enums): Un conjunto de valores constantes con nombre
enum DiaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes
}

let diaHoy: DiaSemana = DiaSemana.Lunes;

// 5. Funciones con tipos

// Tipamos los parámetros y el valor de retorno
function sumar(a: number, b: number): number {
    return a + b;
}

// Función que no retorna nada (void)
function saludar(nombre: string): void {
    console.log(`Hola, ${nombre}`);
}

// 6. Tipos personalizados con Interfaces

interface Persona {
    nombre: string;
    edad: number;
    esProgramador: boolean;
}

let juan: Persona = {
    nombre: "Juan",
    edad: 25,
    esProgramador: true,
};

// 7. Uniones de tipos: Permitir múltiples tipos para una variable
let id: number | string;
id = 123;
id = "ABC123";

// 8. Aserciones de tipos: Para forzar un tipo específico
let algo: any = "Esto es un string";
let longitudString: number = (algo as string).length; // Aserción que 'algo' es string

// 9. Clases: Similar a otros lenguajes orientados a objetos

class Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    mover(distancia: number): void {
        console.log(`${this.nombre} se movió ${distancia} metros.`);
    }
}

let perro = new Animal("Perro");
perro.mover(10);


