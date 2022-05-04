// alert ("Estoy vivo");

/* Una variable es un espacio que guardamos en memoria. Se llama variable porque puede cambiar su valor*/
var recipiente = "agua";
let recipiente2 = "cafe";
recipiente = "agua";
recipiente = "cafe";
recipiente = "leche";
recipiente = "azucar";
recipiente = "miel";
recipiente = "chocolate";
recipiente = "cafeconleche";
recipiente = "cafeconlecheconazucar";
recipiente = "cafeconlecheconazucarconmiel";

console.log("Hola Generation!!!");
console.log(recipiente); //Mostrar en consola la información

//Js es CaseSensitive (sensible a Mayús / Minús)

/*Tipos de variables

- var = variable de tipo global (global)
-let = variables limitadas usadas en determinado bloque de codigo (local)
-const = variable de tipo constante
*/

//Area de un triangulo

// var base = 10; //variables globales
// var altura = 5;
//const pi = 3.1416;

// function areaTriangulo (base,altura) {
//     let base = 5;
//     let altura = 10; //variables locales
//     var area = (base*altura)/2;
//     return area
//     console.log("Area del triangulo es: " + areaTriangulo);
// }

// function areaCuadrado(base,altura) {
//     let base = 10;
//     let altura = 10;
//     var area = (base*altura);
//     return area
//     console.log("Area del cuadrado es: " + areaCuadrado);
// }

/*Declarar, inicializar y modificar variables

Declarar una variable: var nombre, let apellido, const edad

Inicializar: var nombre = "Felipe";, let apellido = "Maqueda";, const edad = 30;,

Modificar: nombre = "Luis"

*/

/*

const numero = 15;

recipiente
cuaderno
perrito
clase
alumno
materia
niño

var gato = "Wero";
var gato = "Tertules";

console.log(gato);
R= Tertules, pues es el ultimo valor asignado

*/

/* Ejemplo de descuento de zapato*/

let zapatosnegros = 500; //Precio sin descuento
zapatosnegrosdesc = 250; //Precio con el 50% de descuento

console.log("Precios original de zapatos", zapatosnegros);
console.log("Precios original de zapatos", zapatosnegrosdesc);

//Crear multiples variables en una sola linea (separadas por coma)
let nombre1;
let nombre2;
let nombre3;
let edad1;
let edad2;
let edad3;

nombre1 = "Juan";
nombre2 = "Adriana";
nombre3 = "Ivonne";

edad1 = 30;
edad2 = 25;
edad3 = 20;

let nombre4, nombre5, nombre6, edad4, edad5, edad6;
(nombre4 = "Argemiro"),
  (nombre5 = "Briana"),
  (nombre6 = "Carmen"),
  (edad4 = 30),
  (edad5 = 25),
  (edad6 = 20);

console.log(nombre1, edad1);
console.log(nombre2, edad2);
console.log(nombre3, edad3);
console.log(nombre4, edad4);
console.log(nombre5, edad5);
console.log(nombre6, edad6);

/*TIpos de datos

-string:
-number:
-boolean:
-undefined:
-null:
-NaN:

*/

let string = "Hola, soy una cadena de texto con comillas dobles";
let string2 = "Hola, soy una cadena de texto con comillas simples";
let string3 = `Hola, soy una cadena de texto con comillas invertidas o backticks`;
console.log(string);
console.log(string2);
console.log(string3);

let numero1 = 15;
let numero2 = 55;
let numero3 = 10;

let suma = numero1 + numero2 + numero3;

console.log(suma);

//EJERCICIO

//Programa para calcular el sueldo de un empleado

let costoHora = 82.76;
let horasTrabajadas = 40;
let primaDominical = 0.05;
let vacaciones;
let aguinaldo = null;
let nombreEmpleado1 = "Juan";
let nombreEmpleado2 = "Adriana";
let bonoExtra = 1000; //Bono extra si el trabajador trabaja mas de 45 horas a la semana
let sueldoBase = costoHora * horasTrabajadas;
let primaDominicalTotal = sueldoBase * primaDominical;

console.log("El nombre de nuestro primer trabajador: ", nombreEmpleado1);
console.log("El sueldo base de nuestro primer trabajador: ", sueldoBase);
console.log(
  "La prima dominical de nuestro trabajador es: ",
  primaDominicalTotal
);
console.log(
  "A nuestro primer trabajador le corresponden dias de aguinaldo",
  aguinaldo
);

//Ejercicio de tipos de datos

//Cadenas

//1.-
let cadena1 = "¿Hola como estas?";
console.log(cadena1);

//2.-
let nombre = "Mi nombre es Luis David";
let edad = "Tengo ¿? años de edad";
let correo = "Mi email es luisdavid919@hotmail.com";

console.log(nombre, edad, correo);

//3.-
let nombrePerro = "Timon";
let edadMascota = 15;
let vive = true;

console.log(nombrePerro, edadMascota, "vive:", vive);

//4.-
let eslogan = "Mi corazón brilla con la luz del amanecer";
let eslogan2 = "pero sin ti, no se mantiene vivo";

console.log(eslogan, eslogan2);

//5.-
let gato1 = "Nigga";
let gato2 = "Tertules";
let gato3 = "Wero";
let gato4 = "Buddis";

console.log("Mis gatos se llaman", gato1, gato2, gato3, "y", gato4);

//Numeros (float y enteros)

let a = 5.6;
let b = 4.5;

//1 al 5

console.log("Suma a + b es =", a + b);
console.log("Resta a-b es=", a - b);
console.log("Multiplicacion a*b es=", a * b);
console.log("Division a/b es=", a / b);
console.log("Modulo a%b es=", a % b);

//Boolean

let aceptar = true;
let cancelar = false;

console.log(aceptar + cancelar);
console.log(!aceptar + cancelar);

//Undefined, Null, NaN

let playera = NaN;
let ropa = "azul";
let pantalon = undefined;
let tennis = null;

console.log(playera, ropa, pantalon, tennis);

//Conversión de datos

//Cadenas de texto a numeros

console.log(Number("50"));
console.log(Number("50.5"));
console.log(Number("F"));

//Numeros a cadenas de texto

console.log(String(50));
console.log(String(true));
console.log(String(null));

//Metodos numéricos

//Corte de números decimales
console.log(parseInt(50.57));
console.log(parseInt(3.1434565655));

//Método para redondeo de números decimales arriba
console.log(Math.round(50.57));
