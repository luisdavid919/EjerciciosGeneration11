/*Un operador realiza alguna opercaion en uno o varios operandos (valor de datos) y devuelve un valor. Por ejemplo 1 + 1 = 2

Dentro de los operadores mas utilizados en Js se encuentran:
*/

//Operadores de asignación (=)

numero = 7;
numero1 = 20;
numero2 = 30;

adicion = numero1 + numero2;
sustraccion = numero1 - numero2;
multiplicacion = numero1 * numero2;
division = numero1/numero2;
modulo = numero1 % numero2;


console.log("Operador de asignacion");
console.log(adicion);
console.log(sustraccion);
console.log(multiplicacion);
console.log(division);
console.log(modulo);

//Operadores de cadena

/*Los operadores de cadena nos permiten concatenar cadenas de texto, conocer su longitud, comparar cadenas de texto, buscar una cadena de texto dentro de otra cadena de texto,etc*/

//toLowerCase()


let texto1 = "HOLA GENERATION";
let texto2 = texto1.toLowerCase();
console.log(texto2);

//toUpperCase()

let texto3 = "hola generation";
let texto4 = texto3.toUpperCase();
console.log(texto4);

//trim() ->sirve para quitar espacios en blanco o tabuladores

let texto5 = "    HOLA GENERATION    ";
let texto6 = texto5.trim();
console.log(texto6);


//Concatenar: Union de strings

let texto7 = "HOLA GENERATION";
let texto8 = "SOY LUIS DAVID";
let union = texto7.concat(" ",texto8);
console.log(union);

//Operadores Lógicos (&&, ||, !)

//Devuelven un resultado a partir de que se cumpla (o no), la condición, Su resultado es booleano y sus operadores son valores lógicos o asimilables a ellos

//AND (&&)

num1 =12;
num2 =24;
num3 =36;

//sirve para determinar si dos expresiones son verdaderas o falsas
//- Si ambas son verdaderas = verdaderos; si una es falsa todo es falso. Si ninguna de las expresiones es verdadera, el resultado es falso

afirmacion1 = num1 > num2; //false
afirmacion2 = num1 < num2; //true
console.log("El resultado de las dos afirmaciones es: ",afirmacion1 && afirmacion2);

afirmacion3 = num3 > num2; //false
afirmacion4 = num2 > num1; //true
console.log("El resultado de las dos afirmaciones es: ",afirmacion3 && afirmacion4);

//OR (||)

/* Sirve para determinar si dos expresiones son falsas. Si cualquiera de las dos afirmaciones es verdadera, todo es verdadero. Si las dos son falsas, todo es falso

-Si ambas son falsas = falso
-Si alguna es verdadera = verdadero
*/

nu1 =12;
nu2 =24;

afir1= nu1 < nu2; //true
afir2= nu1 != nu2; //true

console.log(afir1);
console.log(afir2);
console.log("El resultado de las dos afirmaciones es: ",afir1 || afir2);


//NOT (!)

//Siempre devuelve la inversa de la expresion

//False = True y viceversa

n1=12;
n2=24;

af1 = n1 < n2; //true
af2 = n1 != n2; //true

console.log("El resultado es:" ,!af1);
console.log("El resultado es:" ,!af2);

//Operadores de comparacion (==,!=,<,>,>=,<=)

//Operador igual (==)

/* 
Sirve para comparar si dos valores son iguales
*/

j = 12;
k = 13;
l = 13;
z = "13";

console.log("El resultado de la comparación de j y k es;",j == k);
console.log("El resultado de la comparación de k y l es;",k == l);
console.log("El resultado de la comparación de j y l es;",j == l);
console.log("El resultado de la comparación de k y z es;",k == z);


//Operador diferente (!=)

let m = 13;
let n = 12;
let o = 12;

console.log("OPERADOR !=")
console.log("El resultado de la comparacion usando el operador != de m y n es: ",m != n);
console.log("El resultado de la comparacion usando el operador != de n y o es: ",n != o);
console.log("El resultado de la comparacion usando el operador != de m y o es: ",m != o);


//Operador igualdad estricta (===)

/* Sirve para comparar si dos valores son iguales y son del mismo tipo */

let valora = 23;
let valorb = "23";
let valorc = 13;
let valord = "texto 23";

console.log("¿El valor a y el valor b son iguales?:", valora === valorb)


//Operador de desigualdad estricta !==

/* Sirve para comparar si dos valores son estrictamente diferentes en cuanto a valor y tipo de dato */

let ejemplo1 = 23;
let ejemplo2 = 13;
let textoejemplo = "23";
let textoejemplo2 = "texto 2";

console.log("El numero 23 y el texto 23 son estrictamente diferentes", ejemplo1 !== textoejemplo);


//Operador mayor que (>)

/* Sirve para determinar si un numero es mayor que otro */

console.log("Operador mayor que >")
console.log("EL numero 23 es mayor que el numero 13?:", ejemplo1>ejemplo2);
//Imprime true 

//Operador menor que (<)

/* Sirve para determinar si un numero es menor que otro*/

console.log("Operador mayor que <")
console.log("EL numero 23 es menor que el numero 13?:", ejemplo1<ejemplo2);

//Operador >= para determinar si el numero es mayor o igual que

console.log("Operador mayor que >")
console.log("EL numero 23 es mayor o igual que el numero 13?:", ejemplo1>=ejemplo2);

//Operador <= para determinar si el numero es menor o igual que

console.log("Operador mayor que >")
console.log("EL numero 13 es menor o igual que el numero 23?:", ejemplo2>ejemplo1);


//Ejercicio de combinacion de operadores 1

console.log("Ejercicio de combinacion de operadores");

let number1 =12;
let number2 =24;
let number3 =25;
let number4 =92;
let number5 =91;

op = ((number1 < number2 || number2 < number3) && (!(number1 != number2)&& number5 != number3));
console.log(op);

//Calculo de operaciones 2

let a=12;
let b=24;
let c=25;
let d=92;
let e=91;

ope= (e > b && d < c) || (!(a === b) || c != c);
console.log(ope); //true

//Operadores matematicos aritmeticos (+, - , *, /, %)

console.log();
console.log("Operadores Aritmeticos");
function operacionesMatematicas(){
  numero1 = 10;
  numero2 =2;
  numero3 ="5";
  console.log("El resultado de la suma es de: ",numero1 + numero2);
  console.log("El resultado de la resta es de: ",numero1 - numero2);
  console.log("El resultado de la multiplicacion es de: ",numero1 * numero2);
  console.log("El resultado de la division es de: ",numero1 / numero2);
  console.log("El resultado del modulo es de: ",numero1 % numero2);
  console.log("El resultado de la exponenciacion de 10 **2 es de: ",numero1 ** numero2);

  //raiz cuadrada
  console.log("El resultado de la raiz cuadrada de 10 es:",Math.sqrt(numero1));
  
}



operacionesMatematicas();


//incremento y decremento

primerValor = 10;
segundoValor = 2;
valorPrueba = 10;
valor = "2";

console.log("Incremento de 10 es: ",++ primerValor);
console.log("El resultado del incremento de 10 en 5 es de: ",primerValor+=5);
console.log("Decremento de 2 es: ",segundoValor -=2);


//Positivos y negativos unarios

//Negativo Unario ( - )

//Devuelve el valor negativo de un numero

console.log("Operador Negativo Unario de 10 es: ",-valorPrueba);
//si el numero es negativo se convierte a positivo

//Positivo Unario ( + )

//Devuelve el valor de una cadena a positivo

console.log("El resultado del incremento de la cadena 2 es de: ",+valor);
console.log("El resultado del incremento de la cadena 2 es de: ",+"345");
  

//TAREA CANVA SUBIR

//Esta en el iPad

