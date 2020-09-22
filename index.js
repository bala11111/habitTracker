const express = require('express');//using express module
const app = express();
const port= 8000;
const db = require('./config/mongoose');//getting the database
const path = require('path')

app.set('view engine','ejs');//setting the views folder
app.set('views','./views');

app.use(express.urlencoded());
app.use(express.static('./assets'));

app.use('/',require('./routes/index'));


//starting our app
app.listen(port,function(err){
    if(err){
        console.log(`Error in starting the server : ${err}`);
        return ;
    }
    console.log(`Server is running on port : ${port}`);
})