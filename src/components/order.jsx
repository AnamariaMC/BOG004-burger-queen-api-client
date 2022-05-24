import React from 'react'
import Products from './products'
import Summary from './summary'

export default function Order() {
  return (
    <div> 
      <div>
        <h1 style={{color:"#f1f1f1"}}>Estas son las ordenes </h1>
      </div>
      <div className='productos' >
        <Products />
      </div>
      <div className='resumen' >
        <Summary />
      </div>
  </div>
  )
}
