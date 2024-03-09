// controllers/pizzaController.js
const express = require('express');
const router = express.Router();
const Pizza = require('../models/Pizza');

// Ruta para listar todas las pizzas
router.get('/pizzas', (req, res) => {
    // Obtener las pizzas desde la base de datos o un arreglo
    const pizzas = [
        new Pizza('Hawaiana', ['piña', 'jamón'], 10),
        new Pizza('Pepperoni', ['pepperoni', 'queso'], 12),
        // ...
    ];
    res.render('index', { pizzas });
});

// Ruta para ver los detalles de una pizza
router.get('/pizzas/:id', (req, res) => {
    const pizzaId = req.params.id; // Obtener el ID de la pizza
    // Obtener la pizza desde la base de datos o el arreglo
    const pizza = pizzas.find(p => p.id === pizzaId);
    res.render('pizzaDetails', { pizza });
});

module.exports = router;
