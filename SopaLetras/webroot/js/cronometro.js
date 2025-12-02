export {  cronometrar};
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
// let cronometro = setInterval(cronometrar, 1000);
// let pararCronometro = function() {
//     clearInterval(cronometro);

// }
//guardo el tiempo en segundos
function guardarTiempo(params) {
    return minutos *60 + segundos;
}

