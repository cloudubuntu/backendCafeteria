//aqui va toda la logica
import Producto from "../models/producto";

const productoCtrl = {};

productoCtrl.listarProductos = async (req, res) => {
    //cargar la logica para traer los productos de la BD
    try {
        //buscar en la BBDD la coleccion de productos
        const listaProducts=await Producto.find();
        //enviar la respuesta al FrontEnd
        res.status(200).json(listaProducts);
        
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar listar los productos producto",
          });
    } 
};

productoCtrl.crearProducto = async(req, res) => {
  try {
     //validar el (req.body) copiadas del front
     //crear un obj para guardar en la BBDD
     const newProd= new Producto({
         productName: req.body.productName,
         price: req.body.price,
         urlImg: req.body.urlImg,
         category: req.body.category
     });
     //una vez creado se guarda en la BBDD
     await newProd.save();
     //enviar resp al front end
     res.status(201).json({
         mensaje: 'El producto se creo correctamente'
     })
  } catch (error) {
    console.log(error);
    //envio de respuesta al front
    res.status(404).json({
      mensaje: "Error al intentar agregar un producto",
    });
  }
};

export default productoCtrl;
