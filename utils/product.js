
const fetch = require('node-fetch'); 

const { createProduct } = require('../controllers/pages');

/*fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))*/

//Product.js tiene que ser un módulo exportable. 

const product = {

    getAllProducts: async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        return data    
    },
    getProductbyId: async (id) => {
        const res = await fetch('https://fakestoreapi.com/products/' + id)
        const data = await res.json()
        return [data]    
    },

    addProduct: async (product) => { //Función que recibe la petición de añadir "productos". 
        const res = await fetch('https://fakestoreapi.com/products',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(product)
        })
        const data = await res.json()
        return data //Devuelve un JSON, una respuesta del servidor. 
    }
}

/*product.getAllProducts()  //FORMA DE HACER UN CONSOLE.LOG DE UNA PROMESA! 
.then((data) => console.log(data))*/

product
    .getProductbyId(5)
    .then((data) => console.log(data)); 

module.exports = product //Con esta linea ya queda disponible para que se pueda usar en otro fichero. 



//Este es el producto a AÑADIR mediante la función  AddProduct.
/*product
    .addProduct({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic"
    })
    .then((data)=>console.log(data))*/

