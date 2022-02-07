import express from 'express';


//crear una instancia de express
const app =express();
//configuracion del puerto
app.set('port', process.env.PORT||4000);//toma el valor desde la variable de entorno (env) como PORT or puerto 4000 o el de mi eleccion

app.listen(app.get('port'), ()=>{console.log('Ejecutandose en el puerto:'+app.get('port'));});
//prueba del backend
//console.log('prueba backend-alan');