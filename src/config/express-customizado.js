/* COLOCAR/INSTANCIAR TODOS OS PACOTES QUE USAREI 
   NO PROJETO  */
   require('marko/node-require').install();
   require('marko/express');
   var express = require('express')
   var cookieSession = require('cookie-session')

      
   var app = express()
   
   app.use(cookieSession({
     name: 'session',
     keys: ['key1', 'key2'],
   
     // Cookie Options
     maxAge: 24 * 60 * 60 * 1000 // 24 hours
   }))

const bodyParser = require('body-parser');

   // essa permite que o nodejs consiga pegar dados via req.body
   app.use(bodyParser.urlencoded({
       extended: true
   }));

   
  

   // indicando um caminho de diretorio
   app.use('/caminho',express.static('src/app/views'));
   
   const rotas = require('../app/rotas/rotas');
   rotas(app);

   // estou habilitando qq *.js a usar o meu app
   // o app é a aplicação NODEJS
   module.exports = app;
   