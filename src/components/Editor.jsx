import '../styles/Editor.css'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react';

export default function Editor({ disabled = false, code }) {
    // const [liveCode, setLiveCode] = useState('');
    const [lineNumbers, setLineNumbers] = useState([]);
    const codeAreaRef = React.createRef();

    const updateLineNumbers = (text) => {
        const lines = text.split('\n');
        setLineNumbers(new Array(lines.length).fill().map((_, i) => i + 1));
    };

    useEffect(() => {
        if (disabled && code) {
            updateLineNumbers(code);
        }
    }, [])

    useEffect(() => {
        if (codeAreaRef.current) {
            codeAreaRef.current.addEventListener('scroll', () => {
                const codeArea = codeAreaRef.current;
                const lineNumbersContainer = codeAreaRef.current.previousSibling;
                lineNumbersContainer.scrollTop = codeArea.scrollTop;
            });
        }
    }, [codeAreaRef]);

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
            <textarea id="codeArea" disabled={disabled} value={code} onChange={handleCodeChange} ref={codeAreaRef}></textarea>
        </div>
    )
}

Editor.propTypes = {
    disabled: PropTypes.bool,
    code: PropTypes.string
}