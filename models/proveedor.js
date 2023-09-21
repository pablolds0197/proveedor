const { Schema, model } = require('mongoose');


const ProveedorSchema = Schema({
    Proveedor: {
        type: String,
        required: [true, 'El Proveedor es obligatorio']
    },
    
    NombreContacto: {
        type: String,
        required: [true, 'El Nombre de Contacto es obligatorio']
    },
    
    
    Telefono: {
        type: Number,
        required: [true, 'El Teléfono es obligatorio']
    },
    
    Correo: {
        type: String,
        required: [true, 'El Correo es obligatorio'],
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        
    }
});

// Exportar el modelo Proveedor
module.exports = model('Proveedor', ProveedorSchema);