var db = require('../../config/sqlitedatabase');

const PedidoDAO = require('../BD/pedido_dao');
const Pedidos = new PedidoDAO(db);

class CarrinhoController
{


    criarPedido(req, res) {
        if (req.session.usuario)
        {
        const { id_produto,valor_produto } = req.body
        const id_usuario = req.session.usuario
        console.log(id_produto,valor_produto)

        Pedidos.insertPedido(id_usuario,id_produto,valor_produto)
        .then(pedido => {
            console.log("Pedido criado com sucesso!" + pedido)
            return res.redirect('/carrinho');
        })
        .catch(err => 
            {
                if (erro == 401)
                {
                    res.redirect("/login")
                    
                }
                console.log(erro)
                    
            });
        }
        else
            res.redirect("/login")
                
    }

    montaCarrinho(req,res){
        if (req.session.usuario)
        {
            Pedidos.innerJoinCarrinho(req.session.usuario)
            .then(produtos => {

                if (produtos.length < 1) {
                    return console.log('Erro')
                }
                var total = 0;

                for (var i =0; i< produtos.length; i++)
                {
                
                console.log(produtos[i].Valor_Total)
                total += produtos[i].Valor_Total
                console.log(total)
                }
                console.log(total)

                res.marko(  
                    require('../views/usuarios/carrinho.marko'),{
                    prod: produtos,
                    vtotal: total    
                    });    
                })
                

                .catch(err => res.send(err.message || err));
            }
            else
                res.redirect("/login");

    }



    finalizarPedido(req,res){
        
        Pedidos.innerJoinCarrinho(req.session.usuario)
        .then(produtos => {

            if (produtos.length < 1) {
                return console.log('Erro')
            }
            var total = 0;

            for (var i =0; i< produtos.length; i++)
            {
            
            console.log(produtos[i].Valor_Total)
            total += produtos[i].Valor_Total
            console.log(total)
            }
            console.log(total)

            res.marko(  
                require('../views/usuarios/compra.marko'),{
                prod: produtos,
                vtotal: total    
                });    
            })
            

        .catch(err => res.send(err.message || err));

    }



    removerItem(req,res){

        
        const { id_pedido,id_produto } = req.body
        console.log(id_pedido + "" + id_produto)

        Pedidos.deleteItemsPedido(id_pedido,id_produto)
        .then(result => {
            res.redirect("/carrinho")
        })
            
        .catch(err => res.send(err.message || err));

    }

}

module.exports = new CarrinhoController;