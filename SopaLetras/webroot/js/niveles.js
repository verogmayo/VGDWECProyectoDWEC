import { crearTablero, calcularDimensiones, calcularPosicionInicial,rellenarTablero } from "./crearTablero.js";
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

let nivelActual="facil";

function empezarJuego(nivel,arrayPalabras) {
    nivelActual=nivel;
  console.log('nivel del juego:',nivelActual);
  
let sopaDeLetras = crearTablero(calcularDimensiones(arrayPalabras));
sopaDeLetras = calcularPosicionInicial(arrayPalabras, sopaDeLetras);

sopaDeLetras = rellenarTablero(sopaDeLetras);
console.log("Sopa de letras generada:", sopaDeLetras);
}

const bEmpezarFacil = document.getElementById("bEmpezarFacil");
const bEmpezarMedio = document.getElementById("bEmpezarMedio");
const bEmpezarDificil = document.getElementById("bEmpezarDificil");

bEmpezarFacil.addEventListener("click",()=>{
   empezarJuego("facil",aPalabrasNivelFacil);
});
bEmpezarMedio.addEventListener("click",()=>{
    empezarJuego("medio",aPalabrasNivelMedio);
});
bEmpezarDificil.addEventListener("click",()=>{
    empezarJuego("dificil",aPalabrasNivelDificil);
});

export {nivelActual};