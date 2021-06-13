
const mysql = require('mysql');
// mysql connection 

const dbConn = mysql.createConnection({

    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.MYSQL_DB

});

dbConn.connect(function(error ){
    if(error)throw error;
    console.log("Database connected successfully");
})

module.exports= dbConn;