//alert("Estoy vivo!");

//Comentario de felipe

//Condicionales

//Comentario de felipe

/*IF (si)

if (condicion){
  instrucciones
}
*/

// if (camisalimpia ==true){
//voy a la fiesta
// }

const edadDavid = 17;

if (edadDavid < 18) {
  console.log("No puedes ir a la fiesta");
}

//ELSE ("si no" o "de otro modo")

const edadDavid2 = 17; //menor de edad

if (edadDavid2 < 18) {
  //Si es true, se ejecuta el codigo de abajo
  console.log("No puedes ir a la fiesta");
} //Si es false, se ejecuta el codigo de abajo
else console.log("Puedes ir a la fiesta");

//Prompt nos sirve para solicitar datos al usuario y almacenarlos en una variable
// var hora = prompt("Ingrese la hora actual -solo la hora, por favor");
// if(hora <18){ //true
//   console.log("Buenos dias, hace mucho calor, toma agua");
// } else { //false
//   console.log("Buenas tardes, hace mucho frio, usa un sueter");
// }

//!valores que se evaluan como valores falsos

// los valores son:

// -false
// -0
// -"" (cadena vacia)
// -null
// -undefined
// -Nan (Not a Number)

/* 
ELSE OF (si, si no)

Sintaxis:

else if(condicion){
  instrucciones
}
*/

//comentarios Felipe

// if(condicion){ true

// } else if(){

// } else {

// }

//if: 1 solo resultado
//else: 2 resultados
//else if: 2 o más resultados

var hora = prompt("Ingresa solo la hora actual en formato de 24 horas");

// if(hora <=13){
//   console.log("Es de mañana, desayuna rico");
// } else if(hora<=19){
//   console.log("Es de tarde, come rico");
// }else{
//   console.log("Es de noche, cena rico");
// }

//Ejercicio de JC

if (hora < 12) {
  console.log("Buenos dias");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenas tardes");
} else if (hora > 18 && hora <= 24) {
  console.log("Buenas noches");
} else {
  console.log("No es una hora válida");
}

//Otro ejemplo

nombreIngresado = prompt("Ingrese su nombre").toLowerCase();

if (nombreIngresado === "david") {
  console.log("Hola David");
} else if (nombreIngresado === "Saira") {
  console.log("Hola Saira");
} else {
  console.log("Hola desconocido");
}

//operador ternario que permite tres argumentos (lambda)

/*
Estructura:

resultado = (condicion)?valor1:valor2
*/

var reprobados = 43;

if (reprobados < 30) {
  reprobados = "David tuvo pocos reprobados";
} else {
  reprobados = "David tuvo muchos reprobados";
}

console.log(reprobados);

//Transformando a un operador ternario
var reprobados = 13;
//var reprobados = prompt("Ingrese la cantidad de reprobados");
var reprobatorios =
  reprobados < 30
    ? "David tuvo pocos reprobados"
    : "David tuvo muchos reprobados";
//(reprobados <30)? "David tuvo pocos reprobados":"David tuvo muchos reprobados";

//Otro ejercicicio de cambio de condicionales IF a ternario
//hora = prompt("Ingresa la hora");
// if (hora < 12) {
//   console.log("Buenos dias");
// } else if (hora >= 12 && hora <= 18) {
//   console.log("Buenas tardes");
// }

// var resultado =(hora <18) ? "Buenos dias": "Buenas noches";
//console.log(resultado);

//if devuelve un posible resultado
//if + else ó ternario que devuelven dos posibles resultados
//if + else if + else que devuelven 3 o mas posibles resultados

//Condicional SWITCH

//Comentarios Felipe

// switch (expresion) {
// case valor1:
//   bloque de codigo;
//   break;
// case valor2:
//   bloque de codigo;
//   break
// default:
//   bloque de codigo;
//   break;
// }

//Ejemplo

opcion = prompt("Ingresa una opcion del 1 al 4");
switch (opcion) {
  case "1":
    console.log("Seleccionaste la opcion 1");
    break;
  case "2":
    console.log("Seleccionaste la opcion 2");
    break;
  case "3":
    console.log("Seleccionaste la opcion 3");
    break;
  case "4":
    console.log("Seleccionaste la opcion 4");
    break;
  default:
    console.log("Opcion no válida");
    ss;
}

console.log(typeof opcion); //String

//Tarea 48 horas hacer (Miercoles) CANVA - liga repo Github (Control de flujo):
// -Ejercicio de signos zodiacales de la sesión "Diseño de ALgoritmos y Sol. Problemas"
// - Ejercicio de menu para hacer las 4 figuras geometricas, añadiendo opciones para calcular area y perimetro de cada figura (cuadrado, circulo, rectangulo y triangulo)

//Ejercicio FIG Geometricas

console.log();
console.log("Figuras Geometricas");

function figGeometricas() {
  console.log("Ingresa el valor a elegir del menú: ");
  console.log(
    "****MENU****'\n'1.- Cuadrado'\n'2.- Circulo'\n'3.- Rectangulo'\n'4.- Triangulo"
  );
  let variable = prompt();

  switch (variable) {
    case "1":
    case 1:
      let lado = prompt("Ingresa el valor de un lado del cuadrado");
      let area = lado * lado;
      let perimetro = 4 * lado;
      console.log(
        "El area del cuadrado es de " +
          area +
          " y el perimetro es de " +
          perimetro);
      break;

    case "2":
    case 2:
      let radio = prompt("Ingresa el radio del circulo");
      let areaCir = Math.PI * (radio ** 2);
      let circunferencia = Math.PI * (2 * radio);
      console.log(
        "El area del circulo es de " +
          areaCir +
          " y el diametro es de " +
          circunferencia
      );
      break;

    case "3":
    case 3:
      let baseRect = prompt("Ingresa la base del rectángulo");
      let alturaRect = prompt("Ingresa la altura del rectángulo");
      if (baseRect == alturaRect) {
        console.log(
          "Un rectángulo debe llevar valores diferentes de base y altura"
        );
      } else if (baseRect != alturaRect) {
        let areaRect = baseRect * alturaRect;
        let perimetroRect = baseRect + baseRect + alturaRect + alturaRect;
        console.log(
          "El area del rectángulo es de " +
            areaRect +
            " y el perimetro es de " +
            perimetroRect
        );
      }
      break;

    case "4":
    case 4:
      let baseTrian = prompt("Ingresa la base del triángulo");
      let alturaTrian = prompt("Ingresa la altura del triángulo");
      let areaTrian = (baseTrian * alturaTrian) / 2;
      let perimetroTrian = baseTrian + 2 * alturaTrian;
      console.log(
        "El area del triángulo es de " +
          areaTrian +
          " y el perimetro es de " +
          perimetroTrian
      );
      break;

    default:
      console.log("Ingresa una opción válida");
      break;
  }
}

figGeometricas();

// Ejercicio de ZODIACO

console.log();
console.log("Ejercicio Horoscopo");

function Horoscopo() {
  let dia, mes;
  dia = parseInt(document.formulario1.dia.value);
  mes = parseInt(document.formulario1.mes.value);
  if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) alert("Aries");
  if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10)) alert("Libra");
  if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5)) alert("Tauro");
  if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11)) alert("Escorpio");
  if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6)) alert("Géminis");
  if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)) alert("Sagitario");
  if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7)) alert("Cáncer");
  if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)) alert("Capricornio");
  if ((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8)) alert("Leo");
  if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2)) alert("Acuario");
  if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) alert("Virgo");
  if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)) alert("Piscis");
}

Horoscopo();




