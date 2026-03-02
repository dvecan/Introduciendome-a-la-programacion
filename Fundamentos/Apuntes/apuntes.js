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