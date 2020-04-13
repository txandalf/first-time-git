const express = require('express'); // Facilita la creación del servidor y su gestión
const app = express();  // Nos permitira abrir el servidor
const path = require('path');   // Nos facilita el trabajo de rutas para linux y windows

// settings
app.set('port', 3000);
app.engine('html', require('ejs').renderFile);  // Cargaremos los .html con ejs
app.set('view engine', 'ejs'); // Especificamos el motor de plantillas que vamos a usar
app.set('views', path.join(__dirname, 'views'))


// server listening
app.listen(app.get('port'), () => {
    console.log('Escuchando en el puerto ', app.get('port'));
});

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public'))); // Con esto podemos solicitar cualquier archivo
                                                        // dentro de public. Imagenes, videos, fuentes, ....


