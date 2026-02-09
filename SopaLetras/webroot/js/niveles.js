import {
  crearTablero,
  calcularDimensiones,
  calcularPosicionInicial,
  rellenarTablero,
  mostrarTabla,
  listaPalabrasATachar,
} from "./crearTablero.js";
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
  facil: { nombre: "nivel Fácil", cantidad: 4, longitud: 5 },
  medio: { nombre: "nivel medio", cantidad: 8, longitud: 6 },
  dificil: { nombre: "nivel dificil", cantidad: 12, longitud: 8 },
  // Niveles en francés
  facilFr: { nombre: "niveau Facile", cantidad: 4, longitud: 5 },
  medioFr: { nombre: "niveau moyen", cantidad: 9, longitud: 6 },
  dificilFr: { nombre: "niveau Difficile", cantidad: 12, longitud: 7 },
};

/**
 * Función para obtener palabras de la API
 * https://random-word-api.herokuapp.com/home : link con la info de la API
 * https://trouve-mot.fr/ : api de las palabras en francés
 */
async function obtenerPalabrasAPI(cantidad, longitud, idioma = "es") {
  try {
    let palabras = [];
    console.log("idioma elegido: " + idioma);

    if (idioma === "fr") {
      // API francesa: https://trouve-mot.fr/api/size/{longitud}/{cantidad}
      const url = `https://trouve-mot.fr/api/size/${longitud}/${cantidad}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error en la API francesa");
      }

      const data = await response.json();
      // La API francesa devuelve un array de objetos: [{name: "avare", categorie: "..."}, ...]
      // se coge solo la propiedad "name", que es la que contiene la palabra
      palabras = data.map((item) => item.name);
    } else {
      // API española: https://random-word-api.herokuapp.com
      const url = `https://random-word-api.herokuapp.com/word?number=${cantidad}&lang=es&length=${longitud}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error en la API española");
      }

      palabras = await response.json();
    }

    // Convertir a mayúsculas
    return palabras.map((palabra) => palabra.toUpperCase());
  } catch (error) {
    // Mensaje de error en consola
    console.error("Error obteniendo palabras de la API:", error);
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

async function empezarJuego(nivel, arrayPalabras = null) {
  nivelActual = nivel;

  // Si no se pasan palabras, se solicitan a la API
  if (arrayPalabras === null) {
    const config = configuracionNiveles[nivel];
    //Elegir el nivel en funcion de si acaba en Fr o no
    const idioma = nivel.endsWith("Fr") ? "fr" : "es";

    console.log(
      `Obteniendo ${config.cantidad} palabras de ${config.longitud} letras en ${idioma === "fr" ? "francés" : "español"}...`,
    );
    arrayPalabras = await obtenerPalabrasAPI(
      config.cantidad,
      config.longitud,
      idioma,
    );

    // Si falla la API, se usan palabras de respaldo
    if (!arrayPalabras || arrayPalabras.length === 0) {
      console.warn("API falló, usando palabras de respaldo");
      arrayPalabras = obtenerPalabrasRespaldo(nivel);
    } else {
      console.log("Palabras obtenidas de la API:", arrayPalabras);
    }
  }

  arrayPalabrasActual = arrayPalabras;
  console.log("nivel del juego:", nivelActual);
  console.log("palabras del juego:", arrayPalabrasActual);
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

//Botones para los nivles en español
const bEmpezarFacil = document.getElementById("bEmpezarFacil");
const bEmpezarMedio = document.getElementById("bEmpezarMedio");
const bEmpezarDificil = document.getElementById("bEmpezarDificil");
//Botones para los niveles en francés
const bEmpezarFacilFr = document.getElementById("bEmpezarFacilFr");
const bEmpezarMedioFr = document.getElementById("bEmpezarMedioFr");
const bEmpezarDificilFr = document.getElementById("bEmpezarDificilFr");

//eventos para empezar von los niveles en español
bEmpezarFacil.addEventListener("click", () => {
  empezarJuego("facil"); // Sin pasar array, se obtendrá de la API
});
bEmpezarMedio.addEventListener("click", () => {
  empezarJuego("medio"); // Sin pasar array, se obtendrá de la API
});
bEmpezarDificil.addEventListener("click", () => {
  empezarJuego("dificil"); // Sin pasar array, se obtendrá de la API
});

//eventos para empezar con los nivles en francés
bEmpezarFacilFr.addEventListener("click", () => {
  empezarJuego("facilFr"); // Sin pasar array, se obtendrá de la API
});
bEmpezarMedioFr.addEventListener("click", () => {
  empezarJuego("medioFr"); // Sin pasar array, se obtendrá de la API
});
bEmpezarDificilFr.addEventListener("click", () => {
  empezarJuego("dificilFr"); // Sin pasar array, se obtendrá de la API
});

//Elegir Idioma
//inputs Idioma
const inputEs = document.getElementById("es");
const inputFr = document.getElementById("fr");
const divBtnsEs = document.getElementById("vistaBtnsEs");
const divBtnsFr = document.getElementById("vistaBtnsFr");

inputEs.addEventListener("click", () => {
  divBtnsEs.classList.add("idiomaVisto");
  divBtnsEs.classList.remove("idiomaOculto");

  divBtnsFr.classList.add("idiomaOculto");
  divBtnsFr.classList.remove("idiomaVisto");
});
inputFr.addEventListener("click", () => {
  divBtnsFr.classList.add("idiomaVisto");
  divBtnsFr.classList.remove("idiomaOculto");

  divBtnsEs.classList.add("idiomaOculto");
  divBtnsEs.classList.remove("idiomaVisto");
});
