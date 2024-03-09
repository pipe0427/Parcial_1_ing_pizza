// app.js
const express = require('express');
const app = express();
const pizzaController = require('./src/controllers/PizzaController');

// Configuración de la aplicación
app.set('view engine', 'ejs'); // Utiliza EJS como motor de plantillas
app.use(express.static('public')); // Carpeta para archivos estáticos (CSS, imágenes, etc.)

// Rutas manejadas por el controlador
app.use('/', pizzaController); // Todas las rutas relacionadas con pizzas serán manejadas por el controlador

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
