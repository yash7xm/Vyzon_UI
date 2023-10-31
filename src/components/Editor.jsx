import '../styles/Editor.css'

export default function Editor({disabled = false}) {
    return (
        <textarea id="codeArea" disabled={disabled}>
        </textarea>
    )
}