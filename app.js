
const { response } = require('express');
const express = require('express');
const { products } = require('./controllers/pages');
//const {products} = require('./controllers/products');  
const pages = require ('./routes/pages')
//const products = require('')

const app = express()
const port = 3000

//Verificará si lo que pasas es válido o no
function hasApiKey (req, res, next) {
  const apiKey = req.query.key; 

  if (apiKey && apiKey === "123hola") {
    next(); 
  }else {
    res.status(403).send("403 - Forbidden. You shall not pass")
  }
}

//http://localhost:3000/?key=123hola - Método para entrar con seguridad! 


//Now that Pug is installed, set it as the templating engine 
//for your app. You don't need to 'require' it. Add the
//following code to your index.js file.

//MOTOR de VISTAS
app.set('view engine', 'pug');
app.set('views','./views'); //MODELO - VISTA -  CONTROLADOR 

//Esto es un middleware 
//app.use(hasApiKey); //Middleware de seguridad. Para probar, desconectar! 
app.use(express.json()); 

//Esto es un middleware, para el router. 
//http://localhost:3000/about - DEVUELVE UNA VISTA
app.use('/',pages) //Para decirle que enrute con el objeto router(en pages.js). Para las vistas de la WEB

//Esto es una ruta de la api. Todo lo que empiece con "api". 
//http://localhost:3000/api/products - DEVUELVE UNA VISTA

app.use('/api', products); // Para la api. 


//Para rutas no encontradas
app.get('*', (req, res) => { //Los asteriscos son para uso global! 
    res.status(200).send('Sorry...! Error 404')
    } )


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

