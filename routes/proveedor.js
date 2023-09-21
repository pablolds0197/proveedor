const { Router } = require('express');
const route = Router();

// Importar métodos del controlador
const { proveedorGet, proveedorPost, proveedorPut, proveedorDelete } = require('../controllers/proveedor'); // Cambiamos el nombre del controlador a "proveedor"

route.get('/', proveedorGet);
route.post('/', proveedorPost);
route.put('/', proveedorPut); // Agregamos la ruta PUT
route.delete('/', proveedorDelete); // Agregamos la ruta DELETE

module.exports = route;