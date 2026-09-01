

import { createReadStream } from 'fs';
import http from 'http';

const server = http.createServer((req, res) => {

    if (req.url == '/') {

        const stream = createReadStream('./airtag.html', {
            encoding: 'utf-8'
        });

        stream.pipe(res);

    } 
    else if (req.url == '/mobile') {
        res.writeHead(200, { 'content-type': 'application/json' });
        const stream = createReadStream('./data/products.json', {
            encoding: 'utf-8'
        });
        stream.pipe(res);
    }
    else if (req.url == '/manual') {
        res.writeHead(200, { 'content-type': 'text/html' });
        const stream = createReadStream('./data/chatgpt.txt', {
            encoding: 'utf-8'
        });
        stream.pipe(res);
    } 


});

server.listen(3000, () => {
    console.log("Server is running at 3000 !!");
});

