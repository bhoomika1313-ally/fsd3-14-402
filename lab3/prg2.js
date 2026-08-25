import http from "http";
const server = http.createServer((req,res)=>{
    res.end("<h1 style='color: blue;'> welcome to server </h1>");
    res.writeHead(404,{"content-type":"text/plain"});
}); 


server.listen(4444,()=>{
    console.log("server is running");
}); 