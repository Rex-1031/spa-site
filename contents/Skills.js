import React from 'react'
import '../App.css'
const mySkills =[ 'HTML', 'CSS', 'JavaScript', 'React JS', 'Node JS', 'Express', 'Redux', 'Figma', 'SQL']

const Skills = () => {
  return (
    <div className='condiv'>
        <h1 className='subtopic'>My Skills</h1>
        <ul>
            {
                mySkills.map(value =>{
                    return <li>{value}</li>
                })
            }
        </ul>
        
    </div>
  )
}

export default Skills