import { Router } from "express";
import productoCtrl from "../controllers/productos.controllers";

//mision manejar las rutas

const newRouter = Router();

//crear ruta

newRouter
  .route("/products")
  .get(productoCtrl.listarProductos)
  .post(productoCtrl.crearProducto);

newRouter
  .route("/products/:id")
  .get(productoCtrl.obtenerProducto)
  .put(productoCtrl.editarProducto)
  .delete(productoCtrl.borrarProducto);

export default newRouter;
