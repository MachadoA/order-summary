import React from 'react'
import './information.component.css'

export default function Information() {
  return (
    <div className="information">
        <img className='icon-music' src="/images/icon-music.svg" alt="icon music" />
        <div className="rows">
            <h2>Annual Plan</h2>
            <p>$59.99/year</p>
        </div>
        <a href='#' className='change' >Change</a>
    </div>


  )
}
