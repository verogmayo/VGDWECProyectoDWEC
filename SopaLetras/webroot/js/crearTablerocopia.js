//tam_palabras_mayor = ; //El tablero será como minimo el numeor de caracteres de la palabras mas larga
//total_letras_palabras = ; //El numero de casillas será `por lo meos el dobnle del total de letras
//function calcularDimensiones(params) {
//Donde va cada palabra y en que dirección
//se genera una posicion aleatoria y una direciohn aleatoria
//30% de vocales y 70% consonates en las letras aleatorias para rellenar el resto
//pasamos un array de palabras y se genera el tablero
//funcion nomtrartablero para formar el tablero

//Se crea el array de palabras
// var arrayPalabras = ["lunes"," martes", "miercoles", "jueves", "viernes", "sabado", "domingo", "enero", "febrero","marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre","noviembre", "diciembre", "anualidades"];
// var arrayPalabras = [
//   "lunes",
//   "martes",
//   "miercoles",
//   "jueves",
//   "viernes",
//   "sabado",
//   "domingo",
// ];
// console.log(arrayPalabras);

// //Sacar la palabra más larga. Hay que ordenarlas y coger la ultima para coger la mas larga.
// ordenarPalabaras = arrayPalabras.sort((a, b) => a.length - b.length);
// //var palabra_mas_larga = ordenarPalabaras[ordenarPalabaras.length - 1]; //El tablero será como minimo el numeor de caracteres de la palabras mas larga
// var letras_palabra_mayor = palabra_mas_larga.length;
// console.log(palabra_mas_larga);
// console.log(letras_palabra_mayor);
// var total_letras_palabras = 0; //El numero de casillas será por lo menos el doble del total de letras
// for (const palabra of arrayPalabras) {
//   total_letras_palabras = palabra.length + total_letras_palabras;
// }
// console.log(total_letras_palabras);

// //numero de casillas por linea
// //Math.ceil(): redondea hacia arriba
// var cuadrado_total_letras_palabra = Math.ceil(
//   Math.sqrt(total_letras_palabras * 2)
// );
// console.log(cuadrado_total_letras_palabra);
// var num_casillas_linea;
// var num_casillas_total;
// if (cuadrado_total_letras_palabra > letras_palabra_mayor) {
//   num_casillas_linea = cuadrado_total_letras_palabra;
// } else {
//   num_casillas_linea = letras_palabra_mayor;
// }
// console.log(num_casillas_linea);

// var num_casillas_total = Math.pow(num_casillas_linea, 2);
// console.log(num_casillas_total);

// let casillasTablero = []; // Se inicia el array vacio
// for (let f = 0; f < num_casillas_linea; f++) {
//   casillasTablero[f] = [];

//   for (let c = 0; c < num_casillas_linea; c++) {
//     casillasTablero[f][c] = "";
//   }
// }

// console.log(casillasTablero);

/**
 *
 * @returns lista de las palabras ordenadas
 */
function recibirPalabras() {
  let palabra;
  let lista = [];
  do {
    palabra = prompt("Introduzca un palabra. Cancelar para salir.");
    if (palabra !== null) {
      //para que no tome en cuenta el null como parte del array.
      lista.push(palabra);
    }
  } while (palabra !== null);
  lista.sort((a, b) => a.length - b.length);
  return lista;
}

function calcularDimensiones(lista) {
  let dimension;
  let num_letras = 0;
  for (const element of lista) {
    num_letras += element.length;
  }
  if (Math.floor(Math.sqrt(num_letras * 2)) + 1 > lista[0].length + 2) {
    dimension = Math.floor(Math.sqrt(num_letras * 2)) + 1;
  } else {
    dimension = lista[0].length + 2;
  }
  return dimension;
}

function crearTablero(dimension) {
  let tablero= [[]];
  for (let i = 0; i < dimension; i++) {
     tablero[i]=[];//inicializar
     for (let j = 0; j < dimension; j++) {
      tablero[i][j]=null;
      
     }
  }
  return tablero;
}
var arrayPalabras = [
   "lunes",
   "martes",
   "miercoles",
   "jueves",
   "viernes",
   "sabado",
  "domingo",
 ];
console.log(rellenarTablero(crearTablero(calcularDimensiones(arrayPalabras))));


function rellenarTablero(tablero) {
    let tabla=tablero;
    let abecedario=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for (let i = 0; i < tabla.length; i++) {
      for (let j = 0; j < tabla.length; j++) {
      tabla[i][j]=abecedario[Math.floor(Math.random()*27)];
     }
    }
    return tabla  
}




function calcularPosicionAleatoria(num_casillas_linea) {
  const fila = Math.floor(Math.random() * num_casillas_linea);
  const columna = Math.floor(Math.random() * num_casillas_linea);
  return {
    fila: fila,
    columna: columna,
  };
}
function calcularDireccionAleatoria(casillasTablero) {
  const direcciones = [
    { direccionF: 0, direccionC: 1 }, // derecha
    { direccionF: 0, direccionC: -1 }, // izq
    { direccionF: 1, direccionC: 0 }, // abajo
    { direccionF: -1, direccionC: 0 }, // arriba
    { direccionF: 1, direccionC: 1 }, //  abajo-derecha en diagonal
    { direccionF: -1, direccionC: -1 }, //  arriba-izquierda en diagonal
    { direccionF: 1, direccionC: -1 }, //  abajo-izquierda en diagolan
    { direccionF: -1, direccionC: 1 }, //  arriba-derecha en diagonal
  ];

  const indiceAleatorio = Math.random() * direcciones.length;

  return direcciones[indiceAleatorio];
}

function probarAColocar(
  casillasTablero,
  palabra,
  filaInicial,
  columnaInicial,
  direccion
) {
  const dimension = tablero.length; // Tamaño del tablero
  const longitud = palabra.length;

  for (let i = 0; i < longitud; i++) {
    // Calcular la posición actual de la letra
    const f = filaInicial + i * direccion.dF;
    const c = columnaInicial + i * direccion.dC;

    // mirar si no se sale del tablero
    if (f < 0 || f >= dimension || c < 0 || c >= dimension) {
      return false; // Se sale del tablero
    }

    // mirar en los cruces de letras
    const casillaActual = tablero[f][c];
    const letraPalabra = palabra[i];

    // si la casilla nno está vacia y la letra no corresponde, no se puede colocar
    if (casillaActual !== "" && casillaActual !== letraPalabra) {
      return false; // Hay un conflicto (no podemos reemplazar una letra existente por una diferente)
    }
  }

  return true; // Si llega aquí, es seguro colocar la palabra
}

function intentarColocarPalabra(casillasTablero, palabra) {
  const dimension = tablero.length;

  // parametros aleatorio de las funciones
  const pos = calcularPosicionAleatoria(dimension);
  const dir = calcularDireccionAleatoria();
  const filaInicial = pos.fila;
  const columnaInicial = pos.columna;
  const longitud = palabra.length;

  // mirar si se puede colocar la paalbra
  if (puedeColocar(tablero, palabra, filaInicial, columnaInicial, dir)) {
    //si se puede la coloca
    for (let i = 0; i < longitud; i++) {
      const f = filaInicial + i * dir.dF;
      const c = columnaInicial + i * dir.dC;

      tablero[f][c] = palabra[i];
    }

    return true;
  }
}


//------------------------------------------------------------

//       var arrayPalabras = [
//   "lunes",
//   "martes",
//   "miercoles",
//   "jueves",
//   "viernes",
//   "sabado",
//   "domingo",
// ];
//     var arrayPalabras2 = [
//   "lunes",
//   "martes",
//   "miercoles",
//   "jueves",
//   "viernes",
//   "sabado",
//   "domingo",
//   "enero",
//   "febrero",
//   "marzo",
//   "abril",
//   "mayo",
//   "junio",
//   "julio",
//   "agosto",
//   "septiembre",
//   "octubre",
//   "noviembre",
//   "diciembre"
// ];

var arrayPalabras = [
  "LUNES",
  "MARTES",
  "MIERCOLES",
  "JUEVES",
  "VIERNES",
  "SABADO",
  "DOMINGO",
];

var arrayPalabras2 = [
  "LUNES",
  "MARTES",
  "MIERCOLES",
  "JUEVES",
  "VIERNES",
  "SABADO",
  "DOMINGO",
  "ENERO",
  "FEBRERO",
  "MARZO",
  "ABRIL",
  "MAYO",
  "JUNIO",
  "JULIO",
  "AGOSTO",
  "SEPTIEMBRE",
  "OCTUBRE",
  "NOVIEMBRE",
  "DICIEMBRE",
];

/**
 *
 * @returns lista de las palabras ordenadas
 */
// function recibirPalabras() {
//   let palabra;
//   let lista = [];
//   do {
//     palabra = prompt("Introduzca un palabra. Cancelar para salir.");
//     if (palabra !== null) {
//       //para que no tome en cuenta el null como parte del array.
//       lista.push(palabra);
//     }
//   } while (palabra !== null);
//   lista.sort((a, b) => a.length - b.length);
//   return lista;
// }

/**
 * @param (array) lista de las palabras ordenadas
 * @returns (int) dimension de la matriz
 */
function calcularDimensiones(lista) {
  let dimension;
  let num_letras = 0;
  for (const element of lista) {
    num_letras += element.length;
  }
  if (Math.floor(Math.sqrt(num_letras * 2)) + 1 > lista[0].length) {
    dimension = Math.floor(Math.sqrt(num_letras * 2)) + 1;
  } else {
    dimension = lista[0].length + 2;
  }
  return dimension;
}

/**
 * @param (int) dimension de la matriz
 * @returns (array) creacion e inicializacion del tablero
 */
function crearTablero(dimension) {
  let tablero = [[]];
  for (let i = 0; i < dimension; i++) {
    tablero[i] = []; //inicializar
    for (let j = 0; j < dimension; j++) {
      tablero[i][j] = null;
    }
  }
  return tablero;
}

/**
 * @param (array) tablero
 * @returns (array) tabla rellena con las letras aleatorias
 */

function rellenarTablero(tablero) {
  let tabla = tablero;
  // let abecedario = [
  //   "a",
  //   "b",
  //   "c",
  //   "d",
  //   "e",
  //   "f",
  //   "g",
  //   "h",
  //   "i",
  //   "j",
  //   "k",
  //   "l",
  //   "m",
  //   "n",
  //   "ñ",
  //   "o",
  //   "p",
  //   "q",
  //   "r",
  //   "s",
  //   "t",
  //   "u",
  //   "v",
  //   "w",
  //   "x",
  //   "y",
  //   "z",
  // ];
  let abecedario = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
  for (let i = 0; i < tabla.length; i++) {
    for (let j = 0; j < tabla.length; j++) {
      if (tabla[i][j] === null) {
        //si la casilla no esta ocupada rellenar aleatoriamente
        tabla[i][j] = abecedario[Math.floor(Math.random() * 27)];
      }
    }
  }
  return tabla;
}

/**
 * @param (array) tablero
 * @returns (array) tabla rellena con las letras aleatorias
 */

function calcularPosicionInicial(lista, tablero) {
  let fila ;
  let columna;
  let direcciones;
  let direccion;
  let acumDireccion;
  let acumPosicion;
  let palabra;
  let direccionCorrecta;
  let f;
  let c;
  
 for (const element of lista) {
  palabra=element;
  acumPosicion = 1;
  do {
    fila = Math.floor(Math.random() * tablero.length);
    columna = Math.floor(Math.random() * tablero.length);
    direcciones = ["a", "ad", "d", "bd", "b", "bi", "i", "ai"]
    acumDireccion = 1;
    direccionCorrecta = false;
    do {
      f = fila;
      c = columna;
      direccion = direcciones[Math.floor(Math.random() * direcciones.length)];
      switch (direccion) {
        case "a":
          if (fila - palabra.length - 1 >= 0) {
            direccionCorrecta = true;
            if (direccionCorrecta) {
              for (let l = 0; l < palabra.length; l++) {
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) {
                  direccionCorrecta = false;
                }
                f--;
              }
            }
          }
          break;
        case "ad":
          if (
            fila - palabra.length - 1 >= 0 &&
            columna + palabra.length - 1 < tablero.length
          ) {
            direccionCorrecta = true;
            if (direccionCorrecta) {
              for (let l = 0; l < palabra.length; l++) {
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) {
                  direccionCorrecta = false;
                }
                f--;
                c++;
              }
            }
          }
          break;
        case "d":
          if (columna + palabra.length - 1 < tablero.length) {
            direccionCorrecta = true;
            if (direccionCorrecta) {
              for (let l = 0; l < palabra.length; l++) {
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) {
                  direccionCorrecta = false;
                }
                c++;
              }
            }
          }
          break;
        case "bd":
          if (
            columna + palabra.length - 1 < tablero.length &&
            fila + palabra.length - 1 < tablero.length
          ) {
            direccionCorrecta = true;
            if (direccionCorrecta) {
              for (let l = 0; l < palabra.length; l++) {
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) {
                  direccionCorrecta = false;
                }
                f++;
                c++;
              }
            }
          }
          break;
        case "b":
          if (fila + palabra.length - 1 < tablero.length) {
            direccionCorrecta = true;
            if (direccionCorrecta) {
              for (let l = 0; l < palabra.length; l++) {
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) {
                  direccionCorrecta = false;
                }
                f++;
              }
            }
          }
          break;
        case "bi":
          if (
            fila + palabra.length - 1 < tablero.length &&
            columna - palabra.length - 1 >= 0
          ) {
            direccionCorrecta = true;
            if (direccionCorrecta) {
              for (let l = 0; l < palabra.length; l++) {
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) {
                  direccionCorrecta = false;
                }
                f++;
                c--;
              }
            }
          }
          break;
        case "i":
          if (columna - palabra.length - 1 >= 0) {
            direccionCorrecta = true;
            if (direccionCorrecta) {
              for (let l = 0; l < palabra.length; l++) {
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) {
                  direccionCorrecta = false;
                }
                c--;
              }
            }
          }
          break;
        case "ai":
          if (
            columna - palabra.length - 1 >= 0 &&
            fila - palabra.length - 1 >= 0
          ) {
            direccionCorrecta = true;
            if (direccionCorrecta) {
              for (let l = 0; l < palabra.length; l++) {
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) {
                  direccionCorrecta = false;
                }
                f--;
                c--;
              }
            }
          }
          break;

        default:
          break;
      }
      if (!direccionCorrecta) {
        direcciones.splice(direcciones.indexOf(direccion), 1); //para borrar la direccion en curso para que no se repita.
      } else {
        console.log(direccion, fila, columna);
        tablero = escribirPalabras(fila, columna, direccion, palabra, tablero);
      }

      acumDireccion++;
    } while (!direccionCorrecta && acumDireccion <= 8);
    acumPosicion++;
  } while (
    !direccionCorrecta &&
    acumPosicion <= tablero.length * tablero[0].length
  ); //miestras que la direccion no sea valida y no haya recorrido el numero total de casillas
 }
  return tablero;
}

/**
 * @param (array) tablero
 * @returns (array) tabla rellena con las letras aleatorias
 */

function calcularPosicionInicial2(lista, tablero) {
  let fila ;
  let columna;
  let direcciones;
  let direccion;
  let acumDireccion;
  let acumPosicion;
  let palabra;
  let direccionCorrecta;
  let f;
  let c;
  
 for (const element of lista) {
  palabra=element;
  acumPosicion = 1;
  do {
    fila = Math.floor(Math.random() * tablero.length);
    columna = Math.floor(Math.random() * tablero.length);
    direcciones = ["a", "ad", "d", "bd", "b", "bi", "i", "ai"]
    acumDireccion = 1;
    direccionCorrecta = false;
    do {
      f = fila;
      c = columna;
      direccion = direcciones[Math.floor(Math.random() * direcciones.length)];
      switch (direccion) {
        case "a":
          if (fila - palabra.length - 1 >= 0) {
            direccionCorrecta = true;
            if (direccionCorrecta) {
              for (let l = 0; l < palabra.length; l++) {
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) {
                  direccionCorrecta = false;
                }
                f--;
              }
            }
          }
          break;
        case "ad":
          if (
            fila - palabra.length - 1 >= 0 &&
            columna + palabra.length - 1 < tablero.length
          ) {
            direccionCorrecta = true;
            if (direccionCorrecta) {
              for (let l = 0; l < palabra.length; l++) {
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) {
                  direccionCorrecta = false;
                }
                f--;
                c++;
              }
            }
          }
          break;
        case "d":
          if (columna + palabra.length - 1 < tablero.length) {
            direccionCorrecta = true;
            if (direccionCorrecta) {
              for (let l = 0; l < palabra.length; l++) {
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) {
                  direccionCorrecta = false;
                }
                c++;
              }
            }
          }
          break;
        case "bd":
          if (
            columna + palabra.length - 1 < tablero.length &&
            fila + palabra.length - 1 < tablero.length
          ) {
            direccionCorrecta = true;
            if (direccionCorrecta) {
              for (let l = 0; l < palabra.length; l++) {
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) {
                  direccionCorrecta = false;
                }
                f++;
                c++;
              }
            }
          }
          break;
        case "b":
          if (fila + palabra.length - 1 < tablero.length) {
            direccionCorrecta = true;
            if (direccionCorrecta) {
              for (let l = 0; l < palabra.length; l++) {
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) {
                  direccionCorrecta = false;
                }
                f++;
              }
            }
          }
          break;
        case "bi":
          if (
            fila + palabra.length - 1 < tablero.length &&
            columna - palabra.length - 1 >= 0
          ) {
            direccionCorrecta = true;
            if (direccionCorrecta) {
              for (let l = 0; l < palabra.length; l++) {
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) {
                  direccionCorrecta = false;
                }
                f++;
                c--;
              }
            }
          }
          break;
        case "i":
          if (columna - palabra.length - 1 >= 0) {
            direccionCorrecta = true;
            if (direccionCorrecta) {
              for (let l = 0; l < palabra.length; l++) {
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) {
                  direccionCorrecta = false;
                }
                c--;
              }
            }
          }
          break;
        case "ai":
          if (
            columna - palabra.length - 1 >= 0 &&
            fila - palabra.length - 1 >= 0
          ) {
            direccionCorrecta = true;
            if (direccionCorrecta) {
              for (let l = 0; l < palabra.length; l++) {
                if (tablero[f][c] !== null && palabra[l] !== tablero[f][c]) {
                  direccionCorrecta = false;
                }
                f--;
                c--;
              }
            }
          }
          break;

        default:
          break;
      }
      if (!direccionCorrecta) {
        direcciones.splice(direcciones.indexOf(direccion), 1); //para borrar la direccion en curso para que no se repita.
      } else {
        console.log(direccion, fila, columna);
        tablero = mostrarPalabras(fila, columna, direccion, palabra, tablero);
      }

      acumDireccion++;
    } while (!direccionCorrecta && acumDireccion <= 8);
    acumPosicion++;
  } while (
    !direccionCorrecta &&
    acumPosicion <= tablero.length * tablero[0].length
  ); //miestras que la direccion no sea valida y no haya recorrido el numero total de casillas
 }
  return tablero;
}










//Escribe las palabras en el tablero una vez que ha validado la dirección(que entre la palabra y que )
function escribirPalabras(fila, columna, direccion, palabra, tablero) {
  switch (direccion) {
    case "a":
      for (let l = 0; l < palabra.length; l++) {
        tablero[fila][columna] = palabra[l];
        fila--;
      }

      break;
    case "ad":
      for (let l = 0; l < palabra.length; l++) {
        tablero[fila][columna] = palabra[l];
        fila--;
        columna++;
      }
      break;
    case "d":
      for (let l = 0; l < palabra.length; l++) {
        tablero[fila][columna] = palabra[l];
        columna++;
      }
      break;
    case "bd":
      for (let l = 0; l < palabra.length; l++) {
        tablero[fila][columna] = palabra[l];
        fila++;
        columna++;
      }
      break;
    case "b":
      for (let l = 0; l < palabra.length; l++) {
        tablero[fila][columna] = palabra[l];
        fila++;
      }
      break;
    case "bi":
      for (let l = 0; l < palabra.length; l++) {
        tablero[fila][columna] = palabra[l];
        fila++;
        columna--;
      }
      break;
    case "i":
      for (let l = 0; l < palabra.length; l++) {
        tablero[fila][columna] = palabra[l];
        columna--;
      }
      break;
    case "ai":
      for (let l = 0; l < palabra.length; l++) {
        tablero[fila][columna] = palabra[l];
        fila--;
        columna--;
      }
      break;

    default:
      break;
  }
  return tablero;
}

/* ============== PALABRAS EN ROJO==================*/

//Muestra las palabras en rojo para las respuestas
function mostrarPalabras(fila, columna, direccion, palabra, tablero) {
  switch (direccion) {
    case "a":
      for (let l = 0; l < palabra.length; l++) {
        tablero[fila][columna] = "<span style='color:red'>" + palabra[l] + "</span>";
        fila--;
      }

      break;
    case "ad":
      for (let l = 0; l < palabra.length; l++) {
        tablero[fila][columna] = "<span style='color:blue'>" + palabra[l] + "</span>";
        fila--;
        columna++;
      }
      break;
    case "d":
      for (let l = 0; l < palabra.length; l++) {
        tablero[fila][columna] = "<span style='color:green'>" + palabra[l] + "</span>";
        columna++;
      }
      break;
    case "bd":
      for (let l = 0; l < palabra.length; l++) {
        tablero[fila][columna] = "<span style='color:yellow'>" + palabra[l] + "</span>";
        fila++;
        columna++;
      }
      break;
    case "b":
      for (let l = 0; l < palabra.length; l++) {
        tablero[fila][columna] = "<span style='color:orange'>" + palabra[l] + "</span>";
        fila++;
      }
      break;
    case "bi":
      for (let l = 0; l < palabra.length; l++) {
        tablero[fila][columna] = "<span style='color:purple'>" + palabra[l] + "</span>";
        fila++;
        columna--;
      }
      break;
    case "i":
      for (let l = 0; l < palabra.length; l++) {
        tablero[fila][columna] = "<span style='color:cyan'>" + palabra[l] + "</span>";
        columna--;
      }
      break;
    case "ai":
      for (let l = 0; l < palabra.length; l++) {
        tablero[fila][columna] = "<span style='color:pink'>" + palabra[l] + "</span>";
        fila--;
        columna--;
      }
      break;

    default:
      break;
  }
  return tablero;
}


function mostrarTabla(tablero) {
   document.write("<table>");
      for (let i = 0; i < tablero.length; i++) {
        document.write("<tr>")
        for (let j = 0; j < tablero[i].length; j++) {
          document.write("<td>"+ tablero[i][j] +"</td>");
        }
        document.write("</tr>")
      }
   document.write("</table><br><br>")
}

// function mostrarTabla(tablero) {
//    document.write("<table>");
//       for (let i = 0; i < tablero.length; i++) {
//         document.write("<tr>")
//         for (let j = 0; j < tablero[i].length; j++) {
//           document.write("<td>"+ tablero[i][j] +"</td>");
//         }
//         document.write("</tr>")
//       }
//    document.write("</table><br><br>")
// }

//Para crear la tabla de las palabras a buscar
function tablaPalabras(arrayDePalabras){
  const tabla=document.createElement("table");
  const fila=document.createElement("tr");
  arrayDePalabras.forEach(palabra => {
       const celda = document.createElement("td");
        celda.textContent=palabra;
        fila.appendChild(celda);
  });
    tabla.appendChild(fila);
  
   const contenedorPalabras = document.querySelector(".contenedorPalabras");
   contenedorPalabras.appendChild(tabla);// añade la tabla al documento
}



console.log(crearTablero(calcularDimensiones(arrayPalabras)));
let sopaDeLetras = crearTablero(calcularDimensiones(arrayPalabras));
sopaDeLetras = calcularPosicionInicial(arrayPalabras, sopaDeLetras);
console.log(sopaDeLetras);
sopaDeLetras=rellenarTablero(sopaDeLetras);
console.log(sopaDeLetras);
mostrarTabla(sopaDeLetras);


console.log(crearTablero(calcularDimensiones(arrayPalabras2)));
let sopaDeLetras2 = crearTablero(calcularDimensiones(arrayPalabras2));
sopaDeLetras2 = calcularPosicionInicial2(arrayPalabras2, sopaDeLetras2);
console.log(sopaDeLetras2);
sopaDeLetras=rellenarTablero(sopaDeLetras2);
console.log(sopaDeLetras2);
mostrarTabla(sopaDeLetras2);


   /* 
Funcion para guardar los tiempos de juego.
==================*/

function guardarTiempoJuego(nombre, tiempoJuego) {
    //se leen los tiempos que hay con localStorage
    let tiempos = JSON.parse(localStorage.getItem("mejoresTiempos")) || [];
    //se añade el nuevo tiempo asociado  al nombre
    tiempos.push({ 
        nombre: nombre,
        tiempoJuego: tiempoJuego });
    //se ordena de menor a mayor    
    tiempos.sort((a, b) => a.tiempoJuego - b.tiempoJuego);
    //slice es para guardar solo los 3  
    tiempos = tiempos.slice(0, 3); 
    //se gurada en localStorage
    localStorage.setItem("mejoresTiempos", JSON.stringify(tiempos));

    console.log("Tiempo guardado: ", {nombre, tiempoJuego});
}


/* 
Funcion para mostrar la tabla con los mejores tiempos
==================*/

function mostrarPosicion() {

   let tiempos = JSON.parse(localStorage.getItem("mejoresTiempos")) || [];

    // Si hay menos de 3 resultados, se completa con vacíos
    while (tiempos.length < 3) {
        tiempos.push({ nombre: "-", tiempoJuego: "-" });
    }
    
    let html = "<table><tr><th>Posición</th><th>Jugador</th><th>Tiempo</th></tr>";
    //forEach(elemento del array, indice)
    tiempos.slice(0, 3).forEach((r, i) => {
        html += `
            <tr>
                <td>${i + 1}</td>
                <td>${r.nombre}</td>
                <td>${r.tiempoJuego}</td>
            </tr>`;
    });

    html += "</table>";

    document.getElementById("tablaPosicion").innerHTML = html;
}

let tablaPuntos = mostrarPosicion();

/* == Mensaje de aviso por si las cookies están deshabilitadas======*/

if (!navigator.cookieEnabled) {
    alert("Las cookies están deshabilitadas. No se pueden guardar las puntuaciones.");
}

/* ==Si la no hay red sale un mensaje de errror======*/

function estadoRed() {
    const barra = document.getElementById("navegadorOffline");
    if (!navigator.onLine) {
        barra.style.display = "block";
    } else {
        barra.style.display = "none";
    }
}
estadoRed();    
   

/* 
Función reloj
==================*/

// function actualizarHora(){
// const imgNumero = document.createElement("img");
// imgNumero.src = '../images/navidad/image$.png'
// let horaActual = new Date();
// let hora = horaActual.getHours();//coge la hora
// let horaFormateada = hora<10 ? '0'+hora : hora;
// console.log(hora);
// let minutos = horaActual.getMinutes();//coge los minutos actuales
// let minutosFormateados = minutos<10 ? '0'+minutos : minutos;
// console.log(minutos);
// let seg = horaActual.getSeconds();// coge los segundos acutales
// let segFormateados = seg<10 ? '0'+seg : seg;


// console.log(minutos);
// document.getElementById("reloj").innerHTML = horaFormateada + " : "+ minutosFormateados + " : " + segFormateados;

// }

// /* ==============Se se asigna una variable al reloj para que se pueda parar en el caso de necesitarlo==================*/

// let relojPiePagina=setInterval(actualizarHora, 1000);// actualiza cada 1000 milisegundos

//let relojFormateado = horaFormateada + minutosFormateados + segFormateados;