export {  cronometrar, guardarTiempo, ponerCronoACero};

/* ==cronometro del juego======*/
    let minutos=0;
    let segundos=0;
    const contenedorCronometro = document.getElementById("cronometro");

function cronometrar() {
    segundos++;
    if (segundos === 60) {
        minutos++;
        segundos = 0;
    }
   let minutosFormateados = minutos < 10 ? '0' + minutos : '' + minutos;
    let segFormateados = segundos < 10 ? '0' + segundos : '' + segundos;
    contenedorCronometro.textContent=minutosFormateados+ ":"+segFormateados;
}

//guardo el tiempo en segundos
function guardarTiempo() {
    return minutos *60 + segundos;
}

function ponerCronoACero() {
minutos=0;
segundos=0;
//Para poner el contenido a cero, sino sale a 1 sin pasar por 0
contenedorCronometro.textContent = "00:00";
}

