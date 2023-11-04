import Parser from './parser.js'
import Interpreter from './interpreter/Interpreter.js'

const parser = new Parser();
const interpreter = new Interpreter();

import fs from 'fs'
const directory = './';

fs.readdir(directory, (err, files) => {
    if (err) {
        console.error(`Error reading directory: ${err}`);
        return;
    }

    const vyFile = files.find(file => file.endsWith('.vy'));

    if (!vyFile) {
        console.error('No .pynot files found in the directory.');
        return;
    }

    const filePath = `${directory}/${vyFile}`;

    fs.readFile(filePath, 'utf8', (readErr, data) => {
        if (readErr) {
            console.error(`Error reading ${filePath}: ${readErr}`);
            return;
        }

        let code = data;

        const ast = parser.parse(code);
        interpreter.interpret(ast.body);
    });
});