

//DANDO RESPUESTA. LÓGICA DE NEGOCIO DE LA APLICACIÓN. EN FUNCIÓN DE LA RUTA QUE PIDAS, HACE UNA COSA U OTRA. 
//STATUS(200) CODIGO DE RESPUESTA HTTP. 

//RENDER = PLANTILLA
//SEND = TEXTO PLANO

const product = require('../utils/product')

const pages = {

home: (req, res) => {
    let msj = "Esta es la home desde Pug!!!"
    let title = "Home"
    res.status(200).render("template", {msj,title}); //Tira el HTML deñ archivo .pug! 
},
contact: (req, res) => {
    let msj = "Esta es el contact desde Pug!!!"
    let title = "About"
    res.status(200).render("template", {msj,title});
},
about: (req, res) => {
    res.status(200).send('Esto es about!'); 
},
location: (req, res) => {
    res.status(200).send('Esto es la situación!');
},
pictures: (req, res) => { //Los dos puntos significa que son parámetros variables. El "?"" quiere decir que es opcional! 
    console.log(req.params.id); 
    let msj = "Esto es pictures"
    msj += req.params.id? '. ID:'+req.params.id:"";
    let id = req.params.id
    res.status(200).render('pictures', {msj, id}); 

},

products: async (req, res) => {


    //Fetch de productos
    let products;
    req.params.id?
        products = await product.getProductbyId(req.param.id): //objetos
        products = await product.getAllProducts() //devuelve un array

    
    res.status(200).render('products',{products}); 

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

module.exports = pages //Muy importante!!!!!!!Esto nos permitia poder usarlo en otros ficheros. 