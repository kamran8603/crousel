import React from 'react'

function Cart({ccart}) {
  return (
    <div>
      {
        ccart.map((item)=>(
          <div>
            <h1>{item.price}</h1>
            <h3>{item.title}</h3>
            </div>
        ))
      }
    </div>
  )
}

export default Cart