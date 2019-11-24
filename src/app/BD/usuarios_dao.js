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

    //('"+ cpf + "','" + nome + "','"
    insertUsuario(cpf,nome,celular,telefone,email,data_nascimento,senha){
        return new Promise((resolve,reject) => {

            let sql = "INSERT INTO Usuarios(CPF,Nome_Completo,Celular,Telefone,Email,Data_Nascimento,Senha) values ('"+ cpf + "','" + nome + "','" + celular 
            + "','" + telefone + "','" + email 
            + "','" + data_nascimento + "','" + senha + "');"

            console.log(sql)

            this._db.all(sql, [],(err, resultados) => {
                if (err) {
                    return reject(err)
                }
                resolve()
            });   

        })

    }
        
    




}

module.exports = UsuariosDAO
