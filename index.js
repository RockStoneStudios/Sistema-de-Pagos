const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('public'));
app.engine("hbs",exphbs({
    extname:'.hbs',
    defaultLayout: 'main',
    partialsDir: path.join(__dirname,'Views/partials'),
    layoutsDir: path.join(__dirname,'Views/Layout'),
    
    
}));



app.set("view engine","hbs");

//Middlewares


app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routes

app.use(require('./Routers/index'));







app.listen(port,()=>{
    console.log("Port"+port+" Starting....");
});







