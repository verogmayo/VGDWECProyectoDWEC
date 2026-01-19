import { crearTablero, calcularDimensiones, calcularPosicionInicial, rellenarTablero, mostrarTabla, listaPalabrasATachar } from "./crearTablero.js";
import { cronometrar, guardarTiempo, ponerCronoACero } from "./cronometro.js";
import { mostrarPosicion } from "./tablaPuntuacion.js";
export { nivelActual, arrayPalabrasActual, pararCronometro };
const aPalabrasNivelFacil = ["LUNES", "MARTES", "MIERCOLES", "JUEVES"];
//const aPalabrasNivelFacil = ["UNO", "DOS", "TRES", "CUATRO"];

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

let nivelActual = "facil";
let arrayPalabrasActual = aPalabrasNivelFacil;
let crono;

function pararCronometro() {
  clearInterval(crono);
}

function empezarJuego(nivel, arrayPalabras) {
  nivelActual = nivel;
  arrayPalabrasActual = arrayPalabras;
  console.log('nivel del juego:', nivelActual);
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
  mostrarTabla(sopaDeLetras);
  //Se muestra la lista de palabras a buscar
  listaPalabrasATachar(arrayPalabras);
  //Se inicia el cronometro
  crono = setInterval(cronometrar, 1000);
}

const bEmpezarFacil = document.getElementById("bEmpezarFacil");
const bEmpezarMedio = document.getElementById("bEmpezarMedio");
const bEmpezarDificil = document.getElementById("bEmpezarDificil");

bEmpezarFacil.addEventListener("click", () => {
  empezarJuego("facil", aPalabrasNivelFacil);
});
bEmpezarMedio.addEventListener("click", () => {
  empezarJuego("medio", aPalabrasNivelMedio);
});
bEmpezarDificil.addEventListener("click", () => {
  empezarJuego("dificil", aPalabrasNivelDificil);
});

