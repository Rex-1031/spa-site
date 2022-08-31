import React from 'react'
import WideCard from '../components/WideCard'

const Education = () => {
  return (
    <div className='condiv'>
        <h1 className='subtopic'>My Education</h1>
        <WideCard 
            title='Full Stack Web Developer' 
            where='Bloom Tech' 
            from='August 2020' 
            to='May 2022' 
        />
        <WideCard 
            title='Associate in Computer and Electronics Engineering Technology' 
            where='ITT Tech' 
            from='September 2002' 
            to='May 2004' 
        />
    </div>
  )
}

export default Education