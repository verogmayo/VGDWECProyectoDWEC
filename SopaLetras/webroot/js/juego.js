let nivelActual;
let arrayPalabrasActual;

function empezarJuego(nivel, palabras) {
  nivelActual = nivel;
  arrayPalabrasActual = palabras;

  const dimension = calcularDimensiones(palabras.slice().sort((a,b)=>b.length-a.length));
  let tablero = crearTablero(dimension);
  tablero = calcularPosicionInicial(palabras, tablero);
  tablero = rellenarTablero(tablero);

  mostrarTabla(tablero, palabras);
  listaPalabrasATachar(palabras);
}