// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return(array[0]);
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return(array.pop());
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return(array.length);
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] + 1;
  } return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = palabras[0];
  for (var i = 1; i < palabras.length; i++) {
    frase = frase + ' ' + palabras[i];
  } return frase;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    if (elemento == array[i]){
      return true;    
    }
  }
  return false;
} //Si el elemento es igual a array[i] en la primer evaluacion, la funcion retorna true, y no sigue evaluando 
//los demas numeros. Si no es igual, continua evaluando los siguientes hasta que uno coincida, si ninguno coincide,
//sale de la funcion y retorna false.

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var contador = 0;
  for (var i = 0; i < numeros.length; i++) {
    contador += numeros[i]; // contador += numeros[i] (se hace asi tambien)
  } 
  return contador;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var contador = 0;
  for (var i = 0; i < resultadosTest.length; i++) {
    contador += resultadosTest[i];
  } 
  return contador / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var contador = 0;
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] > contador) {
      contador = numeros[i];
    }
  } 
  return contador;
}


function multiplicarArgumentos() {
  //Sabiendo que arguments[0] = los atributos que se pasan en la funcion 
  //Ej: arguments[0].length = array.length, arguments[0][1] = array[1]

  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  var resultado = 1;
  if(arguments.length == 0){
    console.log("No hay parametros");
    return 0;
  }
  if(arguments.length == 1 && arguments[0].length == 1){
    console.log("Hay solo un parametro");
    if(Array.isArray(arguments[0])){
      console.log("Hay solo un parametro y es un array");
      return arguments[0][0];
    }
    else{
      console.log("Solo un parametro");
      return arguments[0];
    }
  }
  else if(arguments.length >= 1){
    console.log("Hay uno o mas de un parametros");
    for (var i = 0; i < arguments.length; i++) {
      if(Array.isArray(arguments[i])){
        console.log("Hay uno o mas parametros y al menos uno es un array");
        for (var k = 0; k < arguments[i].length; k++) {
          resultado = resultado * arguments[i][k];
        }
      }
      else{
        console.log("Hay uno o mas parametros y al menos uno es un int");
        resultado = resultado * arguments[i]
      }
    }
  }
  return resultado;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
