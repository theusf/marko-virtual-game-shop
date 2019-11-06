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

    
}

module.exports = ProdutosDAO;