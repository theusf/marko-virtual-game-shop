
class PedidoDAO
{

    constructor(db){

        this._db = db;


    }

    //Verifica se usuario ja tem pedido em aberto
    selectPedido(id_usuario){
        return new Promise((resolve, reject) => {
            let sql = "SELECT * FROM Pedidos where Cod_Usuario =" +id_usuario +" and Status='A'";
            this._db.all(sql, [],(err, resultados) => {
                if (err) {
                    return reject(err)
                }
                console.log(resultados)
                resolve(resultados)
            });        
        })
    }


    insertPedido(id_usuario,id_produto,valor_produto){
        return new Promise((resolve, reject) => {
        this.selectPedido(id_usuario).then(pedido =>
            {   
                console.log(pedido);
                console.log(pedido[0].idPedido);

                var id_pedido;

                if (pedido.length <= 0)
                {
                    console.log("Não existe pedido em aberto desse usuario, criando novo pedido")
                    let sql = "INSERT INTO Pedidos(Cod_Usuario,Data,Status,Endereço_Entrega) values (" 
                    + id_usuario +"," + new Date().getDate() +  ",'" + "A" + "','" + "RUA MIRANHA 123" + "');"

                    console.log(sql)      

                    this._db.all(sql, [],(err, resultados) => {
                    if (err) {
                    return reject(err)
                    }
                    
                    });

                    sql = "SELECT * FROM Pedidos ORDER BY idPedido DESC LIMIT 1;"

                    this._db.all(sql, [],(err, resultados) => {
                    if (err) {
                        console.log(err.message);
                        return reject(err)
                        }
                        
                        id_pedido = resultados[0].idPedido

                        console.log("id retornado depois da cricao:" + resultados[0].idPedido)

                        if (this.insertItemsPedido(id_pedido,id_produto,valor_produto))
                            resolve(resultados[0])
                        else
                            return reject(err)


                    });

                }
                else
                {
                    console.log("Já existe um pedido em aberto, atribuindo itens a ele")
                    id_pedido = pedido[0].idPedido;
                    if (this.insertItemsPedido(id_pedido,id_produto,valor_produto))
                        resolve(pedido[0])
                    else
                        return reject(err)
                }
                

            })
            .catch( console.log("Erro na promise selectpedido e insertPedido do Pedido_dao") );

            })
        }

        insertItemsPedido(id_pedido,id_produto,valor_produto){

           let sql = "INSERT INTO Items_Pedido(idPedido,idProduto,Qtd_Prod,Valor_Total) values (" 
            + id_pedido +"," + id_produto +  "," + 1 + "," +( valor_produto * 1) + ")"
        
            console.log(sql)

            return this._db.run(sql, [], function(err) {
                if (err) {
                    console.log(err.message);
                    return false;
                }
                // get the last insert id
                console.log(`Items_Pedido criado id dos item: ${this.lastID}`);
                return true;
            });
        }


        innerJoinCarrinho(id_usuario){
            return new Promise((resolve, reject) => {

                let sql = "SELECT Pedidos.Status, Items_Pedido.idItems_Ped, Pedidos.idPedido, Produtos.Img, Produtos.idProduto, Produtos.Descricao, Items_Pedido.Qtd_Prod, Items_Pedido.Valor_Total FROM Pedidos " +
                "INNER JOIN Items_Pedido on Items_Pedido.idPedido = Pedidos.idPedido " +
                "INNER JOIN Produtos on Items_Pedido.idProduto = Produtos.idProduto " +
                "WHERE Pedidos.Cod_Usuario =" + id_usuario + " and Pedidos.status = 'A'" ;

                console.log(sql)

                this._db.all(sql, [],(err, resultados) => {
                    if (err) {
                        return reject(err)
                    }
                    console.log(resultados)

                    resolve(resultados)
                });      
            })


        }


        deleteItemsPedido(id_pedido,id_items_ped){
            return new Promise((resolve, reject) => {
            
            let sql = "DELETE FROM Items_Pedido WHERE idPedido =" + id_pedido + " AND idItems_Ped =" + id_items_ped;

            console.log(sql)

            this._db.all(sql, [],(err, resultados) => {
                if (err) {
                    return reject(err)
                }
                console.log(resultados)

                resolve(resultados)
            });      
        })

        }



        setStatusDoPedido(id_pedido,status){
            return new Promise((resolve, reject) => {
            
            let sql = "UPDATE Pedidos set Status = '" + status + "' WHERE idPedido = " + id_pedido

            console.log(sql)

            this._db.all(sql, [],(err, resultados) => {
                if (err) {
                    return reject(err)
                }
                console.log(resultados)

                resolve(resultados)
            });      
        })

        }


}

module.exports = PedidoDAO
