import '../styles/Result.css'
import Top from './Top'
import Editor from './Editor'

export default function Result({res}) {
    return (
        <div className="result">
            <Top fileName={'output'} />
            <Editor disabled={true} code={res}/>
        </div>
    )
}