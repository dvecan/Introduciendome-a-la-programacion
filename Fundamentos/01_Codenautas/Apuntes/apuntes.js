/* 
# DECLARACIÓN DE VARIABLES

## CONST / LET
    La constante CONST es para valores fijos. JS nos proteje de errores.
    La variable LET es para valores que pueden cambiar en el documento.
    La variable VAR ya no se usa. Era para denominar variables cambiantes (como let).
*/

const nombre = "David";  // al ser una palabra se le conoce como "string"
let edad = 28;  // al ser numero entero se le conoce como "int"
const pi = 3.1415; // a un número con decimales se le conoce como "float"
let estado = false; // es un "boolean"
let x; // es una variable sin valor definido 

console.log(edad); // imprime en la consola el valor
console.log(edad + pi); // imprime en la consola el resultado de la operación

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————

/*
# ESTRUCTURAS DE CONTROL

## SENTENCIA CONDICIONAL IF()
    Lorem
*/
if(edad < 30) { // condición sobre si edad es menor que 30. Si se cumple, se ejecuta. Si no, no se ejecuta.
    console.log("Tu edad es menor que 30"); // en este caso al ser cierto, pinta este texto.
} 

if(edad < 20) {
    console.log("Tu edad es menor que 20"); 
}else{ // "if else" sirve para que si el "if" es false, se ejecute lo posterior al else.
    console.log("Tu edad es mayor que 20");
}

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————

//SIMBOLOS DE COMPARACIÓN
/*
    < menor que
    > mayor que
    =< igual o menor que
    => igual o mayor que
    == igual que
    != diferente que

    && si se cumple esto (and) esto = AND LÓGICO
    || si se cumple esto (or) esto = OR LÓGICO
*/

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————

//EL BUCLE WHILE() Para ejecutar cosas mientras se cumple una condición
let contador = 0;
while(contador <= 10){ //mientras se cumpla lo que hay entre parentesis se ejecuta lo que hay dentro de las llaves sin parar hasta que sea falso
    console.log(contador); // 0 es menor que diez, por lo tanto imprime 0 (en la primera vuelta)
    contador = contador + 1; // y le sumamos 1 al valor de contador
    //la línea anterior también se puede pintar como: 
        // contador++;
    //si queremos que sume 2
        // contador += 2;
} 
 console.log("Contador es más grande que 10");

 //EL BUCLE FOR() Para ejecutar cosas un número determinado de veces

 for(let i = 0; i < 10; i++){ // se ejecuta mientras i sea menor que 10, y cada vez que se ejecute se le suma 1 a i
    console.log(i);
    }

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//FUNCIONES
//Nos ayuda a organizar el código, a reutilizarlo y a hacerlo más legible. Es un bloque de código que se puede ejecutar cuando se le llama por su nombre.

let nume1 = 10;
let nume2 = 20;

//Paso 1 – Definimos la función
function sumar(n1, n2){ // entre parentesis van los parámetros, que son las variables que se van a usar dentro de la función
    return n1 + n2; // el return es para devolver un valor, en este caso la suma de n1 y n2
}

//Paso 2 – Llamamos a la función
console.log(sumar(nume1, nume2)); // al llamar a la función, le pasamos los argumentos, que son los valores que se van a usar dentro de la función. En este caso, nume1 y nume2.)

//Ejemplo - velocidad = distancia / tiempo
let distancia = 500;
let tiempo = 3;

function calcularVelocidad(d, t){
    return d / t;
}

console.log(calcularVelocidad(distancia, tiempo));

//Variable global - Puedo acceder a esta variable desde cualquier parte del programa.
let r = 4.5; 

//Si declaro una variable dentro de llaves {} se la conoce como Variable local
function calcularPerimetro(radio){
    //variable local: perimetro. Esta variable fuera de aquí, no existe.
    let perimetro = 2 * Math.PI * radio;
    return perimetro;
}

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————

// ESTRUCTURAS DE DATOS (ARRAYS) - Se utilizan para almacenar datos en una variable para luego acceder a ellos de forma individual

//Declaración de un array
let frutas = ["manzana", "pera", "melón"]; //en las arrays se cuenta de 0 a X. En este caso, "manzana" es 0, "pera" es 1...

//Longitud del array:
console.log(frutas.length); //esto devuelve el nº de datos que contiene.

//Acceder a un elemento:
console.log(frutas[0]); //esto indica qué valor pintar. En este caso, "manzana"

//Se pueden reasignar los valores
frutas[3] = "sandia";

//En el hueco que encuentre vacío, mete un dato
frutas.push("piña"); 

//un array puede tener distintos tipos de datos
let miArray = [1, 2.45, true, "hola"];

//Podemos tener arrays vacíos para añadir elementos después
let miArray2 = [];

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————
