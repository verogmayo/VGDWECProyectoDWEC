

/*
Reloj digital*/
function actualizarHora() {

    let horaActual = new Date();
    let hora = horaActual.getHours();
    let horaFormateada = hora < 10 ? '0' + hora : '' + hora;

    let minutos = horaActual.getMinutes();
    let minutosFormateados = minutos < 10 ? '0' + minutos : '' + minutos;

    let seg = horaActual.getSeconds();
    let segFormateados = seg < 10 ? '0' + seg : '' + seg;

    let relojFormateado = horaFormateada + minutosFormateados + segFormateados;

    const contenedor = document.getElementById("reloj");
    //se borra el contenido anterior, para insertar el nuevo.
    contenedor.innerHTML = "";
    //se asocian las imagenes a los numeros del reloj
    for (let i = 0; i < relojFormateado.length; i++) { 

        let numero = relojFormateado[i];

        let img = document.createElement("img");
        img.src = `webroot/images/colores/image${numero}.png`;  
        img.className = "num";
        contenedor.appendChild(img);

        if (i === 1 || i === 3) {
            let puntos = document.createElement("span");
            puntos.textContent = " : ";
            contenedor.appendChild(puntos);
        }
    }
}




/* ==============Se se asigna una variable al reloj para que se pueda parar en el caso de necesitarlo==================*/

let relojPiePagina=setInterval(actualizarHora, 1000);// actualiza cada 1000 milisegundos


















/* ==links de referencia======*/
/*
Letras personalizadas
https://es.textstudio.com/logo/letras-de-colores-editables-en-linea-635

imagenes
https://www.cleanpng.com/png-numerical-digit-number-christmas-clip-art-christma-5557946/
https://photoshop-kopona.com/58220-christmas-numbers-clipart-psd-free-clipart-psd-free-download-transparent-background-.html (avoir)
https://www.pikpng.com/
https://www.clipartmax.com/so/number/
https://www.pngegg.com/en/png-icopj
*/