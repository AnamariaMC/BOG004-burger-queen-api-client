import React from 'react'
import Items from './Items'
import '../css/chef.css'

export default function StructureOrder({totalOrders}) {
    return (
        <div>
        <div className='containerOrders'>
          <div className='nameDate'>
            <p style={{color:'#FE8D06', fontWeight:'700'}}>{totalOrders.client}</p>
            <p style={{color:'#FE8D06', fontWeight:'700'}}>{totalOrders.dataEntry}</p>
          </div>
          <h5>Pedido:</h5>
            <Items style={{color:'#FE8D06', fontWeight:'700'}}
                products = {totalOrders.products}
            />
            <button className='btnListo' type='submit'>Listo</button>
            
        </div>
      </div> 
        
           )
       
    }