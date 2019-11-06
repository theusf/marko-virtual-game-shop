class UsuariosDAO
{

    constructor(db){

        this._db = db;


    }


    selectUsuario(login,senha){
        return new Promise((resolve, reject) => {
            let sql = "SELECT * FROM Usuarios where Email ='" +login+"'and Senha='"+senha+"'";
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

module.exports = UsuariosDAO
