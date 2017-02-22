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
 mysqladmin -u root password
 Enter password
 New password
 Confirm new password
 
 ````

> 使用 root 用户连接数据库 

````
mysql -u root -h 127.0.0.1

````

> 关闭数据库  

````
quit: q\ exit:

````

> 创建数据库 create database [name]: