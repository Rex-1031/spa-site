import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  
    faFacebookF , 
    faGithub,
    faTwitter,
    faInstagram,
    faLinkedin,

} from '@fortawesome/free-brands-svg-icons';
import '../App.css'


const Social = () => {
  return (
    <div className='social'>
        <a href='#' target="_blank" >
            <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href='#' target="_blank" >
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='#' target="_blank" >
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href='#' target="_blank" >
            <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href='#' target="_blank" >
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
    </div>
  )
}

export default Social