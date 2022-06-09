import React from 'react'
import Items from './Items'
import '../css/chef.css'
// import { StatusOrder } from '../orderpetitions'
// import { getToken } from '../petitions'


export default function ComponentEstate({totalOrders}) {    
 
  return (
      <div>
      <div className='containerOrders'>
        <div className='nameDate'>
          <p style={{color:'#FE8D06', fontWeight:'700'}}>{totalOrders.client}</p>
          <p style={{color:'#FE8D06', fontWeight:'700'}}>{totalOrders.dateProcessed}</p>
        </div>
        <h5>Pedido:</h5>
          <Items style={{color:'#FE8D06', fontWeight:'700'}}
              products = {totalOrders.products}                
              qty = {totalOrders.quantity}

          />
          {/* <button className='btnListo' type='submit' id='btnListo'
          onClick={() =>newStatus(totalOrders.id)}
          >Listo</button>
          <status style={{color:'#FE8D06', fontWeight:'700'}} /> */}
      </div>
    </div> 
      
         )
     
  }