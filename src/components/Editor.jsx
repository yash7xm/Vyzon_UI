import '../styles/Editor.css'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';

export default function Editor({ disabled = false, code }) {
    // const [liveCode, setLiveCode] = useState('');
    const [lineNumbers, setLineNumbers] = useState([]);

    const updateLineNumbers = (text) => {
        const lines = text.split('\n');
        setLineNumbers(new Array(lines.length).fill().map((_, i) => i + 1));
    };

    useEffect(() => {
        if(disabled && code) {
            updateLineNumbers(code);
        }
    }, [])

    const handleCodeChange = (event) => {
        const newText = event.target.value;
        // setLiveCode(newText);
        updateLineNumbers(newText);
    };

    return (
        <div className="editor-container">
            <div className="line-numbers">
                {lineNumbers.map((line, index) => (
                    <div key={index} className="line-number">
                        {line}
                    </div>
                ))}
            </div>
            <textarea id="codeArea" disabled={disabled} value={code} onChange={handleCodeChange}></textarea>
        </div>
    )
}

Editor.propTypes = {
    disabled: PropTypes.bool,
    code: PropTypes.string
}