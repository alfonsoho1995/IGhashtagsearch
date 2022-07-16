const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const DUMMY_DATABASE = [
    { lexus: "lexus result" },
];

router.get('/', (req, res, next) => {
    console.log('GET request inside route called !!!');
    res.json( { message: 'here is /' } );
});

// router.get('/sqltest', (req, res, next) => {
//     console.log('GET IN MYSQL PART !!!');
//     res.json( { message: 'here is /sqltest' } );
// });

router.get('/sqltest', (req, res, next) => {
    console.log("GET IN MYSQL PART");
    const connectionPool = mysql.createPool({ // 建立一個連線池
        connectionLimit: 10, // 限制池子連線人數
        // host: '127.0.0.1', // 主機名稱
        host: '192.168.1.106',
        // host: 'localhost',
        // port: 3306,
        user: 'root@localhost', // 用戶名稱 
        password: 'littleriverho', // 資料庫密碼
        database: 'ighashtagstest' // 資料庫名稱
    });
    connectionPool.getConnection((err, connection) => { //建立一個連線若錯誤回傳err
        if (err) {
          res.send(err);
          console.log(err);
          console.log('連線失敗！');
        } else {
          res.send('連線成功！');
          console.log(connection);
        }
    });
})

// router.get('/:hashtags', (req, res, next) => {
//     res.send( { message: 'API RUN HASHTAGS !!!' } );
//     var hashtags = req.params['hashtags'];
//     res.send({
//         hashtags: hashtags
//     })
// })

module.exports = router;