var arrayPalabras = [
 "LUNES",
  // "MARTES",
  // "MIERCOLES",
  // "JUEVES",
  // "VIERNES",
  // "SABADO",
  // "DOMINGO",
  // "ENERO",
  // "FEBRERO",
  // "MARZO",
  // "ABRIL",
  // "MAYO",
  // "JUNIO",
  // "JULIO",
  // "AGOSTO",
  // "SEPTIEMBRE",
  // "OCTUBRE",
  // "NOVIEMBRE",
  // "DICIEMBRE"
];

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
  if (Math.floor(Math.sqrt(num_letras * 2)) + 1 > lista[0].length + 2) {
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

// function mostrarTabla(tablero) {
//    const tabla=document.createElement("table");
//       for (let i = 0; i < tablero.length; i++) {
//         const fila=document.createElement("tr")
//         for (let j = 0; j < tablero[i].length; j++) {
//           const celda=document.createElement("td");
//           celda.textContent=tablero[i][j] ;
//           fila.appendChild(celda); // añade las celdas dentro de las filas.
          
//         }
//         tabla.appendChild(fila);//añade las filas dentro de la tabla
//       }
//       const contenedorSopaLetras = document.querySelector(".contenedorSopaLetras");
//    contenedorSopaLetras.appendChild(tabla);// añade la tabla al documento
// }

function mostrarTabla(tablero) {
   const tabla=document.createElement("table");
      for (let i = 0; i < tablero.length; i++) {
        const fila=document.createElement("tr")
        for (let j = 0; j < tablero[i].length; j++) {
          const celda=document.createElement("td");
          celda.textContent=tablero[i][j] ;

 
          fila.appendChild(celda); // añade las celdas dentro de las filas.
        }
        tabla.appendChild(fila);//añade las filas dentro de la tabla
      }
      const contenedorSopaLetras = document.querySelector(".contenedorSopaLetras");
   contenedorSopaLetras.appendChild(tabla);// añade la tabla al documento

 tabla.addEventListener("click", selecionarCeldas);
}


 let primeraCelda=null;
function selecionarCeldas(e) {
  //Solamente se puede selecionar
    // if(e.target.tagName === "TD"){
    // e.target.classList.add("seleccionado");
    // }
    if (primeraCelda==null){
      //Se puede selcionar y deselecionar
      // if(e.target.tagName === "TD"){
      //   e.target.classList.toggle("seleccionado");
      //con dir se ven todas las propiedades.
      //   console.dir(e.target);
      // }
      primeraCelda = e.target;
      primeraCelda.classList.add("seleccionado");
    }else{
      const celda2 = e.target;
     var  palabraSelecionada = comprobarSeleccion(primeraCelda,celda2,e.currentTarget);
     var reversePalabra = palabraSelecionada.split("").reverse().join("");
     console.log(reversePalabra);
    comprobarPalabra(palabraSelecionada,reversePalabra,arrayPalabras);
    console.log(comprobarPalabra(palabraSelecionada,reversePalabra,arrayPalabras))
      primeraCelda=null;
    }
    
}

function comprobarSeleccion(primCelda, cel2, tbl) {
  //la fila tr hace refencia al padre (parentElement). Fila de la primera celda
    const fila = primCelda.parentElement.rowIndex;
    console.log(fila);
    //columna de la primera celda
    const columna = primCelda.cellIndex;
    console.log(columna);
    //fila de la segunda celda
    const fila2 =cel2.parentElement.rowIndex;
    console.log(fila2);

    // columna de la segunda celda
    const columna2 = cel2.cellIndex;
     console.log(columna2);
    // Diferencia entre coordenadas, filas y columnas
    let difFilas = fila2-fila;
    let difCols = columna2 - columna;
    //Si las diferencia entre las filas en 0 es horizontal y si la divisiòn entre la  diferencia de las filas es positivo va hacía abajo y si es negativo, va hacia arriba. y lo mismo pra las columnas(derecha o izquierda) 
    let pasoFilas = difFilas === 0 ? 0 : difFilas / Math.abs(difFilas);
    let pasoCols = difCols === 0 ? 0 : difCols / Math.abs(difCols);

    let arrayCeldas = [];
    let arrayLetras = [];
    let filaActual = fila;
    let colActual = columna;
    if(!(difFilas == 0 || difCols == 0 || Math.abs(difFilas) == Math.abs(difCols))){
      console.log("seleccion no valida")
    } else {
      while (filaActual !== fila2 + pasoFilas || colActual !== columna2 + pasoCols ){
        let celdaActual = tbl.rows[filaActual].cells[colActual];
        let letraActual = celdaActual.textContent;
        arrayLetras.push(letraActual);
        arrayCeldas.push(celdaActual);
        filaActual = filaActual + pasoFilas;
        colActual = colActual + pasoCols;
        console.log(letraActual);
        
      }
    }
arrayCeldas.forEach(clase =>clase.classList.add("seleccionado"));
let letrasSeleccionadas = arrayLetras.join("");
console.log(letrasSeleccionadas);
return letrasSeleccionadas;
}





function comprobarPalabra(palSelec,revPalb,aPalabras) {
    
  if (aPalabras.includes(palSelec) || aPalabras.includes(revPalb)){
   let seleccionado=document.querySelectorAll(".seleccionado")
    
    for(let casilla of seleccionado ){
      casilla.classList.remove("seleccionado");
      casilla.classList.add("correcto");
    }
    tacharPalabras(palSelec,revPalb,aPalabras);
  }else{
      for(let casilla of document.querySelectorAll(".seleccionado")){
      casilla.classList.remove("seleccionado");
      casilla.classList.add("incorrecto");
    }
    setTimeout(()=>{
       for(let casilla of document.querySelectorAll(".incorrecto")){
      casilla.classList.remove("incorrecto");
    }
    },1000)
    }
    
}


console.log(crearTablero(calcularDimensiones(arrayPalabras)));
let sopaDeLetras = crearTablero(calcularDimensiones(arrayPalabras));
sopaDeLetras = calcularPosicionInicial(arrayPalabras, sopaDeLetras);
console.log(sopaDeLetras);
sopaDeLetras=rellenarTablero(sopaDeLetras);
console.log(sopaDeLetras);
// mostrarTabla(sopaDeLetras);


//importo el cronometro del fichero cronometro.js
import { cronometrar } from "./cronometro.js";

// let cronometro = setInterval(cronometrar, 1000);
//Al hacer clic en el boton empezar aparece la tabla 
// y se esconde el botón.
var crono;
let botonComenzar = document.getElementById("bEmpezar");
botonComenzar.addEventListener("click", (e)=>{
mostrarTabla(sopaDeLetras);
botonComenzar.classList.add("desaparecido");
 crono = setInterval(cronometrar,1000);
} );
//para parar el cronometro

function pararCronometro() {
    clearInterval(crono);  
}
import { guardarTiempoJuego,mostrarPosicion } from "./tablaPuntuacion.js";
function findeJuego() {
pararCronometro();
const nombre=prompt("Has terminado el juego! Introduce tu nombre:");
const tiempoJuego=guardarTiempoJuego();
console.log("Tiempo de juego en segundos: ", tiempoJuego);
guardarTiempoJuego(nombre, tiempoJuego);
mostrarPosicion();  
}
//Para crear la tabla de las palabras a buscar
function listaPalabrasATachar(arrayDePalabras){
  const contenedorPalabras=document.querySelector(".contenedorPalabras");
  //bucle para crear un div por palabra
  arrayDePalabras.forEach(palabra => {
  const caja=document.createElement("div");
  caja.classList.add("divPalabrasATachar");
  caja.textContent=palabra;
  contenedorPalabras.appendChild(caja);
});
}
listaPalabrasATachar(arrayPalabras);

//Función para tachar las palabras encontradas en la lista de palabras a buscar
function tacharPalabras(palSelec, revPalb, aPalabras) {
  let palabraOk=null;
  
  if (aPalabras.includes(palSelec) ){ 
     palabraOk=palSelec ;
  } else if (aPalabras.includes(revPalb)){
     palabraOk=revPalb;
  }
  var aListaPalabras=document.getElementsByClassName("divPalabrasATachar");
  
  //cuando encuentre la palabra le cambia la clase
  for (let i = 0; i < aListaPalabras.length; i++) {
    if (aListaPalabras[i].textContent===palabraOk){
    aListaPalabras[i].classList.add("tachado");
      console.log(i);
  } 
  
    // if (aListaPalabras.length===0) {
    //   findeJuego();
    // }
  }
  console.log("num Tachados:"+contarTachados());
  console.log(porTachar(aListaPalabras));
  let palabrasPorEliminar = porTachar(aListaPalabras);
  if (palabrasPorEliminar===0) {
    findeJuego();
  }
}
function contarTachados() {
  let aTachados=document.getElementsByClassName("tachado")
  let numTachados=aTachados.length;
  console.log("Tachados"+aTachados.length);
  return numTachados;
}
function porTachar(listaPalabras) {
  let quedanPorTachar=listaPalabras.length-contarTachados();
  console.log("quedan: "+quedanPorTachar)
  return quedanPorTachar;
}
