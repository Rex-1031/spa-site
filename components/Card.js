import React from 'react'
import projectImg1 from '../assets/projectImg1.jpg'
import '../App.css'

const Card = () => {

  return (
        <div className='card'>
            <img className='card-img ' src={projectImg1}></img>
            <div className='card-content'>
                <h3>Project Title</h3>
                <p>Quis minim dolor voluptate irure laboris sunt dolor pariatur dolor. Excepteur ipsum irure magna duis culpa dolor esse. Amet ad ea laborum fugiat ullamco est voluptate ipsum aliquip. Aliqua sit ut reprehenderit consectetur nisi commodo duis in. Nisi minim tempor proident veniam anim reprehenderit. Sint ullamco exercitation sint consectetur. Nisi amet minim duis in velit mollit nulla qui incididunt occaecat cillum.</p>
            </div>
            <button className='btn-main'>Code</button>
            <button className='btn-main'>App</button>
        </div>

  )
}

export default Card