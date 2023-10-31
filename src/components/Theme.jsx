import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import '../styles/Theme.css'

export default function Theme() {
    return (
        <div className="theme">
            <div className="btn">
                <FontAwesomeIcon icon={faMoon} />
            </div>
        </div>
    )
}