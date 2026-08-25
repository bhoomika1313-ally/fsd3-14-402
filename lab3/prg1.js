import http from "http";
const server = http.createServer((req,res)=>{
    res.write("<h1 style='color: blue;'> welcome to server </h1>");
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log(req.socket);
    res.end("hello");
});


//server.listen(4444,()=>{
    console.log("server is running");
//});

// or server.listen(PORT,()=>{console.log("server is running on port 5000")});

