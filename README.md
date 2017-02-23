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

> 打开一个数据库

````
use db_name 

````

> 创建表并指定主键

````
create tabale [name](column_name,data_type,...)
create table student(id int primary key, name varchar(50))
列级约束 自动递增
create table student(id int primary key auto_increment, name varchar(50))
````

> 显示数据下面所有的数据表

````
show tables

````

> 显示表的定义

````
show columns form table[name] 

````

> 查看当前打开的数据库是哪个数据库

````
select database()

````

> 删除数据表

````
drop table [name] name 表名字

````

#### ⚠ mysql 以分号为结束

> 行记录操作－》插入操作

````
insert into tbl_name(id,name) values(1,'111');
````

> 查询表中所有的记录

````
select * from tbl_name;

````

> 更新记录

````
update student set age = age+1 where id=2;

````
> 删除记录

````
delete from student where name="111";

````