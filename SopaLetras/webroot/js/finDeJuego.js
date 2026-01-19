import { guardarTiempoJuego, mostrarPosicion, esTiempoTop3 } from "./tablaPuntuacion.js";
import { guardarTiempo } from "./cronometro.js";
import{nivelActual, pararCronometro} from "./niveles.js";
export {findeJuego}
//funcion para mostrar el div de fin de juego
mostrarPosicion(nivelActual);
function mostrarDivFinDeJuego(tiempoJuego) {
  let divFinDeJuego=document.getElementById("finDeJuego");
  let msjTop3=document.getElementById("inputTop3");
  let msjNormal=document.getElementById("msjNormal");
  let inputNombre=document.getElementById("inputNombre")
  //se comprueba si el tiempo está en el top3
  let esTop3=esTiempoTop3(tiempoJuego, nivelActual);
  console.log("es top 3? :",esTop3);
  if (esTop3) {
    divFinDeJuego.classList.remove("divOculto");
    // divFinDeJuego.style.display = "block";
    msjTop3.classList.remove("oculto");
    msjNormal.classList.add("oculto");
    inputNombre.value="";//se limpia el input
  }else{
    divFinDeJuego.classList.remove("divOculto");
    //  divFinDeJuego.style.display = "block";
    msjTop3.classList.add("oculto");
    msjNormal.classList.remove("oculto");
  }
}


//funcion para enviar el nombre
function enviarNombre(tiempoJuego) {
  let inputNombre=document.getElementById("inputNombre");
  let nombre=inputNombre.value;
  //se guarda el tiempo y el nombre
  guardarTiempoJuego(nombre,tiempoJuego, nivelActual);

  //se cierra el div
  cerrarDiv();

  //se muestra la tabla
  mostrarPosicion(nivelActual);
}
//funcion para cerrar el div
function cerrarDiv() {
  let divFinDeJuego=document.getElementById("finDeJuego");
  // divFinDeJuego.style.display="none";
  divFinDeJuego.classList.add("divOculto");
}

   

function findeJuego() {
  //se para el cronometro
  pararCronometro();
  
  //se guarda el tiempo en segundos
  const tiempoJuego = guardarTiempo();

  console.log("Tiempo de juego en segundos: ", tiempoJuego);
  //SE muestra el mensaje de fin de juego, el texto dependerá de la puntuacion.
   mostrarDivFinDeJuego(tiempoJuego);

  console.log("Datos guardados en localStorage");
  console.log("LocalStorage actual:", localStorage.getItem("mejoresTiempos"));
}

//let tiempoJuegoActual=0;
let btnGuardar=document.getElementById("btnGuardarTiempo");
btnGuardar.addEventListener("click", ()=>{
  let tiempoJuego=guardarTiempo();
  enviarNombre(tiempoJuego);
});

//para cerrar el div de fin de juego
let btnCerrar=document.getElementById("btnCerrar");
  btnCerrar.addEventListener("click", cerrarDiv);