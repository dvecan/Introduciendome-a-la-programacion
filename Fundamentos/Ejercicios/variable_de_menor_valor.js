//ACTIVIDAD - Encuentra la variable de menor valor
const num1 = 6.8;
const num2 = 3.9;
const num3 = 7.2;

if(num1 < num2){
    if(num1 < num3){
        console.log("num1 es el menor");
    }
}
// lo anterior, también se puede representar de esta forma
if(num1 < num2 && num1 < num3){
    console.log("num1 es el menor");
}
// aquí vamos a buscar el num de menor valor
if(num1 < num2 && num1 < num3){
    console.log("num1 es el menor");
}
if(num2 < num1 && num2 < num3){
    console.log("num2 es el menor");
}
if(num3 < num1 && num3 < num2){
    console.log("num3 es el menor");
}

// pero lo anterior se puede hacer más limpio
if(num1 < num2 && num1 < num3){
    console.log("num1 es el menor");
}
else if (num2 < num1 && num2 < num3) {
        console.log("num2 es el menor");
}
else if (num3 < num1 && num3 < num2) {
    console.log("num3 es el menor");
} else {
    console.log("Hay un empate");
}