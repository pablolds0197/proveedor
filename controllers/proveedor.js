const { response } = require('express');

// Importación de los modelos
const Proveedor = require('../models/proveedor'); // Cambiamos el nombre del modelo a "Proveedor"

// Método GET de la API
const proveedorGet = async (req, res = response) => {
    // Consultar todos los proveedores
    const proveedor = await Proveedor.find();

    res.json({ // Respuesta en JSON
        proveedor
    });
};

// Método POST de la API
const proveedorPost = async (req, res) => {
    let mensaje = 'Inserción Exitosa';
    const body = req.query; // Captura de atributos
    try {
        const { NombreProveedor, NombreContacto, Telefono, Correo } = body;
        const proveedor = new Proveedor({ NombreProveedor, NombreContacto, Telefono, Correo }); // Instanciando el objeto
        await proveedor.save(); // Inserta en la colección
    } catch (error) {
        mensaje = error;
        console.log(error);
    }
    res.json({
        msg: mensaje
    });
};

// Modificación
const proveedorPut = async (req, res = response) => {

    const { NombreProveedor, NombreContacto, Telefono, Correo } = req.query;
    let mensaje = 'Modificación exitosa';
    try {
        await Proveedor.findOneAndUpdate({ NombreProveedor: NombreProveedor },
            { NombreContacto, Telefono, Correo });
    } catch (error) {
        mensaje = 'Se presentaron problemas en la modificación.';
    }

    res.json({
        msg: mensaje
    });
};

// Eliminación
const proveedorDelete = async (req, res = response) => {

    const { _id } = req.query;
    let mensaje = '';
    try {
        const proveedor = await Proveedor.deleteOne({ _id: _id });

    } catch (error) {
        mensaje = 'Se presentaron problemas en la eliminación';
    }
    res.json({
        msg: mensaje
    });
};

module.exports = {
    proveedorGet,
    proveedorPost,
    proveedorPut,
    proveedorDelete,
};





