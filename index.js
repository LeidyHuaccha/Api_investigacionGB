const express= require('express'); //sintaxis para importar modulos en node js
require('dotenv').config();
const{dbConection }=require('./config/database')
const cors=require ('cors');


//crear el servidor
const app= express();

//Establecimiento de la configuración cors
app.use(cors);

//Crear conexión de Bdatos 
dbConection();

console.log(process.env);
//Creando las rutas de  mi app
app.get('/',(req,res)=>{

    res.status(400).json({
        ok:true,
        msg:'Bienvenido a la App Proyectos'
    });
});

//Código para desplegar el servidor
app.listen(process.env.PORT,()=>{
    console.log('Servidor Nodejs desplegado en el puerto '+ process.env.PORT)

})
//USER: adminproject
//Password de la BD: jabXIwnUd0tl20oe
//MONGO COMPAS : mongodb+srv://adminproject:<jabXIwnUd0tl20oe>@cluster0.hsn8v.mongodb.net/test
//mongodb+srv://adminproject:jabXIwnUd0tl20oe@cluster0.hsn8v.mongodb.net/test
