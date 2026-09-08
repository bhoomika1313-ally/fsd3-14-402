import http from "http";
//import * as teams from "teams.js";
import  {getAllTeams } from "./teams.js";
const PORT = 5000;

const server = http.createServer((req,res)=>{
    if(req.url === '/' && req.method === 'GET'){
        const teams = teams.getAllTeams();
        res.write(JSON.stringify(teams));
        res.end();
    }
    else{
        res.statusCode = 404;
        res.end();
    }
});

const  sendJson = (res, statusCode, data) => {
    res.writeHead(statusCode, {
        "Content-Type": "application/json",
    });
    res.end(data === "undefined"? "": JSON.stringify(data));
}

const parseJSONBody = (req) => {
    new Promise((resolve, reject) => {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            try {
                const parsedData = JSON.parse(body);    
                resolve(parsedData);
            } catch (error) {
                reject(error);
            }   
        });
    });
}   



server.listen(5000,()=>{
    console.log("server is running");
}); 


