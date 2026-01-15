export { guardarTiempoJuego, mostrarPosicion,esTiempoTop3 };

/* 
Funcion para guardar los tiempos de juego.
==================*/

function guardarTiempoJuego(nombre, tiempoJuego,nivelActual) {
    //se leen los tiempos que hay con localStorage. https://www.w3schools.com/jsref/prop_win_localstorage.asp
    // no se guarda en un json fisico, es un almacenamiento en el navegador.
    //Se lee el objeto con los niveles y si no existe se crea un objeto con los 3 niveles vacios.
    let datosPuntuacion = JSON.parse(localStorage.getItem("mejoresTiempos")) || {facil:[], medio:[],dificil:[]};

    //Se selecciona el array correspondiente al nivel actual
    //si utilizas los corchetes tiene que ser un string
    let tiemposNivel = datosPuntuacion[nivelActual];

    //se añade el nuevo tiempo asociado  al nombre y tomando en cuenta el nivel
    tiemposNivel.push({ 
        nombre: nombre,
        tiempoJuego: tiempoJuego });

    //se ordena de menor a mayor y solo se coge 3 mejores tiempos
    //la funcion callback tiene que cumplir unas condiciones
    tiemposNivel.sort((a, b) => a.tiempoJuego - b.tiempoJuego);
    //slice es para guardar solo los 3 primeros
    datosPuntuacion[nivelActual] = tiemposNivel.slice(0, 3); 
    //se gurada en localStorage. https://www.w3schools.com/js/js_json.asp
    localStorage.setItem("mejoresTiempos", JSON.stringify(datosPuntuacion));

    console.log("Tiempo guardado en ${nivelActual}: ", {nombre, tiempoJuego});
}

function esTiempoTop3(tiempoJuego, nivelActual) {
    let datosPuntuacion = JSON.parse(localStorage.getItem("mejoresTiempos")) || {facil:[], medio:[],dificil:[]};
    //si hay meno de 3 tiempos entonces esta en el top3
    console.log("Nivel recibido:", nivelActual);
console.log("Datos disponibles:", datosPuntuacion);
    if(datosPuntuacion[nivelActual].length<3){
        return true;
    }
    //se comparan los tiempos con el peor tiempo para ver si es mejor o no. saca el valor del 3er puesto
    let peorTiempo=datosPuntuacion[nivelActual][datosPuntuacion[nivelActual].length-1].tiempoJuego;
    //se rotorna true o false si cumple o no la condicion
    return tiempoJuego<peorTiempo;
}


/* 
Funcion para mostrar la tabla con los mejores tiempos
==================*/

function mostrarPosicion(nivelActual) {
    if (!nivelActual) {
        nivelActual = "facil";
    }

    //Se lee el objeto con los niveles y si no existe se crea un objeto con los 3 niveles vacios.
    let datosPuntuacion = JSON.parse(localStorage.getItem("mejoresTiempos")) || {facil:[], medio:[],dificil:[]};
     console.log(" MostrarPosicion: tabla con los datos:", datosPuntuacion[nivelActual]);
    // Si hay menos de 3 resultados, se completa con vacíos

    //Se selecciona el array correspondiente al nivel actual. Cogemos solo los tiempo del nivel
    let tiemposNivel = datosPuntuacion[nivelActual];
  console.log(" MostrarPosicion: tabla con los datos del nivel:", tiemposNivel);
    while (tiemposNivel.length < 3) {
        tiemposNivel.push({ nombre: "-", tiempoJuego: "-" });
    }
    // Crear cabecera de la tabla
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

    // Crear filas de datos
    const top3 = tiemposNivel.slice(0, 3);//solo los tres mejores timpos. Solo 3 filas

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
    if(contenedor){
      //hay que limpiar el contendor porque sino sale varias veces la tabla
     contenedor.innerHTML = "";
     //se pone un titulo a la tabla para saber el nivel
     const tituloTabla = document.createElement("h2");
     tituloTabla.textContent=nivelActual;
      contenedor.appendChild(tituloTabla);
      contenedor.appendChild(tabla);
    
    }
     
    
}


/*  Mensaje de aviso por si las cookies están deshabilitadas---------------*/

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