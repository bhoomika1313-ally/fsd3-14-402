import express from 'express';

const app = express();

app.get("/about", (req,res) => {
    res.send("<h1> hello yay")
});
app.listen(3000, ()=> console.log ("server is running"));