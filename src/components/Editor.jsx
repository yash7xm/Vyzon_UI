import '../styles/Editor.css'
import PropTypes from 'prop-types'

export default function Editor({disabled = false, code}) {
    return (
        <textarea id="codeArea" disabled={disabled} value={code}>
        </textarea>
    )
}

Editor.propTypes = {
    disabled: PropTypes.bool,
    code: PropTypes.string
}