//MATRICES (ARRAYS) 1D Y 2D Y BUCLES

/* UN array es un conjunto de datos que se pueden almacenar en una sola variable
Cuando tenemos una variable, la usamos para guardar un dato.
Cuando tenemos un array, guardamos esos datos en una lista

Un array ya no es un tipo de dato primitivo, sino que es un objeto porque es considerado una estructura de datos */

let variable = 1; //Una variable de un solo valor

let array = [1,2,3,4,5]; //Un array con varios valores

/* Formas de crear un array 

1.- Utilizando la palabra reservada "new" y el método "Array"

-> Estructura basica de un array

var arcoiris =new Array();

var arcoiris = new Array(7); Array con 7 posiciones

var arcoiris = new Array("rojo","verde","azul","amarillo","violeta","naranja","rosa"); //Array con 7 posiciones ya especificado

-Declaramos un nombre para nuestro arreglo (arcoiris)
- Asignamos el metodo "Array" usando la palanbra reservada "new"

2.- 

var arcoiris = ["rojo","verde","azul","amarillo","violeta","naranja","rosa"]; //Declaramos un array con 7 posiciones

var arcoiris = []; //Declaramos un array vacio

*/

//Ejemplos de Arrays

var listaSuper = ["Leche","Pan","Dulces"];
var listaSuper = new Array("Leche","Pan","Dulces");

var diasSemana = new Array("Lunes", "Martes", "Miércoles","Jueves","Viernes","Sabado","Domingo");
var diasSemana = ["Lunes", "Martes", "Miércoles","Jueves","Viernes","Sabado","Domingo"];

//TAREA: INVESTIGAR SI PODEMOS HACER ARREGLOS CON OTRO TIPO DE DATOS

/*
Acceder a elementos de un array

Antes de hablar de elementos de un array, es importante definir dos conceptos

1.- Cantidad de elementos
2.- Indices de elementos (posiciones)

*/

var diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo"];

//Elementos: 7 elementos
//Indices (posiciones): 6 indices

// 0- Lunes
// 1- Martes
// 2- Miércoles
// 3- Jueves
// 4- Viernes
// 5- Sabado
// 6- Domingo


//Acceder a un elemento de un array

//Sintaxis

//console.log(nombredelArreglo[valordelIndice]);

console.log(diasSemana[4]); //Imprime el elemento 5 en el indice 4
console.log(diasSemana[0]); //Imprime el elemento de la posicion 0
console.log(diasSemana[9]); //Undefined


//Arrays asociativos

/* Un array asociativo es un array que contiene una serie de datos que se almacenan en una estructura de datos que se llama objeto.
Nos sirve haferlo de este modo porque podemos tener un control mas especifico al momento de llamar la posicion de ese elememnto. Por ejemplo, los llamos por su nombre (nombre, apellido, etc.). En pocas palabras, cambiamos el nunmero del indice por una cadena de texto para poder identificar la posicion del elemento de una mejor forma */

miCompu = ["Asus","Intel Core i7","8GB","1TB"];

console.log(miCompu[0]);
console.log(miCompu[1]);
console.log(miCompu[2]);
console.log(miCompu[3]);

let miComputadora = {
    marca:"Asus",
    modelo: "K45VD",
    procesador: "Intel Core i7",
    ram: "16 gb",
    almacenamiento: "1 TB",
}

console.log(miComputadora.ram); //Imprime el elemento de la posicion
console.log(miComputadora[0]); //Undefined

let participante = {
    nombre: "Felipe",
    edad: "30",
    github: "enlace",
    repositorios: "entregado",

    nombre2: "Felipe malvado",
    edad: "22",
    github: "enlace",
    repositorios: "entregado",
}

/*
*Metodos de los arrays

En los arrays, tenemos ciertos metodos que nos pérmiten manipular elementos del array. Estos nos permiten desde agregar elementos, eliminar elementos, hasta reordenarlos

Podemos dividir estos metodos en 3 grupos:

-Transformadores: Nos permiten manipular los elementos de un array y cambiar su estructura

-Accesores: Acceder a los elementos de un array

-Iteradores o repetitivos: Nos permiten iterar sobre los elementos de un array, recorriéndolos

*/

console.log();
console.log("Metodos Transformadores");

var arrayEjemplo = ["Manzanas","Peras","Zanahorias","Duraznos","Melones","Sandias","Aguacates","Naranjas"];
console.log("Este es mi arreglo original",arrayEjemplo);

//? Metodos transformadores

//*Metodo push(): Agregar un elemento al final del array

arrayEjemplo.push("Uvas");
console.log("Agregue UVas al arreglo original", arrayEjemplo);


//*Metodo pop(): Eliminar un elemento del final del arreglo

arrayEjemplo.pop();
console.log("Eliminando un elemento con pop",arrayEjemplo);


//*Metodo unshift(): Agregar uno o más elementos al principio del arreglo

arrayEjemplo.unshift("Fresas","Platanitos");
console.log("Agregue dos elementos al principio del arreglo que son fresas y platanitos",arrayEjemplo);

//*Metodo shift(): QUita un elemento del principio del arreglo

arrayEjemplo.shift();
console.log("Eliminando el primer el primer elemento del arreglo, que eran las fresas",arrayEjemplo);



//*sort()
arrayEjemplo.sort();
console.log("Ordenando los elementos del arreglo",arrayEjemplo);

//*reverse()
arrayEjemplo.reverse();
console.log("Ordenando los elementos del arreglo inverso",arrayEjemplo);

let saludo = ["Hola", "soy", "Luis"];
saludo.reverse(); //!Revisar si hay parametros para este metodo: Tarea
console.log(saludo);


//*forEach(): Recorre el array y devuelve un nuevo array con los elementos que cumplan la condicion

var frutas = ["manzana","uva","naranja","sandia"];
var forEach = frutas.forEach(fruta=>console.log("La fruta" + fruta + " se encuentra en la posicion")); //Imprimelos en el array

//Otro ejemplo de tipo mixto

paquetaxo = ["Manzanas","Peras",1, false];
paquetaxo.sort();
console.log("Este es mi arreglo paquetaxo",paquetaxo);

//! ¿Que determina el orden de los elementos de un array?

//*Metodo slice():Extraer una seccion o porcion de un arreglo, devolvemos una cadena nueva copiando el array porque no lo modificamos

var cadena1 = ["Hola", "Generation","de","Javascript"];
var cadena2 = cadena1.slice(3) //Devuelve "a Generati" porque comenzamos desde el caracter 3, y terminamos en el caracter -2
console.log("Valor de cadena2",cadena2);
//Sintaxis del Slice:
//nombredelacadena.slice(inicio,fin);
//funciona tanto para strings como arrays 

var cadena3 = cadena2[0].slice(0,-6);
console.log("Seleccione Javascript y lo quiero cortar y es:",cadena3);

var arrayNumeracion = [1,2,3,4,5,6,7,8,9,10];
console.log("Este es mi arreglo numeración",arrayNumeracion);

var nuevaNumeracion = arrayNumeracion.slice(2,6) //de 3 a 6
console.log("Esta es la nueva numeracion",nuevaNumeracion);


//Cortando cadenas de texto

var saludos = "Hola, soy David y vengo de Mexico";
console.log("Mi saludo: ", saludos);
var nuevoSaludo = saludos.slice(0,-5);
console.log("Este es mi nuevo saludo: ",nuevoSaludo);

//Ejemplos del mundo real usando Slice

//1.- Creacion de email
//Luis
//David

//luda@generation.com.mx ->correo con las letras del nombre + apellido

//2.- Creacion de cupon personalizado
//Luis
//Gaytan
//cupon = luga200


/* *Metodo splice()
Permite modificar el contenido de un array. LO usamos en tres formas:

-ELiminar o suprimir elementos del array
-Agregar o insertar nuevos elementos al array.
-Reemplazar elementos existentes del array

*/

//?Esta es la sintaxis del metodo splice

// splice(indice de inicio, cantidadeelementosaeliminar, nuevoelemento1, nuevoelemento2,...,nuevoelementon)

// *Parametros

// -Indice de inicio:
// -Cantidad de elementos a eliminar
// -Nuevo elemento

console.log("");
console.log("METODO SPLICE");
console.log("");

//Crear array de ejemplo llamado meses 

let meses = ["enero","febrero","lunes","martes","marzo"];
console.log("Array original de meses y dias revueltos",meses);

//*Eliminar elementos del array usando splice

//!Sintaxis del splice para eliminar elementos: .splice(posicionInicial,cantidaddeElementosaeliminar)

meses.splice(2,2); //Elimina los elementos de la posicion 2
console.log("Elimine los dos elementos que no son meses del array",meses);

meses.splice(1,1);
console.log("Elimine el elemento de la posicion 1",meses);

//Ejercicio Express

var todoslosMesesdelAnio = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

//*1.- Usando el metodo splice, quitar los meses que tengan 30 dias

//El metodo splice modifica el arreglo original: mucho cuidado

//Aqui el codigo 


//*2.- Eliminar y agregar elementos usando splice

let meses2 = ["enero","febrero","lunes","martes"];
console.log("Array original llamado meses2",meses2);

let dias = meses2.splice(2,2,"abril","mayo","junio",5);
console.log("Elimine los dos elementos que no son meses del arreglo",meses2);


//*3.- Agregar nuevos elementos sin eliminar con splice

let meses3 = ["enero","febrero","lunes","martes"];
console.log("Este es un nuevo array llamado meses3",meses3);

meses3.splice(2,0,"marzo","abril");
console.log("Agregue nuevos elementos al array",meses3);


//Ejercicio 

console.log();
console.log("Ejercicio Carreritas");
let carreritas = ["Lucia","Roberto","Maria","Jesus","Andrea","Jose"];
console.log("Posicion actual de la carrera");



