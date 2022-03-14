//importar pacote
const express = require('express')
const path = require('path')
const pages = require('./pages.js')
//iniciando o express
const server = express ()


server
    .use(express.urlencoded({extended: true}))//<= Utilizar body do da requisição(req)
    .use(express.static('public')) //<= Utilizando os arquivos estáticos

    //configurar template engine
    .set('views',path.join(__dirname,"views"))
    .set('view engine', 'hbs')

    //criar uma rotas
    .get('/',pages.index)
    .get('/orphanage',pages.orphanage)
    .get('/orphanages',pages.orphanages)
    .get('/create-orphanage',pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//ligar o servidor
server.listen(5550) //node src/server.js no terminal e cntl c para desligar 
//(com o nodemon instalado e so colocar 'npm start' para ligar)