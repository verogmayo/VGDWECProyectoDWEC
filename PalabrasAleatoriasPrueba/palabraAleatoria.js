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