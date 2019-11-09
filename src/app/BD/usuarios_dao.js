class UsuariosDAO
{

    constructor(db){

        this._db = db;


    }


    selectUsuario(login,senha){
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

module.exports = UsuariosDAO
