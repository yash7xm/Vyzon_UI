import '../styles/Top.css'
import PropTypes from 'prop-types'

export default function Top({ fileName }) {
    return (
        <div className="top">
            <div className="dots">
                <div className="dot dot-1"></div>
                <div className="dot dot-2"></div>
                <div className="dot dot-3"></div>
            </div>
            <div className="file-name">
                {fileName}
            </div>
        </div>
    )
}

Top.propTypes = {
    fileName: PropTypes.string
}