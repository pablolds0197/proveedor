
const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

const dbConnection = async () => {
    try{
        mongoose.connect(process.env.MONGO_CNN)
        console.log('Conexión exitosa a la base de datos de proveedores')
    }
    catch(error){
        console.log(error)
        //throw new Error('Error conectando a la base de datos')
    }
}

//Exportar la cadena de conexión
module.exports = { dbConnection }