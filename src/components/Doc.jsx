import '../styles/Doc.css'
import Top from './Top'
import Editor from './Editor'

const docData = [
    {
        heading: '# Variable Declaration',
        info: '=> In Vyzon, variables are declared using the let keyword.',
        code: `let a;  // Variable 'a' is declared and initialized with the default value of 0\nlet b = 1;  // Variable 'b' is declared and initialized with the value 1\nlet c = 'Hello, World!';`,
        fileName: 'Variable.vy'
    },
    {
        heading: '# Operators',
        info: `=> The operators are the same as in other programming languages. Ex: &&, ||, !, <, >, <=, >=, ==, !=, +, -, *, /, %, ^, =, +=, -=, *=, /=`,
        code: `let a;  // Variable 'a' is declared and initialized with the default value of 0\nlet b = 1;  // Variable 'b' is declared and initialized with the value 1\nlet c = 'Hello, World!';`,
        fileName: 'Operators.vy'
    },
    {
        heading: '# Function',
        info: `=> You can declare functions in Vyzon using the def keyword, followed by the function name and parameters enclosed in parentheses. The function body is defined in a block. To call a function, use its name followed by parentheses, passing any required arguments.`,
        code: `def greet(name) { \nwrite("Hello, " + name + "!");\n}\n\ngreet("Alice"); // Calls the greet function with "Alice" as an argument.`,
        fileName: 'Function.vy'
    },
    {
        heading: '# Conditionals',
        info: `=> Vyzon supports conditional statements for decision-making in your code. You can use the if, elif, and else statements to execute different blocks of code based on specific conditions.`,
        code: `let x = 10;\n\nif (x > 15) {\n\twrite("x is greater than 15");\n} elif (x > 5) {\n\twrite("x is greater than 5 but not greater than 15");\n} else {\n\twrite("x is not greater than 5");\n}`,
        fileName: 'Conditionals.vy'
    },
    {
        heading: '# Loops',
        info: `=> Vyzon supports various loop types to suit your needs. You can use for, while, and do while loops to control the flow of your Vyzon programs by repeating code as needed.`,
        code: `write("Using the for loop:");\nfor (let i=0; i<10; i+=1) {\n\t write("Current value of i: ", i);\n}\n\nwrite("Using the while loop:");\nlet j = 0;\nwhile (j < 5) {\n\twrite("Current value of j: ", j);\n\tj = j + 1;\n}\n\nwrite("Using the do-while loop:");\nlet k = 0;\ndo {\n\twrite("Current value of k: ", k);\n\tk = k + 1;\n} while (k < 5);`,
        fileName: 'Loops.vy'
    },
]

export default function Doc() {
    return (
        <div className="doc">
            {docData.map((data, index) => (
                <div className="doc-item" key={index}>
                    <div className="heading">{data.heading}</div>
                    <div className="info">
                        <p>{data.info}</p>
                    </div>
                    <div className="example">
                        <Top fileName={data.fileName} />
                        <Editor disabled={true} code={data.code} />
                    </div>
                </div>
            ))}
        </div >
    )
}