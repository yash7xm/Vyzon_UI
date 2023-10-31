export default function Label({ heading }) {
    return (
        <div className="label">
            <div className="arrow">
                {/* <FontAwesomeIcon icon={faArrowDown} /> */}
            </div>
            <div className='text'>{heading}</div>
        </div>
    )
}