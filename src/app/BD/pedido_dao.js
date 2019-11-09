class PedidoDAO
{

    constructor(db){

        this._db = db;


    }


    insertPedido(cod_usu,id_produto,endereco){
        return new Promise((resolve, reject) => {
            let sql = "INSERT INTO Pedidos (Cod_Usuario,Data,Status_Ped,Endereço_Entrega) "
             + "values " + cod_usu + new Date().getDate() + "'A'" + "'" + endereco + "'";
            this._db.all(sql, [],(err, resultados) => {
                if (err) {
                    return reject(err)
                }
                resolve(resultados)
            });        
        }) 


    }



}

module.exports = CarrinhoDAO
