//aqui va toda la logica



const productoCtrl={};

productoCtrl.listarProductos=(req, res)=>{
    //cargar la logica para traer los productos de la BD    
    res.send("aqui enviaria la lista de productos");

}

productoCtrl.crearProducto=(req, res)=>{
    console.log(req.body);
    res.send('doy el alta de un producto');
}

export default productoCtrl;
