import express from 'express';
import path from 'path';
import { fileURLToPath } from "node:url";


const app = express();
const port = 3333;

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
app.use(express.static(path.join(dirname, "fronend")));
app.use((req,res)=> {
    res.status(404).send("resource not found");
});


app.listen(port,()=> console.log(`pr2 is running at`, port)); 