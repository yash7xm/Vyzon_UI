import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import execute from './src/language/run.js';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const port = 8080;

app.post('/execute-code', async (req, res) => {
    const code = req.body.code;
    const output = await execute(code);
    res.json({output});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});