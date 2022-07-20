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

to read data from body of we need to use multer so npm i multer and import in server.js file and then
if you write console.log(req.body) then it shows that data into your terminal

create a utility file in you user folder which have function or tool which are reusable again and again

Now we need to create hashing so that we protect our password before storing into database convert into hash by using bcrypt so creating a function to convert your password into has inside your utility.js file   

once done with hash creation we need to create authorization token so that we can avoid authorization at each step 
for that we require jsonwebtoken

create order model and routes
create cart model and routes

