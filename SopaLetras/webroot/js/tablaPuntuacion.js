export { guardarTiempoJuego, mostrarPosicion };



/* 
Funcion para guardar los tiempos de juego.
==================*/

function guardarTiempoJuego(nombre, tiempoJuego) {
    //se leen los tiempos que hay con localStorage. https://www.w3schools.com/jsref/prop_win_localstorage.asp
    // no se guarda en un json fisico, es un almacenamiento en el navegador.
    let tiempos = JSON.parse(localStorage.getItem("mejoresTiempos")) || [];
    //se añade el nuevo tiempo asociado  al nombre
    tiempos.push({ 
        nombre: nombre,
        tiempoJuego: tiempoJuego });
    //se ordena de menor a mayor    
    tiempos.sort((a, b) => a.tiempoJuego - b.tiempoJuego);
    //slice es para guardar solo los 3 primeros
    tiempos = tiempos.slice(0, 3); 
    //se gurada en localStorage. https://www.w3schools.com/js/js_json.asp
    localStorage.setItem("mejoresTiempos", JSON.stringify(tiempos));

    console.log("Tiempo guardado: ", {nombre, tiempoJuego});
}


/* 
Funcion para mostrar la tabla con los mejores tiempos
==================*/

function mostrarPosicion() {

   let tiempos = JSON.parse(localStorage.getItem("mejoresTiempos")) || [];

    // Si hay menos de 3 resultados, se completa con vacíos
    while (tiempos.length < 3) {
        tiempos.push({ nombre: "-", tiempoJuego: "-" });
    }

    const tabla = document.createElement("table");
    const filaCabecera = document.createElement("tr");
    const thPosicion = document.createElement("th");
    thPosicion.textContent = "Posición";

    const thJugador = document.createElement("th");
    thJugador.textContent = "Jugador";

    const thTiempo = document.createElement("th");
    thTiempo.textContent = "Tiempo";

    filaCabecera.appendChild(thPosicion);
    filaCabecera.appendChild(thJugador);
    filaCabecera.appendChild(thTiempo);

    tabla.appendChild(filaCabecera);

    // Filas de datos
    const top3 = tiempos.slice(0, 3);//solo los tres mejores timpos. Solo 3 filas

    for (let i = 0; i < top3.length; i++) {

        const fila = document.createElement("tr");

        const celdaPos = document.createElement("td");
        celdaPos.textContent = i + 1;

        const celdaJug = document.createElement("td");
        celdaJug.textContent = top3[i].nombre;

        const celdaTiempo = document.createElement("td");
        celdaTiempo.textContent = top3[i].tiempoJuego;

        fila.appendChild(celdaPos);
        fila.appendChild(celdaJug);
        fila.appendChild(celdaTiempo);

        tabla.appendChild(fila);
    }

    const contenedor = document.getElementById("tablaPosicion");
    contenedor.appendChild(tabla);
}

let tablaPuntos = mostrarPosicion();

/*  Mensaje de aviso por si las cookies están deshabilitadas*/

if (!navigator.cookieEnabled) {
    alert("Las cookies están deshabilitadas. No se pueden guardar las puntuaciones.");
}

/* Si la no hay red sale un mensaje de errror*/

function estadoRed() {
    const barra = document.getElementById("navegadorOffline");
    if (!navigator.onLine) {
        barra.style.display = "block";
    } else {
        barra.style.display = "none";
    }
}
estadoRed();