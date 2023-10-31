import '../styles/Playground.css'
import Top from './Top'
import Editor from './Editor'

export default function Playground() {
    return (
        <div className="playground">
            <Top fileName={'app.vy'} />
            <Editor />
        </div>
    )
}