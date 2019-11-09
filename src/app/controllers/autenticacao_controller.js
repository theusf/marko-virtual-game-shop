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
                console.log(usuario.length)
                console.log(usuario.length < 1)
                req.session.id = usuario.Cod_Usuario;
                req.session.login = usuario.Email;
                req.session.senha = usuario.Senha;
                if (usuario.length < 1) {
                    return console.log('Erro')
                }
                
                Produtos_dao.selectProdutos( function(erro,resultados){
                    if (erro){
                        res.send("Deu erro em" + resultados.length);
                    }
                    console.log(usuario)
                    
                    res.marko(
                        
                        require('../views/produtos/Produtos.marko'),{
                        produtos: resultados,
                        usu: usuario 
                        
                        });    
                })
            


            })
            .catch(err => res.send(err.message || err));
    }
}

module.exports = new AutenticacaoController();
