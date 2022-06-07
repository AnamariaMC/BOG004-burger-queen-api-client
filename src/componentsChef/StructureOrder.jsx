import React from 'react'
import Items from './Items'
import '../css/chef.css'
import { StatusOrder } from '../orderpetitions'
import { getId, getToken } from '../petitions'


export default function StructureOrder({totalOrders}) {
    const productId = getId();
    const productToken = getToken();
    const newStatus = () => {
        StatusOrder(productId, productToken)
        .then((response) => {
            console.log('resuesta de newStatus', response)
        })
        .catch((error) => {
            console.log('Soy Error', error)
        })
    }
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
                qty = {totalOrders.quantity}

            />
            <button className='btnListo' type='submit' onClick={newStatus}>Listo</button>
            <status style={{color:'#FE8D06', fontWeight:'700'}} />
        </div>
      </div> 
        
           )
       
    }