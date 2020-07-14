
const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
//load handlebars
app.engine('handlebars', exphbs());


app.set('view engine', 'handlebars'); 

// load body parser
app.use(bodyParser.urlencoded({extended: false}));

// load public folder
app.use(express.static("public"));

//load controller
const generalController = require("./controllers/general");
//map controller to app object
app.use("/",generalController);

//web server creation 
const PORT=3000;

//sets up server
app.listen(PORT,()=>{
    console.log("Web Server is up and Running");
})