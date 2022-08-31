import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='condiv'>
        <h1 className='subtopic'>Contact Me</h1>
        <h3>Email</h3>
        <h4>You can also find me here:</h4>
        <div className='social-alt'>
            <a href='#' target="_blank" >
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='#' target="_blank" >
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    </div>
  )
}

export default Contact