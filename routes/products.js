
//FICHERO DE RUTAS. LLAMA A LAS FUNCIONES DEL CONTROLADOR. 


const router = require ('express').Router(); //Invoca al objeto router
const products = require('../controllers/products');

//Endpoints
router.get('/products/:id?', products.getProducts)  //:? significan valores random


router.post('/products', products.createProduct) //Método para crear nuevo producto. POST! 

module.exports = router




