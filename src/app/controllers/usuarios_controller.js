var db = require('../../config/sqlitedatabase');

const UsuariosDAO = require('../BD/usuarios_dao');

class UsuariosController {


    cadastrarusuario(req,res)
    {

           const Usu = new UsuariosDAO(db)

           Usu.insertUsuario(
            req.body.cpf,
            req.body.nome,
            req.body.celular,
            req.body.telefone,
            req.body.email,
            req.body.data_nascimento,
            req.body.senha
           ).then( () => {

                res.redirect("/login")

           })
           .catch(err => res.send(err.message || err));


    }


}

module.exports = new UsuariosController;