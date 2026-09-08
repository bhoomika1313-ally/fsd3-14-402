import http from 'http';

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.end('home page')
    }
    else if (req.url === '/product' && req.method === 'GET') {
        const products = [
            {
                "id": 1,
                "brand": "Apple",
                "model": "iPhone 16",
                "price": 79999,
                "storage": "128GB",
                "ram": "8GB",
                "display": "6.1 inch",
                "battery": "3561 mAh",
                "os": "iOS"
            },
            {
                "id": 2,
                "brand": "Samsung",
                "model": "Galaxy S25",
                "price": 74999,
                "storage": "256GB",
                "ram": "12GB",
                "display": "6.2 inch",
                "battery": "4000 mAh",
                "os": "Android"
            },
        ];
        res.end(JSON.stringify(products));
    }
    else if (req.url === '/product' && req.method === 'POST') {
        //retrieve data form client
        let body = "";
        req.on("data", (chunk) => {
            body += chunk
        })

        req.on("end", () => {
            const product = JSON.parse(body)
            res.writeHead(201, {
            "content-type": "application/json",
        });
        //send back the status
        res.end(JSON.stringify({
            msg: "product added",
            product,
        }),
        );
        });

        //add data to database
        
    }
    else if (req.url === '/product' && req.method === 'PUT') {
        res.end('update product')
    }
    else if (req.url === '/product' && req.method === 'DELETE') {
        res.end('remove product')
    }

});

server.listen(4000, () => {
    console.log("server on 4000...");
});