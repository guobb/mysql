  /**
 * Created by apple on 17/2/23.
 */

  const mysql = require('mysql');

  const connection = mysql.createConnection({
      host:'127.0.0.1',
      user:'root',
      password:'123456',
      //port:8080,
      database:'nodejs'
  });


  connection.connect();

  let sql = 'select * from student';


  /**
   * err 错误对象
   * rows 返回的记录
   * fields 返回的字段  表示是列
   */
  connection.query(sql,(err,rows, fields) =>{

      if(err){
          console.error(err);
      }else{
          //console.log(rows);
          //console.log(fields);
          rows.forEach((row)=>{
               console.log(row.name)
          })
      }
      connection.destroy();
  });