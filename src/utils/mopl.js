import Prism from 'prismjs';

Prism.languages['mopl'] = {
    // Whitespace
    'whitespace': /^\s+/,

    // Comments
    'comment': [
        /\/\/.*/,
        { pattern: /\/\*[\s\S]*?\*\//, greedy: true }
    ],

    // Semicolon, Curly Braces, Parenthesis, Dot, Square Brackets, Comma
    'punctuation': /(;|{|}|\(|\)|\.|\[|\]|,)/,

    // Keywords
    'keyword': /\b(let|if|else|true|false|null|while|do|for|def|return|class|extends|super|new|this)\b/,

    // Numbers and Strings
    'number': /\b\d+\b/,
    'string': /"[^"]*"|'[^']*'/,

    // Identifiers
    'identifier': /\b\w+\b/,

    // Equality Operators
    'equality-operator': /[=!]=/,

    // Assignment Operators
    'assignment-operator': /\/=|\*=|\+=|-=/,

    // Multiplicative Operators
    'multiplicative-operator': /[*/]/,

    // Additive Operators
    'additive-operator': /[+\-]/,

    // Relational Operators
    'relational-operator': /[><]=?/,

    // Logical Operators
    'logical-operator': /&&|\|\||!/,
};

Prism.languages.insertBefore('my-custom-language', 'keyword', {
    'punctuation': /(;|{|}|\(|\)|\.|\[|\]|,)/,
});