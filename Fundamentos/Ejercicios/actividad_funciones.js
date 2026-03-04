//ACTIVIDAD – Función que calcula el perímetro de una circunferencia

function calcularPerimetro (radio){
    let perimetro = 2 * Math.PI * radio
    return perimetro;
}
console.log("Perímetro:" + calcularPerimetro(25));

// Podemos hacer referencia a propiedades como Math.PI de JS. En este caso, se puede consultar en https://www.w3schools.com/js/js_math.asp

//ACTIVIDAD – Función que devuelve la media de tres números:

function mediaNumeros (n1, n2, n3){
    let suma = n1 + n2 + n3;
    return (suma / 3).toFixed(2); //He puesto entre parentesis la operación para hacer una llamada a la función que sirve para limitar a 2 cifras el decimal.
}
console.log("Media: " + mediaNumeros(12.3, 4, 11.1))