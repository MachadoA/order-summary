import React from 'react'
import './button.component.css'


export default function Button() {
  return (
    <div>
      <button>Proceed to Payment</button>
      <a className='cancel'>Cancel Order</a>
    </div>
  )
}
