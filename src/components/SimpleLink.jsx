import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function SimpleLink(props) {
    return (
        <div className='simple--link'>
            <p>{props.link}</p>
            <FontAwesomeIcon icon={faArrowRight} style={{color:"white"}}/>
        </div>
    )
}

export default SimpleLink