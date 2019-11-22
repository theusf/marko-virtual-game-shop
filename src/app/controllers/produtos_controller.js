var db = require('../../config/sqlitedatabase');

const ProdutosDAO = require('../BD/produtos_dao');
const Produtos_dao = new ProdutosDAO(db);

class ProdutosController
{

    listarProdutos(req,res){

            var Entrar = 'Login'
            console.log(req.session.usuario + "AAAAAAAAAAAAAAAAAAA")
            if (req.session.usuario)
            Entrar = 'Sair'
            else
            console.log('OOOOOOOOOOOOOOOOOOO')

  
                Produtos_dao.selectProdutos( function(erro,resultados){
                    if (erro){
                        res.send("Deu erro em" + resultados);
                    }
                    console.log(req.session)
                    res.marko(
                        require('../views/produtos/Produtos.marko'),{
                        produtos: resultados,
                        logado: Entrar
                        });    
                })
                
        }



        listaDadosProdutos(req, res) {
            const id_produto = req.params.idprod;
      
            Produtos_dao.selectInfoProduto(id_produto)
                .then(produto => {
                    console.log(produto)
                    console.log(produto.length < 1)
                    if (produto.length < 1) {
                        return console.log('Erro')
                    }
                    console.log(req.session)

                    res.marko(  
                        require('../views/produtos/produtoinfo.marko'),{
                        prod: produto,
                            
                        });    
                    })
                    

                .catch(err => res.send(err.message || err));
        }

}

module.exports = new ProdutosController;