import http from 'http';
const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('<h1> home page </h1>');
    } else if (req.url == '/about') {
    res.end('<h1> about page </h1>');
    } else if (req.url == '/product') 
    res.end('<h1> mobile phone </h1> <h2> price : 25000 </h2> <h3> discount: 20% </h3><a href="#"> g </a>');
    else {
    res.statusCode = 404;
    res.end('<h1> page not found </h1>');
    }});