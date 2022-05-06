import React from 'react'
import cardtop from './cardtop'
import cardbot from './cardbot'
import "../stryles/cardone.css"

function cardone() {
    return (
        <div className='container__cont-cards'>
            <cardtop/>
            <cardbot/>
        </div>
    )
}

export default cardone