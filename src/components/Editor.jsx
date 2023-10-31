import '../styles/Editor.css'
import PropTypes from 'prop-types'

export default function Editor({disabled = false}) {
    return (
        <textarea id="codeArea" disabled={disabled}>
        </textarea>
    )
}

Editor.propTypes = {
    disabled: PropTypes.bool
}