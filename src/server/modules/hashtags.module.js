const mysql = require('mysql2');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./db');

const connectionPool = mysql.createPool({ // 建立一個連線池
    connectionLimit: 10, // 限制池子連線人數
    host: 'localhost',
    user: 'root', // 用戶名稱 
    password: 'littleriverho', // 資料庫密碼
    socketPath: '/tmp/mysql.sock',
    database: 'ighashtagstest' // 資料庫名稱
});

const selectHashtags = () => {
    console.log("selectHashtags Work !!!");
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                console.log('連線失敗！');
                reject(connectionError);
            } else {
                // res.send('連線成功！RESTful API: GET');
                // resolve.send('連線成功！RESTful API: GET');
                console.log('連線成功！RESTful API: GET');
                console.log(connection.database);
            }
        })
    })
}

const createHashtags = () => {
    console.log("createHashtags Work !!!");
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => {
            if (connectionError) {
                console.log('連線失敗！');
                reject(connectionError);
            } else {
                // res.send('連線成功！RESTful API: POST');
                // resolve.send('連線成功！RESTful API: POST');
                console.log('連線成功！RESTful API: POST');
                console.log(connection.database);
            }
        })
    })
}

const storeInLocalStorageHashtags = () => {
    console.log("storeInLocalStorageHashtags Work!!!");
    localStorage.setItem("storeInLocalStorageHashtags", "set as test");
}

module.exports = {
    selectHashtags,
    createHashtags,
    storeInLocalStorageHashtags
}