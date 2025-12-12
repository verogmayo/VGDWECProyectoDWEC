

# Objeto `window`

El objeto `window` representa la **ventana del navegador**.
 [Referencia en W3Schools](https://www.w3schools.com/jsref/obj_window.asp)

Las propiedades de `window` componen el **BOM (Browser Object Model)**.

---

##  `document`

Todo lo que cuelga del documento pertenece al **DOM (Document Object Model)**, que representa todas las partes del HTML.

* `activeElement`:	Retorna el elemento seleccionado en el documento
* `addEventListener()`: adjunta un controlador de eventos a un documento
* `adoptNode()`: adopta un nodo de otro documento.
* `baseURI`: devuelve la URI base del documento.( es de solo lectura)
* `body`: establece o devuelve el elemento <body> de un documento.
* `characterSet`: devuelve la codificación de caracteres de un documento.
* `close()`: cierra una ventana abierta previamente con el método  open().
* `cookie`: establece o devuelve una lista de pares clave=valor separados por punto y coma (cookies de documento).
* `createAttribute()`: crea un atributo y devuelve el atributo como un objeto Attr
* `createComment()`: crea un comentario y devuelve el nodo de comentario. createDocumentFragment(): crea un nodo fuera de la pantalla. El nodo fuera de pantalla se puede utilizar para crear un nuevo fragmento de documento que se puede insertar en cualquier documento. Se puede utilizar para extraer partes de un documento, cambiar, agregar o eliminar parte del contenido e insertarlo nuevamente en el documento.
* `createElement()`: crea un nodo de elemento.
* `createEvent()`: crea un objeto de evento.
* `createTextNode()`: crea un nodo de texto.
* `defaultView`: devuelve el objeto de ventana del documento.
* `designMode`: establece o devuelve si el documento es editable. 
* `doctype`: devuelve el tipo de documento de un documento (como un objeto DocumentType),  retorna nullsi el documento no tiene tipo de documento. devuelve el nombre del tipo de documento.( es de solo lectura)
* `documentElement`: devuelve un elemento de un documento (como un objeto Elemento). Para los documentos HTML, el objeto devuelto es el elemento <html> .
* `documentURI`: establece o devuelve la ubicación de un documento. retorna nullsi el documento fue creado en la memoria.
* `domain`: devuelve el nombre de dominio del servidor (desde donde se cargó el documento). retorna nullsi el documento fue creado en la memoria.
* `embeds`: devuelve una colección de todos los elementos <embed> del documento. (es de solo lectura)
* `forms`: devuelve una colección de todos los elementos <embed> del documento. devuelve una HTMLCollection .( es de solo lectura).
* `getElementById()`: returns an element with a specified value. retorna nullsi el elemento no existe. es uno de los más comunes en el DOM HTML. Se utiliza prácticamente siempre que se desea leer o editar un elemento HTML.
* `getElementsByClassName()`: devuelve una colección de elementos con un nombre de clase especificado. devuelve una HTMLCollection .
* `getElementsByName()`: devuelve una colección de elementos con un nombre especificado. devuelve una NodeList activa . 
* `getElementsByTagName()`: devuelve una colección de todos los elementos con un nombre de etiqueta especificado. devuelve una HTMLCollection . (es de solo lectura)
* `hasFocus()`: devuelve un truesi el documento (o cualquier elemento del documento) tiene el foco. 
* `head`: devuelve el elemento <head> del documento.
* `images`:	devuelve una colección de todos los elementos <img> de un documento. devuelve una HTMLCollection . (es de solo lectura)
* `implementation`: devuelve el objeto DOMimplementation que maneja el documento.
* `importNode()`: importa un nodo de otro documento. Con el segundo parámetro establecido en true, también se importarán los nodos secundarios.
* `lastModified`: devuelve la fecha y hora en que se modificó el documento por última vez.( es de solo lectura).
* `links`: devuelve una colección de todos los enlaces del documento. devuelve una HTMLCollection .(es de solo lectura)
* `normalize()`: elimina los nodos de texto vacíos y une los nodos de texto adyacentes.
* `open()`: abre un documento para escribir.
* `querySelector()`:	devuelve el primer elemento que coincide con un selector CSS.
* `querySelectorAll()`: Devulve todos loelementos que coinciden con el selctor en el documento.
* `readyState`: Retorna el estado de carga del documentos en curso.
* `referrer`: devuelve la URL del documento que cargó el documento actual.
* `removeEventListener()`: elimina un controlador de eventos de un documento efectuado con addEventListener().
* `scripts`: retorna la colectcion de todos los elementos  scripts del documento
* `title`: establece o retorna el titulo del documento
* `URL`: devuelve la URL completa del docuemento.
* `write()`: escribe directamente en el documento.
* `writeln()`: similar a write().



---

##  `history`

Historial de la página (lista de las URLs visitadas).

### Métodos

* `back()`: vuelve atrás en el historial.
* `forward()`: avanza a la página siguiente del historial.
* `go(n)`: avanza o retrocede en el historial según el número positivo o negativo indicado como parámetro.

### Propiedad

* `length`: retorna el número de URLs en el historial.

---

##  `location`

Contiene información sobre la URL actual.

### Propiedades

* `hash`: establece o devuelve la parte de anclaje de una URL, incluido el signo numeral (`#`).
* `host`: contiene el host (nombre de dominio + puerto).
* `hostname`: contiene solo el dominio de la URL.
* `href`: retorna la URL completa.
* `origin`: devuelve el protocolo, dominio y puerto.
* `pathname`: establece o devuelve la ruta de la URL (página).
* `port`: establece o devuelve el número de puerto.
* `protocol`: establece o devuelve el protocolo de la URL actual, incluidos los dos puntos (`:`).
* `search`: devuelve la cadena de consulta (query string), incluido el signo de interrogación (`?`).

### Métodos

* `assign(url)`: carga un nuevo documento indicado en el parámetro.
* `reload()`: recarga el documento actual.
* `replace(url)`: reemplaza el documento actual por uno nuevo.

---

##  `screen`

Información sobre la pantalla en la que se ejecuta la aplicación.

### Propiedades

* `availHeight`: altura disponible de la pantalla (sin la barra de tareas, etc.).
* `availWidth`: ancho disponible de la pantalla (sin la barra de tareas, etc.).
* `colorDepth`: profundidad de color en bits por píxel (solo lectura).
* `height`: altura total de la pantalla en píxeles (solo lectura).
* `pixelDepth`: profundidad de color en bits por píxel (solo lectura).
* `width`: ancho total de la pantalla en píxeles (solo lectura).

---

## `orientation`

Indica si la pantalla está en posición **vertical u horizontal**.
 **Obsoleto.**

---

##  `navigator`

Contiene datos del navegador.

### Propiedades

* `cookieEnabled`: devuelve `true` si las cookies están habilitadas.
* `geolocation`: devuelve un objeto de geolocalización para localizar al usuario (solo en HTTPS y con permiso del usuario).
* `language`: idioma del navegador (solo lectura).
* `onLine`: `true` si el navegador está en línea, `false` si no (solo lectura).
* `userAgent`: devuelve el encabezado *User-Agent* enviado por el navegador (solo lectura).

---

##  `console`

Hace referencia a la **consola del navegador**.

### Métodos

* `assert()`: escribe un mensaje de error si la expresión es falsa.
* `clear()`: limpia la consola.
* `count()`: cuenta las veces que se llama a `console.count()`.
* `error()`: escribe un mensaje de error.
* `group()`: inicia un grupo de mensajes.
* `groupCollapsed()`: inicia un grupo de mensajes colapsado.
* `groupEnd()`: finaliza el grupo actual.
* `info()`: escribe un mensaje informativo.
* `log()`: escribe mensajes generales.
* `table()`: muestra datos en formato tabla.
* `time()`: inicia un temporizador.
* `timeEnd()`: finaliza el temporizador y muestra el resultado.
* `trace()`: muestra el seguimiento de ejecución hasta un punto determinado.
* `warn()`: muestra una advertencia en la consola.


