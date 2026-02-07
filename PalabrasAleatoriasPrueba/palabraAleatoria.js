const urlPalabras = 'https://random-word-api.herokuapp.com/word?number=10&lang=es&length=5';
const listaPalabras = document.querySelector('#listaPalabras');
 
//  fetch(urlPalabras)
//         //.then(response =>console.log(response));
//         .then(response => response.json())
//         //  .then(datos=> console.log(datos));
//         .then((data) => {
//             data.results.forEach(palabra => {
//             //div usuario. Contenedor de los demás divs
//             const pPalabra = document.createElement("p");
//             pPalabra.textContent = palabra
//             // divUsuario.classList.add("usuario");
//             // //div para el nombre
//             // const divNombre = document.createElement("div");
//             // divNombre.textContent="Nombre: "+usuario.name.first + " "+usuario.name.last;
//             // divNombre.classList.add("nombre");
//             // //div para la foto
//             // const divFoto = document.createElement("div");
//             // divFoto.classList.add("fotoUsuario");
//             // const img = document.createElement("img");
//             // img.src=usuario.picture.large;
//             // divFoto.append(img);
//             // //div para el pais
//             // const divPais = document.createElement("div");
//             // divPais.textContent="Pais: "+usuario.location.country;
//             // //div para el email
//             // const divEmail = document.createElement("div");
//             // divEmail.textContent="Email: "+usuario.email;
//             // //se crean los divs del usuario
//             // divUsuario.append(divNombre, divFoto, divPais, divEmail);
//             // //se crea el contenedor de usuarios
//             listaPalabras.append(pPalabra);


//     });
//     console.log(listaPalabras);
// })
// .catch(error => console.error(error));

 fetch(urlPalabras)
        // .then(response =>console.log(response))
        .then(response => response.json())
        //  .then(datos=> console.log(datos));
        .then((datos) => {
            datos.forEach(palabra => {
                // console.log(palabra);
                const pPalabra = document.createElement("p");
                pPalabra.textContent = palabra;
                console.log(listaPalabras);
                listaPalabras.append(pPalabra);
            });

        });
//            fetch(urlPalabras)
//   .then(r => r.json())
//   .then(datos => {
//     usarDatos(datos);
//   });

// function usarDatos(datos) {
//   console.log(datos);
// }
    
//     console.log(listaPalabras);
// })
// .catch(error => console.error(error));

// async function fetchPalabrasPorLongitud(longitud, cantidad = 10) {
//   const url = `https://random-words-api.kushcreates.com/api?language=es&length=${longitud}&words=${cantidad}&type=uppercase`;
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error(`Error al cargar palabras de longitud ${longitud}`);
//   }
//   const datos = await response.json();
//   return datos.map(obj => obj.word);
// }

// async function cargarPalabrasAPI() {
//   const palabras4 = await fetchPalabrasPorLongitud(4, 10);
//   const palabras6 = await fetchPalabrasPorLongitud(6, 10);
//   const palabras8 = await fetchPalabrasPorLongitud(8, 10);
//   return { facil: palabras4, medio: palabras6, dificil: palabras8 };
// }

// async function iniciarConPalabrasAPI() {
//   try {
//     const nivelesPalabras = await cargarPalabrasAPI();
//     bEmpezarFacil.addEventListener("click", () => {
//       empezarJuego("facil", nivelesPalabras.facil);
//     });
//     bEmpezarMedio.addEventListener("click", () => {
//       empezarJuego("medio", nivelesPalabras.medio);
//     });
//     bEmpezarDificil.addEventListener("click", () => {
//       empezarJuego("dificil", nivelesPalabras.dificil);
//     });
//   } catch (error) {
//     console.error("Error cargando palabras API:", error);
//   }
// }

// iniciarConPalabrasAPI();

async function fetchPalabrasNivel(nivel) {
  let longitud;

  if (nivel === "facil") longitud = 4;
  else if (nivel === "medio") longitud = 6;
  else if (nivel === "dificil") longitud = 8;

  const url = `https://random-words-api.kushcreates.com/api?language=es&length=${longitud}&words=10&type=uppercase`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Error API palabras");

  const datos = await response.json();
  return datos.map(obj => obj.word);
}

bEmpezarFacil.addEventListener("click", async () => {
  const palabras = await fetchPalabrasNivel("facil");
  empezarJuego("facil", palabras);
});

bEmpezarMedio.addEventListener("click", async () => {
  const palabras = await fetchPalabrasNivel("medio");
  empezarJuego("medio", palabras);
});

bEmpezarDificil.addEventListener("click", async () => {
  const palabras = await fetchPalabrasNivel("dificil");
  empezarJuego("dificil", palabras);
});


//Contenerdor de las palabras
//<div id="estadoJuego" class="estadoJuego"></div>
//funcion para mostrar las palabras en el contenedor
const estadoJuego = document.getElementById("estadoJuego");

function mostrarEstado(mensaje) {
  estadoJuego.textContent = mensaje;
  estadoJuego.style.display = "block";
}

function ocultarEstado() {
  estadoJuego.textContent = "";
  estadoJuego.style.display = "none";
}

//Fetch con feedback
const cacheNiveles = {};

async function fetchPalabrasNivel(nivel) {
  if (cacheNiveles[nivel]) return cacheNiveles[nivel];

  let longitud = nivel === "facil" ? 4 : nivel === "medio" ? 6 : 8;

  const url = `https://random-words-api.kushcreates.com/api?language=es&length=${longitud}&words=10&type=uppercase`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Error cargando palabras");

  const datos = await response.json();
  const palabras = datos.map(obj => obj.word);

  cacheNiveles[nivel] = palabras;
  return palabras;
}
//Botonmes de loading
async function manejarInicio(nivel) {
  try {
    mostrarEstado("Cargando palabras… ⏳");

    const palabras = await fetchPalabrasNivel(nivel);

    ocultarEstado();
    empezarJuego(nivel, palabras);

  } catch (error) {
    mostrarEstado("Error al cargar palabras ❌");
    console.error(error);
  }
}

bEmpezarFacil.addEventListener("click", () => manejarInicio("facil"));
bEmpezarMedio.addEventListener("click", () => manejarInicio("medio"));
bEmpezarDificil.addEventListener("click", () => manejarInicio("dificil"));
//css opcional
// .estadoJuego {
//   display: none;
//   font-weight: bold;
//   margin: 10px 0;
//   color: #333;
// }
