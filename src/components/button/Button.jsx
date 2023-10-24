import React from 'react'
import './button.component.css'


export default function Button() {
  return (
    <div>
      <button className='payment'>Proceed to Payment</button>
      <p className='cancel'>Cancel Order</p>
    </div>
  )
}
