var db = require('../../config/sqlitedatabase');

const ProdutosDAO = require('../BD/produtos_dao');
const Produtos_dao = new ProdutosDAO(db);

class ProdutosController
{

    listarProdutos(){
        return function(req,res) {
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

        listaDadosProdutos() {
            return function (req, res) {
                const id_produto = req.params.id;
                const id_usu = req.cod_usu;
                produtos_dao.consultaClientePorId(id_produto, id_usu) 
                {
                    console.log(resultadosClientes);
                    res.marko(
                        require('../views/clientes/atualizaClientes.marko'),
                        { clientes: resultadosClientes[0] }
                    );
                });
            }
        }

}

module.exports = new ProdutosController;