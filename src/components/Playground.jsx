import '../styles/Playground.css'
import Top from './Top'
import Editor from './Editor'

export default function Playground({ onCodeChange }) {
    return (
        <div className="playground">
            <Top fileName={'app.vy'} />
            <Editor onCodeChange={onCodeChange} />
        </div>
    )
}