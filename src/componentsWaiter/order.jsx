import React from 'react'
import ProductsMenu from './products'
import Summary from './summary'
import { CartProvider } from 'react-use-cart'


export default function Order() {
  
  return (    
    <> 
      <CartProvider>
      <div>
        <h1 style={{color:"#f1f1f1"}}>Estas son las ordenes </h1>
      </div>
      <div className='productos' >
        <ProductsMenu  />
      </div>
      <div className='resumen' >
        <Summary />
      </div>
      </CartProvider> 
    </>     
  )
}
