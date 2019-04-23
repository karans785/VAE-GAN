var express = require("express");
var app = express();

var bodyParser = require('body-parser')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

let {PythonShell} = require('python-shell')
sys = require('sys');

app.get('/',function(req,res){
    res.render("home.ejs",{data:null});
})


app.post('/result', function(req, res) {
    //console.log('body'+req.body);
    var arg1 = parseInt(req.body.epochs);
    var arg2 = parseInt(req.body.digit);
   
    var options = {
        mode: 'text',
        pythonPath: "C:/Users/Karan/Anaconda3/python.exe",
        pythonOptions: ['-u'],
        scriptPath: './',
        args: [arg1,arg2]
    };
    var shell = new PythonShell('GAN0.py', options);
    console.log("Python running!");
    PythonShell.run("GAN0.py "+arg1+" "+arg2, null, function (err, results) {
            // script finished
    });
    res.render("result.ejs");
});

app.listen(3000,process.env.IP,function(){
    console.log("Server started!");
});