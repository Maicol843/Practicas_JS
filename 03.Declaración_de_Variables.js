//Declaración de Variables
var variable;
let variableLet;

var a = 1;
console.log(a);

a = 4;
console.log(a);

/*
¿Cual es la diferencia entre una variable y una constante?
Una variable es una especie de caja donde se almacena un valor.
La definición de variables de ese valor puede cambiar.
*/

//Declaración de Constantes
const constante = "Hola soy una constante";
console.log(constante);

//También una variable se puede definir por medio de let
let b = 3;
console.log(b);

b = 5;
console.log(b);

/*
DIFERENCIA ENTRE VAR Y LET
La diferencia entre una variable var y una variable let,
es que var afecta a todo el código y la variable let solo
afecta al bloque donde esté siendo declarado.
*/

var variable = "Hola soy una variable var";

for (var i = 0; i < 3; i++){
    var variable = "Soy la segunda variable";
}

console.log(variable);

let LetVariable = "Hola soy una variable let";

for (var i = 0; i < 3; i++){
    let LetVariable = "Soy la segunda variable Let";
}

console.log(LetVariable);

/*
Existe un operador llamado typeof, que nos indicaría
de que tipo es el valor de la variable
*/

console.log(typeof 1); //number
console.log(typeof "2"); //string
console.log(typeof false); //boolean
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof variable); //string

var num = 4;
console.log(num);