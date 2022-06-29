import mysql from 'mysql';
import config from '../config';
console.log("Estoy en mysql");

const dbconfig = {
  host: config.mysql.host,
  database: config.mysql.database,
  user: config.mysql.user,
  password: config.mysql.password
};

console.log(dbconfig);
let conexion;

function conMysql() { 
  conexion = mysql.createConnection(dbconfig);

  conexion.connect((err) => { 
    if(err) {
      console.log('[db err]', err);
      setTimeout(conMysql,20000);
     } else {
      console.log('DB Connected!!!');
    }
  });

  conexion.on('error', (err) => {
    console.log('[db err]', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      conMysql();
    } else { 
      throw err;
    }  
  });

}  

conMysql();

function todos(tabla) {
 console.log(tabla);
  return new Promise((resolve, reject) => {
    conexion.query(`SELECT * FROM ${tabla}`, (err, rows) => { 
      if(err) return reject(err);
      console.log(rows);
      resolve(rows);
    })
  })  
};

module.exports = {
  todos
}