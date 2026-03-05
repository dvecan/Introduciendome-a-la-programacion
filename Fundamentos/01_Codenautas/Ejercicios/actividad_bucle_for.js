//ACTIVIDAD - Imprime si un número es primo o no
let numero = 7; // el número a evaluar
let primo = true; // variable para saber si el número es primo o no, por defecto se asume que es primo

for(let i = 2; i < numero; i++){ // se ejecuta mientras i sea menor que el número, y cada vez que se ejecute se le suma 1 a i
    if(numero % i == 0){ // si el número es divisible por i, entonces no es primo
        primo = false;
        break; // y se rompe el bucle para que no siga evaluando
    }
}
if (primo == true) { // si primo es true, entonces el número es primo
    console.log(numero + " es un número primo");
} else { // si primo es false, entonces el número no es primo
    console.log(numero + " no es un número primo");
}