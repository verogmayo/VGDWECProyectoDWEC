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

let nivelActual="";

function empezarJuego(nivel,arrayPalabras) {
    nivelActual=nivel;

}

const bEmpezarFacil = document.getElementById("bEmpezarFacil");
const bEmpezarMedio = document.getElementById("bEmpezarMedio");
const bEmpezarDificil = document.getElementById("bEmpezarDificil");

bEmpezarFacil.addEventListener("click",(e)=>{
   
});
