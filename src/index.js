import express from 'express';
import res from 'express/lib/response';
import morgan from 'morgan';
import cors from 'cors';
import  path  from 'path';
import newRouter from './routes/productos.routes';

newRouter

//crear una instancia de express
const app =express();
//configuracion del puerto
app.set('port', process.env.PORT||4000);//toma el valor desde la variable de entorno (env) como PORT or puerto 4000 o el de mi eleccion

app.listen(app.get('port'), ()=>{console.log('Ejecutandose en el puerto:'+app.get('port'));});
//prueba del backend
//console.log('prueba backend-alan');

//midlewares: config extras del backend antes de que se ejecuten las rutas
//1-midle nativos de express
app.use(express.json()); //permite recibir objetos en formato json
app.use(express.urlencoded({extended:true})); //

//cargar archivo static

app.use(express.static(path.join(__dirname, '../public')));

//pagina por defecto al cargar la URL del backend
console.log("esta es mi prueba del backend donde puedo enviar un lista de productos");
console.log(__dirname);
console.log(path.join(__dirname, '../public'));


//2-midle externos npm install morgan cors, primero instalar luego importar, morgan agrega detalles a la terminal va con parametros, cors habilita el backend para que reciba peticiones remotas
app.use(morgan('dev')); //detalles en termina
app.use(cors()); //peticiones remotas (remote request)

//creamos una ruta de prueba
//GET-pedir, POST-crear, PUT-actualizar, DELETE-borrar
app.use('/apicafe', newRouter);