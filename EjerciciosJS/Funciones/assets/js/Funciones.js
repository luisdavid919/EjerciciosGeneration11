//Funciones JS

/* Una fucnion es una agrupacion de instrucciones que se ejecutan cuando se llama o invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan.*/

//esta es la estructura basica de una funcion que esta siendo llamada o invocada
function nombreFuncion(parametros) {
  //instrucciones
}

//invocación de la funcion
nombreFuncion();

/*Formas de crear e invocar funciones

1.- Crear una funcion tradicional, crearla y darle un nombre y parametros


*/

//Funcion tradicional creada y con un nombre asignado

var valor1 = 22;
var valor2 = 33; //globales

var valor1 = 55; //sobreescribiendo

function sumaDeDosValores() {
  /*let valor1= 5;
    let valor2= 10;*/
  let suma = valor1 + valor2;

  console.log("Esta es mi primer funcion: ", suma);
  document.write("Esta es mi primer funcion: " + suma);
}

sumaDeDosValores(); //Invocamos a nuestra función

function sumaDeTresValores() {
  let valor1 = 56;
  let valor2 = 11;
  let valor3 = 15;
  let suma2 = valor1 + valor2 + valor3;

  console.log("Esta es mi primer funcion: ", suma2);
}

sumaDeTresValores(); //Invocamos a nuestra función

function sumaDeCuatroValores() {
  let valor1 = 5;
  let valor2 = 10;
  let valor3 = 20;
  let valor4 = 30;
  let suma3 = valor1 + valor2 + valor3 + valor4;

  console.log("Esta es mi primer funcion: ", suma3);
}

sumaDeCuatroValores(); //Invocamos a nuestra función

//funcion con parametros asignados en la llamada

//2:05 a 2:13pm

function areaTriangulo(base, altura) {
  let area = (base * altura) / 2;
  console.log("El area del triangulo es: ", area);
}

areaTriangulo(5, 32); //invocamos nuestra funcion
areaTriangulo(10, 20); //invocamos nuestra funcion
areaTriangulo(15, 23); //invocamos nuestra funcion
areaTriangulo(467, 789); //invocamos nuestra funcion

/* funcion con Return */

/*La sentencia Return finaliza la ejecucion de la funcion, y especifica un valor para ser devuelto a quien llama la funcion. O lo que es lo mismo, usamos return para finalizar y tambien para poder asignar el resultado a una variable*/

function areaCuadrado() {
  let lado = 6;
  let areaCuadrado = lado * lado;
  //console.log("El area del cuadrado es: ", areaCuadrado);
  return areaCuadrado; //se finaliza la funcion y queda almacenada en la  variable
}

let resultadoqueusaremastarde = areaCuadrado();
//almaceno el resultado de la funcion en una variable

areaCuadrado();

//console.log(areaCuadrado());
console.log("Usare mi resultado que guarde anteriormente para mostrarte el area del cuadrado:",resultadoqueusaremastarde);

function volumenCubo(){
    let volumen = resultadoqueusaremastarde * resultadoqueusaremastarde * resultadoqueusaremastarde;
    console.log("El volumen del cubo es: ",volumen);
}

volumenCubo();

//Ejercicio: Escribir una funcion que calcule el area de un circulo y otra que calcule el volumen de un cilindro usando la primera funcion

console.log("Ejercicio Area Circulo y Volumen Cilindro");

function areaCirculo(){
    const PI= 3.1416;
    let radio =7;
    let areaCirculo = (PI * ((radio) * (radio)));
    //console.log("El area del circulo es: ",areaCirculo);
    return areaCirculo;
    }

let infoDelAreaCirculo = areaCirculo(); //voy a guardar todo el resultado de mi funcion en una nueva variable

// areaCirculo(20);
// console.log(infoDelAreaCirculo);

function volumenCilindro(){
    let altura = 19;
    let volumen = infoDelAreaCirculo* altura;
    console.log("El volumen del cilindro es: ",volumen);

}

volumenCilindro(); //Invocamos nuestra funcion

//Agregar calculadora normal y cientifica aquí


//FUNCIONES FLECHA

//funcion tradicional

function sumita(numero1,numero2){
  return numero1 + numero2;
}

//convirtiendo en funcion FLECHA
function sumita(numero1,numero2){
  return numero1 + numero2;
}

//paso 1. Quitamos la palabra reservada function 

// sumita(numero1,numero2){
//   return numero1 + numero2;
// }

// paso 2. Eliminamos las llaves que delimitan la funcion y en su lugar abrimos el bloque de texto  con esta flecha =>

// sumita(numero1,numero2)=>
//   return numero1 + numero2;

// paso 3. Eliminamos el return porque ya esta implicito en todas las funciones flechas. Asignamos a una variable

// var sumita = (numero1,numero2) => numero1 + numero2;

//sumita(); //Invocamos la funcion

//Otra forma de crear funciones

//2.- Asignando nuestra funcion a una variable

function sumita(numero1,numero2){
  return numero1 + numero2;}

  //Esto es una funcion anónima 

 let x = function(){
   let num1 =5;
   let num2= 10;
   let suma = num1 + num2;
   console.log("La suma de mi función anónima es: ", suma);
 } 

 x(); //Invocacion de nuestra funciones

 var y = (numero1, numero2) => numero1 + numero2;

 //Otra funcion anonima convertida a una funcion flecha de la

 function saludar(nombre){
   let saludo = "Hola " + nombre;
   console.log(saludo);
 }

 saludar("Briana");
 saludar("Alonso");
 saludar("Felipe");

 //conversion a funcion flecha de la

 let saludo = nombre => console.log("Hola " + nombre);

 saludo("Luis");
 saludo("Priscila");
 saludo("Paulina");



 //Ejercicios de Practica (2)

 //1.-

 function Operacion (val1,val2,val3,val4) {
   let operacion = (val1 + val2) / (val3 * val4);
   console.log("El resultado es: ",operacion);
   return operacion
 }

 Operacion(10,10,2,5);



 //2.-

 function chicharronera (a,b,c){
   let x2 = (Math.pow(b,2)-(4*(a*c)));
   console.log(x2);
   //let x = (((-1) *(b))+ (Math.sqrt(x2)/(2*a)));
   Math.sqrt(x2);
   console.log(x2);

   console.log("El resultado de la operación es: ",x);
 }

 chicharronera(20,5,7);
