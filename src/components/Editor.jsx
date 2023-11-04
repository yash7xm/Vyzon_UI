import '../styles/Editor.css'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import '../styles/Highlight.css'
import '../utils/mopl'

export default function Editor({ disabled = false, code }) {
    const [liveCode, setLiveCode] = useState('');
    const [highlightedCode, setHighlightedCode] = useState('');
    const [lineNumbers, setLineNumbers] = useState([]);
    const codeAreaRef = React.createRef();
    const lineNumbersRef = React.createRef();
    const highlightedCodeRef = React.createRef();

    const updateLineNumbers = (text) => {
        const lines = text.split('\n');
        setLineNumbers(new Array(lines.length).fill().map((_, i) => i + 1));
    };

    useEffect(() => {
        if (disabled && code) {
            updateLineNumbers(code);
            const highlighted = Prism.highlight(code, Prism.languages.mopl, 'mopl');
            setHighlightedCode(highlighted);
        }
    }, [])

    useEffect(() => {
        const codeArea = codeAreaRef.current;
        const lineNumbersContainer = lineNumbersRef.current;
        const highlightedCodeContainer = highlightedCodeRef.current;

        const handleScroll = () => {
            const scrollTop = codeArea.scrollTop;
            lineNumbersContainer.scrollTop = scrollTop;
            highlightedCodeContainer.scrollTop = scrollTop;
            codeArea.scrollTop = scrollTop;
        };

        codeArea.addEventListener('scroll', handleScroll);

        return () => {
            codeArea.removeEventListener('scroll', handleScroll);
        };
    }, [codeAreaRef, lineNumbersRef, highlightedCodeRef]);

    const handleCodeChange = (event) => {
        const newText = event.target.value;
        updateLineNumbers(newText);

        setLiveCode(newText);

        const highlighted = Prism.highlight(newText, Prism.languages.mopl, 'mopl');
        setHighlightedCode(highlighted);
    };

    const handleHighlightClick = () => {
        if (codeAreaRef.current) {
            codeAreaRef.current.focus();
        }
    };

    return (
        <div className="editor-container">
            <div className="line-numbers" ref={lineNumbersRef}>
                {lineNumbers.map((line, index) => (
                    <div key={index} className="line-number">
                        {line}
                    </div>
                ))}
            </div>
            <div className="textarea">
                <textarea
                    id="codeArea"
                    disabled={disabled}
                    value={code}
                    onChange={handleCodeChange}
                    ref={codeAreaRef}>
                </textarea>
                <div className="highlighted-code" ref={highlightedCodeRef} onClick={handleHighlightClick}>
                    <pre>
                        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
                    </pre>
                </div>
            </div>
        </div>
    )
}

Editor.propTypes = {
    disabled: PropTypes.bool,
    code: PropTypes.string
}