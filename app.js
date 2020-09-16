const { response } = require('express');
const express = require('express');
const fs = require('fs');
const { pathToFileURL } = require('url');
const app = express();


app.get('/about',function(req,res){
    res.sendFile('/public/about_us.html',{ root: __dirname });
});

app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));

/*function sayHello(name){
    console.log("Hello " + name);
}

sayHello("Daniel");*/