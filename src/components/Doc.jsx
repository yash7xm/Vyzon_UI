import '../styles/Doc.css'
import Top from './Top'
import Editor from './Editor'

const docData = [
    {
        heading: '# Variable Declaration',
        info: 'In Vyzon, variables are declared using the let keyword.',
        code: `let a;  // Variable 'a' is declared and initialized with the default value of 0
                let b = 1;  // Variable 'b' is declared and initialized with the value 1
                let c = 'Hello, World!';`,
        fileName: 'Variable.vy'
    },
    {
        heading: '# Operators',
        info: `The logical operators are the same as in other programming languages. Ex: &&, ||, ! \n
        The relational operators are the same as in other programming languages. Ex: <, >, <=, >=, ==, != \n
        The arithmetic operators are the same as in other programming languages. Ex: +, -, *, /, %, ^ \n
        Assignment operators are the same as in other programming languages. Ex: =, +=, -=, *=, /=`,
        code: `let a;  // Variable 'a' is declared and initialized with the default value of 0
                let b = 1;  // Variable 'b' is declared and initialized with the value 1
                let c = 'Hello, World!';`,
        fileName: 'Operators.vy'
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