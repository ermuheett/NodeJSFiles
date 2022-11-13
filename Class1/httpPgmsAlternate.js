

const { resolvePtr } = require('dns');
const http = require('http')



console.log("Creating a Server ");

//const dataControl = (req, resp) => {

//function dataControl(req,resp){

http.createServer((req,resp) => {

    resp.write ("<font face = 6> This is the heading Five </font>")
    for (var i = 1; i< 6; i ++){

        resp.write("<h" + i + "> This message is from the server to Muheet Ahmed Butt </h" + i + ">");
    }
    resp.end();

}).listen(4500);

//http.createServer(dataControl).listen(4500);