const mysql = require('mysql');

const connection = mysql.createConnection({

    host:'localhost',
    user:'root',
    password: '',
    database: 'nodevesp'

});


connection.connect(function (err) {

    if (err)
        console.log('Erro na conexão com o BD NODEVESP')
    else
        console.log('Conexão com BD OK');
})


module.exports = connection;