import React from 'react'
import ProductsMenu from './ProductsMenu'
import Summary from './summary'
import { CartProvider } from 'react-use-cart'

// Componente que contiene el menu y la orden
export default function Order() {

  return (    
    <> 
      <CartProvider>      
      <div>
        <h1 style={{color:"#f1f1f1", fontSize:'30px', fontWeight:'bold', textAlign:'center'}}>MENU</h1>
        <ProductsMenu  />
      </div>
      <div className='resumen' >
      <h1 style={{color:"#f1f1f1", fontSize:'30px', fontWeight:'bold', textAlign:'center'}}>RESUMEN DEL PEDIDO</h1>
        <Summary />
      </div>
      </CartProvider> 
    </>     
  )
}
