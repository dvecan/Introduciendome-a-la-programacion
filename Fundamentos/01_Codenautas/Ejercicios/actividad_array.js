//ACTIVIDAD - Array con 10 números y obten la media de estos números
let listaNum = [1, 3, 5, 2.3, 66, 31.4, 3, 90.2, 1, 0];

function obtenerMedia(arrayNumeros){
    let sumaNum = 0; //en este caso 0 es el valor inicial (sin datos)
    for(let i = 0; i < arrayNumeros.length; i++){ //en este caso 0 se refiere a la posición del array
        sumaNum += arrayNumeros[i]; // i se está refiriendo a la posición dentro del array
    }
    return sumaNum / arrayNumeros.length;
}
console.log(obtenerMedia(listaNum));