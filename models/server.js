const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.proveedorPath = '/api/proveedor'; // Ruta pública para Proveedor
        this.conectarDB();
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`);
        });
    }

    routes() {
        this.app.use(this.proveedorPath, require('../routes/proveedor')); // Cambiamos a 'proveedor'
    }

    async conectarDB() {
        await dbConnection();
    }
}

module.exports = Server;