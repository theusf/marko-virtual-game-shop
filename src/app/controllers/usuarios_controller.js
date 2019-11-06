var db = require('../../config/sqlitedatabase');

const UsuariosDAO = require('../BD/usuarios_dao');

class UsuariosController {


    validarAcesso()
    {
        return function(req,res) {
            const usuarios = new UsuariosDAO(db);
            //console.log(req.body.login,req.body.senha);
            console.log(usuarios.selectUsuario(req.body.login,req.body.senha))
            usuarios.selectUsuario(req.body.login,req.body.senha).then(resultados => 
            {   console.log(resultados)
                

            })
            
                //res.send("ne ntrou" + usuarios.selectUsuario(req.body.login,req.body.senha));

        }


    }


}

module.exports = new UsuariosController;