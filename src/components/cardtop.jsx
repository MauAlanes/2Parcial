import React from 'react'
import "../stryles/cardtop.css"

function cardtop() {
  return (
    <div className='card-top__container'>
      <div className='number'><span>1</span></div>
      <span className='subtitle'>Agenda/Topic</span>
      <span className='codigo'>SAAS-0000</span>
      <div className='image'></div>
    </div>
  )
}

export default cardtop