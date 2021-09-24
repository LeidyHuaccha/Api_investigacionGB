
const mongoose = require('mongoose');
const dbConection = async() => {
        
    //mongodb+srv://adminproject:jabXIwnUd0tl20oe@cluster0.hsn8v.mongodb.net/test
    
    try {
        //Debemos utilizar la cadena de conexion que tenemos en mongocompass        
        await mongoose.connect(process.env.DB_CNN);
        console.log('Conexion exitosa a la BD')
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar a la BD');
    }
}
module.exports ={
    dbConection
}
