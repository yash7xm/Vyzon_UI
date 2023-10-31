import '../styles/Playground.css'

export default function Playground() {
    return (
        <div className="playground">
            <div className="top">
                <div className="dots">
                    <div className="dot dot-1"></div>
                    <div className="dot dot-2"></div>
                    <div className="dot dot-3"></div>
                </div>
                <div className="file-name">
                    app.vy
                </div>
            </div>
            <textarea id="codeArea" cols="30" rows="10"></textarea>
        </div>
    )
}