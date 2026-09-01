import http from 'http';

const server = createServer((req,res)=> {
    if(req.url == "/" && req.method == "GET") {
        res.writeHead(200, {"content-type": "text/html"});
        res.end("<h1> product details </h1>");
    } 

    });