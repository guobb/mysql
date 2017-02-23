/**
 * Created by apple on 17/2/23.
 */
/**
 * 连接持是一种创建管理 连接的技术
 *
 * 1. 减少连接时间
 *
 * 2. 简化编程模型
 *
 * 3. 资源受控制
 *
 */

const mysql = require('mysql');

let pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'student'
});

pool.query('select * from user', (err, rows) => {
    console.log(rows)
});