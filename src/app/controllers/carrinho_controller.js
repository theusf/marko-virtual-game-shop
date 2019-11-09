var db = require('../../config/sqlitedatabase');

const PedidoDAO = require('../BD/pedido_dao');
const Pedidos = new PedidoDAO(db);

class CarrinhoController
{

    addPedido(req,res){
                const {}
                Pedidos.insertPedido( function(erro,resultados){
                    if (erro){
                        res.send("Deu erro em" + resultados.length);
                    }
                    res.marko(
                        require('../views/produtos/Produtos.marko'),{
                        produtos: resultados
                        });    
                })
                
        }

        listaDadosProdutos() {
            return function (req, res) {
                const id_produto = req.params.idprod;
                //const id_usu = req.cod_usu;
                console.log(id_produto)
            }
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
                    
                    res.marko(  
                        require('../views/produtos/produtoinfo.marko'),{
                        prod: produto,
                            
                        });    
                    })
                    

                .catch(err => res.send(err.message || err));
        }

}

module.exports = new CarrinhoController;