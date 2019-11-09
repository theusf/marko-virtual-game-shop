var db = require('../../config/sqlitedatabase');

const UsuariosDAO = require('../BD/usuarios_dao');
const usuarios = new UsuariosDAO(db);


class AutenticacaoController {
    validarAcesso(req, res) {
        const { login, senha } = req.body;
  
        usuarios.selectUsuario(login, senha)
            .then(usuario => {
                console.log(usuario.length)
                console.log(usuario.length < 1)
                if (usuario.length < 1) {
                    return console.log('Erro')
                }
                return res.redirect('/')
            })
            .catch(err => res.send(err.message || err));
    }
}

module.exports = new AutenticacaoController();
