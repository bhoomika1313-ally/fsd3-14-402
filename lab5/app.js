
import express from 'express';

const app = express();

app.get("/about", (req, res) => {
    res.send("<h1> hello yay</h1>");
});

app.get('/about1', (req, res) => {
    res.send("WE ARE");
});

app.put('/user/update/1', (req,res)=>{
    res.send({msg: 'user update'})
})

app.post('/login', (req,res)=>{
    res.send({msg: 'user login'})
})

app.delete('/users/1', (req,res) => {
    res.send({msg:'remove user 1'})
})

app.use((req, res) => {
    res.status(404).send("not found");
});

app.listen(3333, () => console.log("server is running at 3333"));
