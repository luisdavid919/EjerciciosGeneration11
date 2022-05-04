//alert("Estoy vivo");


//Conversion de datos
console.log("COnversion de cadenas a numeros usando NUmber()");

console.log(Number("10")); //10
console.log(Number("10.5")); //10.5
console.log(Number("")); //0
console.log(Number(" ")); //0
console.log(Number("10 10 10 10")); //NaN
console.log(Number("Hola soy David")); //NaN

//Metodo parseInt analiza una cadena y devuelve un numero entero. Si permite espacios y solo devuelve el primer numero encontrado

console.log("Conversion de cadenas en numeros usando parseInt()");
console.log(parseInt("-10")); //-10
console.log(parseInt("10.55")); //10
console.log(parseInt("10 10 10 10")); //10
console.log(parseInt("10 años")); //10
console.log(parseInt("")); //NaN
console.log(parseInt(" ")); //NaN
console.log(parseInt("10 10 10 10")); //10

//Metodo parseFloat analiza una cadena y devuelve un numero decimal. Si permite espacios y solo devuelve el primer numero encontrado

console.log("Conversion de cadenas en numeros usando parseFloat()");
console.log(parseFloat("-10")); //-10
console.log(parseFloat("10.55")); //10.55
console.log(parseFloat("10 10.58 10 10")); //10

//Conversion de numeros a cadenas

String(); 
console.log("Conversion de numeros a cadenas usando String()");
console.log(String((10))); //"10"
console.log(String(10.5)); //"10.5"
console.log(String(true)); //"true"
console.log(String(false)); //"false"
console.log(String(100 + 23)); //"123"

//Tener buenas practicas desde la planeación de todo 

//Conversion de booleanos a numeros

console.log("Conversion de booleanos a numeros usando Number()");
console.log(Number(false)); //0
console.log(Number(true)); //1

//Conversio de numeros a booleanos
console.log("Conversion de numeros a booleanos usando Boolean()");
console.log(Boolean(0)); //false
console.log(Boolean(1)); //true

//typeof nos ayuda a saber el tipo de dato que es una variable

console.log("Uso de typeof");
console.log(typeof "Hola"); //String
console.log(typeof 10); //number
console.log(typeof true); //boolean
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof 3.1416); //number
console.log(typeof []); //object



//Ejercicio de conversion

//1 false

console.log(Number(false)); //0
console.log(String(false)); //false
console.log(Boolean(false)); //false

//2 true

console.log(Number(true)); //1
console.log(String(true)); //true
console.log(Boolean(true)); //true

//3 0

console.log(Number(0)); //0
console.log(String(0)); //0
console.log(Boolean(0)); //false

//4 1

console.log(Number(1)); //1
console.log(String(1)); //1
console.log(Boolean(1)); //true

//5 "0"

console.log(Number("0")); //0
console.log(String("0")); //0
console.log(Boolean("0")); //true

//6 "000"

console.log(Number("000")); //0
console.log(String("000")); //000
console.log(Boolean("000")); //true

//7 "1"

console.log(Number("1")); //1
console.log(String("1")); //1
console.log(Boolean("1")); //true

//8 NaN

console.log(Number(NaN)); //NaN
console.log(String(NaN)); //NaN
console.log(Boolean(NaN)); //false

//9 Infinity

console.log(Number(Infinity)); //Infinity
console.log(String(Infinity)); //Infinity
console.log(Boolean(Infinity)); //true

//10 -Infinity

console.log(Number(-Infinity)); //-Infinity
console.log(String(-Infinity)); //-Infinity
console.log(Boolean(-Infinity)); //true

//11 ""

console.log(Number("")); //0
console.log(String("")); //
console.log(Boolean("")); //false

//12 "20"

console.log(Number("20")); //20
console.log(String("20")); //20
console.log(Boolean("20")); //true

//13 "Twenty"

console.log(Number("Twenty")); //NaN
console.log(String("Twenty")); //Twenty
console.log(Boolean("Twenty")); //true

//14 null

console.log(Number(null)); //0
console.log(String(null)); //null
console.log(Boolean(null)); //false

//15 undefined

console.log(Number(undefined)); //NaN  
console.log(String(undefined)); //undefined
console.log(Boolean(undefined)); //false