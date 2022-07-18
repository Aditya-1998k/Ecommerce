create two folder one for client and other for servercreater server
user login register order item cart etc
goto server and install all dependency like express jsonwebtoken bcrypt nodemon and mongoose etc
first npm init to initialize package.json file
install express mongoose nodemon bcryptjs jsonwebtoken
use ginigoner for nodemodule
and git init
creating command in script of package.json for nodemon
write "start":"nodemon server.js"  now we have created nodemon command
when we type npm start it start our server
when we install by using npm i __ then  package lock json created which have information about internal dependency of installed package
 create middleware in server.js by using app.use() which takes two things routes and controller
 create user routes and export it and import in your server file as  a usercontroller
 to create routes in user.js use express Router

now we need some database works so create schema or model for user and connect to mongodb to create your collection of ecommerce, 
to create schema and modal use mongoose in your schma file
