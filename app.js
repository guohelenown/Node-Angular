var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
//app.set("view engine", "ejs");

var books = ["a", "b", "c"];

app.get("/books", function(req,res){
	res.json(books);
   //res.render("books", {books: books});
});

app.post("/addnew", function(req, res){
    books.push(req.body.book);
    res.redirect("/");
})
/*
 app.get('*', function(req, res) {
        res.sendfile('./index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
*/

app.get('/', function(req,res) {
	res.render('index.ejs');
});

app.listen(3000, function(){
   console.log("Server started 3000...") ;
});