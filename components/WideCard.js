import React from 'react'

const WideCard = ({title,where,from, to}) => {
  return (
    <div>
        <div className='widecard'>
            <div className='compdet'>
                <h3>{title}</h3>
                <h4 className='secondText'>{where}</h4>
                <h4 className='secondText'>{from}-{to}</h4>
            </div>
        </div>
    </div>
  )
}

export default WideCard