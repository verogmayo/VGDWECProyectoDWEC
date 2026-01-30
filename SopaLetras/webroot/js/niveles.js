import { crearTablero, calcularDimensiones, calcularPosicionInicial, rellenarTablero, mostrarTabla, listaPalabrasATachar } from "./crearTablero.js";
import { cronometrar, guardarTiempo, ponerCronoACero } from "./cronometro.js";
import { mostrarPosicion } from "./tablaPuntuacion.js";
export { nivelActual, arrayPalabrasActual, pararCronometro, empezarJuego };

const aPalabrasNivelFacil = ["LUNES", "MARTES", "MIERCOLES", "JUEVES"];

const aPalabrasNivelMedio = [
  "LUNES",
  "MARTES",
  "MIERCOLES",
  "JUEVES",
  "VIERNES",
  "SABADO",
  "DOMINGO",
  "ENERO",
  "FEBRERO",
];

const aPalabrasNivelDificil = [
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

// Configuración de los niveles con palabras obtenidas de la API
const configuracionNiveles = {
  facil: { cantidad: 4, longitud: 5 },
  medio: { cantidad: 8, longitud: 6 },
  dificil: { cantidad: 12, longitud: 8 }
};

/**
 * Función para obtener palabras de la API
 * https://random-word-api.herokuapp.com/home : link con la info de la API
 * https://trouve-mot.fr/
 */
async function obtenerPalabrasAPI(cantidad, longitud) {
  try {
    //obtener palabras de la Api según la cantidad de palabras  y numero de letras
    //const url = `https://random-word-api.herokuapp.com/word?number=${cantidad}&lang=es&length=${longitud}`;
    const url = `https://random-word-api.herokuapp.com/word?number=${cantidad}&lang=fr&length=${longitud}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error en la API');
    }

    const palabras = await response.json();
    // Convertir a mayúsculas
    return palabras.map(palabra => palabra.toUpperCase());
  } catch (error) {
    //Mensaje de error en consola
    console.error('Error obteniendo palabras de la API:', error);
    return null;
  }
}

/**
 * Función para obtener palabras de respaldo según el nivel
 * 
 * Si la Api no responde o hay un error, se usan las palabras de los arrays.
 */
function obtenerPalabrasRespaldo(nivel) {
  switch (nivel) {
    case "facil":
      return aPalabrasNivelFacil;
    case "medio":
      return aPalabrasNivelMedio;
    case "dificil":
      return aPalabrasNivelDificil;
    default:
      return aPalabrasNivelFacil;
  }
}

let nivelActual = "facil";
let arrayPalabrasActual = aPalabrasNivelFacil;
let crono;

function pararCronometro() {
  clearInterval(crono);
}

// function empezarJuego(nivel, arrayPalabras) {
//   nivelActual = nivel;
//   arrayPalabrasActual = arrayPalabras;
//   console.log('nivel del juego:', nivelActual);
//   mostrarPosicion(nivelActual);
//   //Se limpia el tablero anterior si lo hay
//   const contenedorSopaLetras = document.querySelector(".contenedorSopaLetras");
//   if (contenedorSopaLetras.hasChildNodes()) {
//     while (contenedorSopaLetras.firstChild) {
//       contenedorSopaLetras.removeChild(contenedorSopaLetras.firstChild);
//     }
//   }
//   //SE limpia la lista de las palabras
//   const contenedorPalabras = document.querySelector(".contenedorPalabras");
//   if (contenedorPalabras.hasChildNodes()) {
//     while (contenedorPalabras.firstChild) {
//       contenedorPalabras.removeChild(contenedorPalabras.firstChild);
//     }
//   }
//   // se para el cronometro si esta en marcha
//   pararCronometro();
//   ponerCronoACero();
//   let arrayOrdenado = arrayPalabras.slice().sort((a, b) => b.length - a.length);
//   //Se crea la sopa de letras
//   let sopaDeLetras = crearTablero(calcularDimensiones(arrayOrdenado));
//   sopaDeLetras = calcularPosicionInicial(arrayPalabras, sopaDeLetras);
//   sopaDeLetras = rellenarTablero(sopaDeLetras);
//   console.log("Sopa de letras generada:", sopaDeLetras);
//   //Se muestra la sopa de letras
//   mostrarTabla(sopaDeLetras, arrayPalabras, nivelActual, pararCronometro);
//   //Se muestra la lista de palabras a buscar
//   listaPalabrasATachar(arrayPalabras);
//   //Se inicia el cronometro
//   crono = setInterval(cronometrar, 1000);
// }

async function empezarJuego(nivel, arrayPalabras = null) {
  nivelActual = nivel;
  
  // Si no se pasan palabras, se solicitan a la API
  if (arrayPalabras === null) {
    const config = configuracionNiveles[nivel];
    console.log(`Obteniendo ${config.cantidad} palabras de ${config.longitud} letras de la API...`);
    
    arrayPalabras = await obtenerPalabrasAPI(config.cantidad, config.longitud);
    
    // Si falla la API, usar palabras de respaldo
    if (!arrayPalabras || arrayPalabras.length === 0) {
      console.warn('API falló, usando palabras de respaldo');
      arrayPalabras = obtenerPalabrasRespaldo(nivel);
    } else {
      console.log('Palabras obtenidas de la API:', arrayPalabras);
    }
  }
  
  arrayPalabrasActual = arrayPalabras;
  console.log('nivel del juego:', nivelActual);
  console.log('palabras del juego:', arrayPalabrasActual);
  mostrarPosicion(nivelActual);
  //Se limpia el tablero anterior si lo hay
  const contenedorSopaLetras = document.querySelector(".contenedorSopaLetras");
  if (contenedorSopaLetras.hasChildNodes()) {
    while (contenedorSopaLetras.firstChild) {
      contenedorSopaLetras.removeChild(contenedorSopaLetras.firstChild);
    }
  }
  //SE limpia la lista de las palabras
  const contenedorPalabras = document.querySelector(".contenedorPalabras");
  if (contenedorPalabras.hasChildNodes()) {
    while (contenedorPalabras.firstChild) {
      contenedorPalabras.removeChild(contenedorPalabras.firstChild);
    }
  }
  // se para el cronometro si esta en marcha
  pararCronometro();
  ponerCronoACero();
  let arrayOrdenado = arrayPalabras.slice().sort((a, b) => b.length - a.length);
  //Se crea la sopa de letras
  let sopaDeLetras = crearTablero(calcularDimensiones(arrayOrdenado));
  sopaDeLetras = calcularPosicionInicial(arrayPalabras, sopaDeLetras);
  sopaDeLetras = rellenarTablero(sopaDeLetras);
  console.log("Sopa de letras generada:", sopaDeLetras);
  //Se muestra la sopa de letras
  mostrarTabla(sopaDeLetras, arrayPalabras, nivelActual, pararCronometro);
  //Se muestra la lista de palabras a buscar
  listaPalabrasATachar(arrayPalabras);
  //Se inicia el cronometro
  crono = setInterval(cronometrar, 1000);
}


const bEmpezarFacil = document.getElementById("bEmpezarFacil");
const bEmpezarMedio = document.getElementById("bEmpezarMedio");
const bEmpezarDificil = document.getElementById("bEmpezarDificil");

// bEmpezarFacil.addEventListener("click", () => {
//   empezarJuego("facil", aPalabrasNivelFacil);
// });
// bEmpezarMedio.addEventListener("click", () => {
//   empezarJuego("medio", aPalabrasNivelMedio);
// });
// bEmpezarDificil.addEventListener("click", () => {
//   empezarJuego("dificil", aPalabrasNivelDificil);
// });

bEmpezarFacil.addEventListener("click", () => {
  empezarJuego("facil"); // Sin pasar array, se obtendrá de la API
});
bEmpezarMedio.addEventListener("click", () => {
  empezarJuego("medio"); // Sin pasar array, se obtendrá de la API
});
bEmpezarDificil.addEventListener("click", () => {
  empezarJuego("dificil"); // Sin pasar array, se obtendrá de la API
});