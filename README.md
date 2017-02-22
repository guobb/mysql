### mysql
> 安装mysql 

````
brew install mysql 之后可能需要重启一下终端，成功的话 mysql 再按tab会显示一些提示信息
````

> 启动服务器 

````
mysql.server start

````

> 关闭服务器 

````
mysql.server stop

````

> 设置密码 
 
 ````
 myaqladmin -u root password
 New password:
 Confirm new password
 
 ````
> 修改密码 
 
 ````
 mysqladmin -u p -root password
 Enter password
 New password
 Confirm new password
 
 ````

> 使用 root 用户连接数据库 

````
mysql -u root -p -h 127.0.0.1

````

> 关闭数据库  

````
quit; q\ exit;

````

> 创建数据库 

````
create database [name];

````

> 查看数据库

````
show databases;

````
> 删除数据库

````
drop database [name];

````

> 数据类型


````

       数据类型          |       说明 
       
       －－－－－－－－－－－－－－－－－－－－            
       int              |       整数 
       －－－－－－－－－－－－－－－－－－－－            
       float            |       浮点数  
       －－－－－－－－－－－－－－－－－－－－            
       datetime         |       日期日期型 
       －－－－－－－－－－－－－－－－－－－－            
       date             |       日期日期型   
       －－－－－－－－－－－－－－－－－－－－            
       char(m)          |       定义字符类型   
       －－－－－－－－－－－－－－－－－－－－            
       varchar(m)       |       不定长字符类型

````

