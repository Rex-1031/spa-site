import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profile from '../assets/profile-1-bw.jpg';
import '../App.css'
const Home = ()=>{

    return (
        <div className='condiv home'>
            <img src={profile} className="profilepic" alt='avatar'></img>
            <ReactTypingEffect 
                className='typingeffect'
                text={['I am Steve Clair', 'I build Web Sites and Apps.']}
                speed={100}
                eraseDelay={700}
            />
        </div>
    )

}

export default Home