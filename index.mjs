import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const port = 8080;

app.post('/execute-code', (req, res) => {
    const code = req.body.code;
    const filePath = 'src/language/file.vy';
    fs.writeFileSync(filePath, code);

    // Implement code execution logic here (execute the code in the file)

    res.json({ message: 'Code executed successfully' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});