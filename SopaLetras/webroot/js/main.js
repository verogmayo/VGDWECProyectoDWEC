
// Importar módulos necesarios
import './niveles.js';  // Contiene la eleccion de niveles y los eventos
import './reloj.js';     // Inicia el reloj automáticamente

// El resto de módulos se importan indirectamente:
// - crearTablero.js (importado en niveles.js)
// - cronometro.js (importado en niveles.js)
// - finDeJuego.js (importado en crearTablero.js)
// - tablaPuntuacion.js (importado en niveles.js y finDeJuego.js)

console.log('Ap Sopa de Letras iniciada');
console.log('Selecciona un nivel para comenzar');
