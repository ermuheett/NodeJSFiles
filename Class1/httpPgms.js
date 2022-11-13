
const { resolvePtr } = require('dns');
const http = require('http')



console.log("Creating a Server ");


http.createServer((req,resp) =>{


    for (var i = 1; i< 6; i ++){

        resp.write("<h" + i + "> This message is from the server to Muheet Ahmed Butt </h" + i + ">");
    }

    resp.end();



}).listen(4500);