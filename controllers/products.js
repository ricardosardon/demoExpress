

//DANDO RESPUESTA. LÓGICA DE NEGOCIO DE LA APLICACIÓN. EN FUNCIÓN DE LA RUTA QUE PIDAS, HACE UNA COSA U OTRA. 
//STATUS(200) CODIGO DE RESPUESTA HTTP. 

//RENDER = PLANTILLA
//SEND = TEXTO PLANO

const product = require('../utils/product')

const products = {


getProducts: async (req, res) => {

    //Fetch de productos
    let products;
    req.params.id?
        products = await product.getProductbyId(req.param.id): //objetos
        products = await product.getAllProducts() //devuelve un array

    
    res.status(200).json({products}); 

},

createProduct: async (req, res) => { //CREACIÓN DEL OBJETO

    console.log("*****************");
    console.log(req.body) //Lo que llega por body es el producto a guardar! 
    let prod = req.body 
    console.log(prod); 
    const response = await product.addProduct(req.body)
    console.log(response)
    res.status(201).json(response); 

},



notFound: (req, res) => { //Los asteriscos son para uso global! 
    res.status(200).send('Sorry...! Error 404')
} 

}

module.exports = products //Muy importante!!!!!!!Esto nos permitia poder usarlo en otros ficheros. 