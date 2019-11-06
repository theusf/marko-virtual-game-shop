var db = require('../../config/sqlitedatabase');

const ProdutosDAO = require('../BD/produtos_dao');


class ProdutosController
{

    listarProdutos(){
        return function(req,res) {
                const Produtos_dao = new ProdutosDAO(db);
                Produtos_dao.selectProdutos( function(erro,resultados){
                    if (erro){
                        res.send("Deu erro em" + resultados.length);
                    }
                    res.marko(
                        require('../views/produtos/Produtos.marko'),{
                        produtos: resultados
                        });    
                })
                
                  
  
        }}
}

module.exports = new ProdutosController;