class CarrinhoDAO
{

    constructor(db){

        this._db = db;


    }


    insertCarrinho(cod_usu,num_ped){
        return new Promise((resolve, reject) => {
            let sql = "SELECT * FROM Usuarios where Email ='" +login+"'and Senha='"+senha+"'";
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
