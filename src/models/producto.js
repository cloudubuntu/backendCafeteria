//modelo de la base de datos

//los datos se guardan en documentos y estos a su vez en colecciones

//el Schema es el que permite modelar

import mongoose, {Schema} from 'mongoose';

const prodSchema= new Schema({
      productName:{
          type: String,
          required: true,
          unique: true,
          maxlength: 150
      },
      price:{
          type: Number,
          required: true                  
      },
      urlImg:{
          type: String,
          required: true
      },
      category:{
          type: String,
          required: true          
      }

});

//convertir en modelo
//esta constante es la representacion de toda la BBDD
//primer param, nombre de los doc y colecciones, segundo param shema
const Producto = mongoose.model('producto', prodSchema);

export default Producto;
