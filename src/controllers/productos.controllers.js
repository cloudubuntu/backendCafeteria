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


productoCtrl.obtenerProducto = async(req, res)=>{
try {
  console.log(req.params.id);
  const productoBuscado = await Producto.findById(req.params.id);
  res.status(200).json(productoBuscado);
} catch (error) {
  console.log(error);
  res.status(404).json({
    mensaje: "Error al intentar encontrar un producto",
  });
}
};

productoCtrl.editarProducto=async(req, res)=>{
  try {
    console.log(req.params.id);
    console.log(req.body);
    //buscar el producto por id y mod sus datos
    //validar los datos
    //guardar los datos
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({mesaje: 'se edito el producto solicitado'});
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar editar un producto",
    });
  }
};

productoCtrl.borrarProducto=async(req, res)=>{
try {
  //buscar producto por el id
  await Producto.findByIdAndDelete(req.params.id);
  res.status(200).json({mensaje: 'Se pudo borrar el producto correctamente'})
} catch (error) {
  console.log(error);
  res.status(404).json({
    mensaje: "no se pudo borrar",
  });
}
}

export default productoCtrl;
