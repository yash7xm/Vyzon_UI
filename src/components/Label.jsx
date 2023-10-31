import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import '../styles/Label.css'
import PropTypes from 'prop-types'

export default function Label({ heading }) {
    return (
        <div className="label">
            <div className="arrow">
                <FontAwesomeIcon icon={faArrowDown} />
            </div>
            <div className='text'>{heading}</div>
        </div>
    )
}

Label.propTypes = {
    heading: PropTypes.string
}