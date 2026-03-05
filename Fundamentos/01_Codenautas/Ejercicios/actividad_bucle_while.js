//ACTIVIDAD - Imprime los números múltiplos de 7 entre el valor 1 y 300
 let numero = 1;
 let contador2 = 0; //esto es para contar cuantos multiplos tenemos
 while(numero <= 300){
    //módulo %, obtenemos el resto de una división. Si es 0, encontramos el multiplo.
    if(numero % 7 == 0){
        console.log(numero);
        contador2++; //y sumamos 1 al contador
    }
    numero++;
 }
 console.log("Hay " + contador2 + " múltiplos de 7"); // al finalizar el bucle, nos da el total del contador.