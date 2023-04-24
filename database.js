import mongoose from 'mongoose'
mongoose.connect('mongodb://127.0.0.1:27017/api-db-apuntes')
    .then(() => console.log('connected'))
    .catch(e => console.log(e));  

/** */

// const mysql = require("mysql2");
// const conexion = mysql.createConnection({
//   host: "localhost",
//   database: "misApuntes",
//   user: "admin",
//   password: "admin",
// });
// conexion.connect((error) => {
//   if (error) throw error;
//   console.log("conexion exitosa");
// });
// conexion.end;
// module.exports = conexion;
