const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;






app.listen(port,()=>{
    console.log("Port"+port+" Starting....");
});







