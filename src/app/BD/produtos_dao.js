class ProdutosDAO
{

    constructor(db)
    {

        this._db= db;

    }


    selectProdutos(callback)
    {
        let sql = `SELECT * FROM Produtos`;
            
        this._db.all(sql, [],(erro, resultados) => callback(erro,resultados)
        );                
            
    }


    selectInfoProduto(id_produto){
        return new Promise((resolve, reject) => {
            let sql = "SELECT * FROM Produtos where idProduto = " + id_produto;
            this._db.all(sql, [],(err, resultados) => {
                if (err) {
                    return reject(err)
                }
                resolve(resultados)
            });        
        })
    }
    

    
}

module.exports = ProdutosDAO;