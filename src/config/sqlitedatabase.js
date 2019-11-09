const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./sqlite/produtos.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.log('Erro ao conectar ao banco ;(');
      console.error(err.message);
    }
    console.log('Conectado ao banco Produtos');
  });

  db.serialize(() => {
    db.each(`SELECT * from Produtos`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row);
    });
  });


module.exports = db;