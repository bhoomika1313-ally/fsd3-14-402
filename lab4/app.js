import http from "http";
//import * as teams from "teams.js";
import  {getAllTeams } from "./teams.js";
import {parse as parseURL} from "url";
const PORT = 5000;

/*const sendJson = (res, statusCode, data) => {
    res.writeHead(statusCode, {"content-type": "application/json"});
    res.end(data === "undefined"? " ": JSON.stringyfy({[keyword]:matchesGlob,data}));}
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
});*/

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
            body += chunk.toString();
        });
        req.on("end", () => {
            try {
                resolve(body ? JSON.parse(body): {})
            } catch (error) {
                reject(error);
            }   
        });
        req.on("error", reject);
    });
}   

const server = http.createServer((req, res) => {
    const {pathname, query } = parseURL(req.url, true);
    const {method} = req;
    console.log ("pathname", pathname);
    console.log("query", query);
    console.log("method", method);

    if (pathname === '/api/v1/teams' && method === 'GET'){
        let teams = getAllTeams();
        return sendJson(res, 200, teams);
    } 
    else if (pathname === "api/v1/teams" && method == "POST")  
    {
        const{tname, tl, members} =  parseJSONBody(req);
        if(!tname || !tl || !members){
            return sendJson(res, 400, {error: "Missing required fields"});
            const team = addTeam({tname, tl, members});
            return sendJson(res, 201, team);
        }

    }
        });


server.listen(5000,()=>{
    console.log("server is running");
}); 


