import Parser from './parser.js'
import Interpreter from './interpreter/Interpreter.js'

const parser = new Parser();
const interpreter = new Interpreter();

import fs from 'fs'
const directory = './src/language/';
// let output = '';

export default function execute() {
    return new Promise((resolve, reject) => {
        fs.readdir(directory, (err, files) => {
            if (err) {
                console.error(`Error reading directory: ${err}`);
                reject(err);
                return;
            }

            const vyFile = files.find(file => file.endsWith('.vy'));

            if (!vyFile) {
                console.error('No .vy files found in the directory.');
                resolve('No .vy files found in the directory.');
                return;
            }

            const filePath = `${directory}/${vyFile}`;

            fs.readFile(filePath, 'utf8', (readErr, data) => {
                if (readErr) {
                    console.error(`Error reading ${filePath}: ${readErr}`);
                    reject(readErr);
                    return;
                }

                const code = data;
                const ast = parser.parse(code);
                const output = interpreter.interpret(ast.body);
                resolve(output);
                console.log(output)
            });
        });
    });
}