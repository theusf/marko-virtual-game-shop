var db = require('../../config/sqlitedatabase');

const UsuariosDAO = require('../BD/usuarios_dao');
const usuarios = new UsuariosDAO(db);


const ProdutosDAO = require('../BD/produtos_dao');
const Produtos_dao = new ProdutosDAO(db);



class AutenticacaoController {
    validarAcesso(req, res) {
        const { login, senha } = req.body;
        
        usuarios.selectUsuario(login, senha)
            .then(usuario => {
  
                if (usuario.length < 1) {
                    return console.log('Erro')
                }

                req.session.usuario = usuario[0].Cod_Usuario     
                console.log("Variavel de Sessao LOGIN = " + req.session.usuario );
                req.session.save
                return res.redirect('/');
            })
            .catch(err => res.send(err.message || err));
    }
}

module.exports = new AutenticacaoController;
