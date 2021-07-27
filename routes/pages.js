
//FICHERO DE RUTAS. LLAMA A LAS FUNCIONES DEL CONTROLADOR. 


const router = require ('express').Router(); //Invoca al objeto router
const pages = require('../controllers/pages'); 

router.get('/', pages.home)
router.get('/contact', pages.contact)
router.get('/about', pages.about)
router.get('/location', pages.location)
router.get('/pictures/:id?', pages.pictures) 
router.get('/products/:id?', pages.products)  //:? significan valores random


router.post('/products', pages.createProduct) //Método para crear nuevo producto. POST! 
module.exports = router




