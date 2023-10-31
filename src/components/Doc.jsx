import '../styles/Doc.css'
import Top from './Top'
import Editor from './Editor'

export default function Doc() {
    return (
        <div className="doc">
            <div className="heading">
                # Variable Declaration
            </div>
            <div className="info">
                <p>In Vyzon, variables are declared using the let keyword.
                </p>
            </div>
            <div className="example">
                <Top fileName={'Variable.vy'} />
                <Editor disabled={true} />
            </div>
        </div>
    )
}