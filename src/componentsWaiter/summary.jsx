import '../css/summary.css'
import React, { useState } from 'react'
import { useCart } from 'react-use-cart'
import { getToken } from '../petitions';
import { ordenPetition } from '../orderpetitions';
// import { useState } from 'react'
// import {useState} from 'react';
export default function Summary() {
  const { isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const [clients, setclients] = useState ('')

  const createOrder = () => {
    const token = getToken()
    ordenPetition(token, items, clients)
      .then((response) => {
        console.log(response)
      }).catch(() => {
      })
   
   emptyCart()
}

if (isEmpty) return <h1 className='text-center' style={{ color: "#f1f1f1", fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>RESUMEN DEL PEDIDO</h1>
return (
  <section className='summary'>
    {/* <h2 style={{ color: "#f1f1f1", fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}> RESUMEN DEL PEDIDO</h2>     */}
    <div className='container-client'>
      {/* <h3 style={{ color: "#f1f1f1", fontWeight: 'bold', textAlign: 'center', justifyContent: 'space-between',  }}>Productos ({totalUniqueItems}) Total Productos: ({totalItems})</h3> */}      
        <label>Nombre del Cliente</label>
        <input type='text'
          name='client'
          className='client'
          value={clients}
          onChange={ event => setclients(event.target.value)}
          required></input>
          
    </div>
    {/* <div className='title-table'>PRODUCTO  PRECIO  CANTIDAD</div> */}
    <section className='summaryTable'>       
        {items.map((item, index) => {
          return (
            <div key={index.toString()} className='contentSummary'>
              <figure>  
                <img src={item.image} style={{ height: '5rem' }} alt="" />
                <div style={{ color: "#f1f1f1", fontSize: '20px', fontWeight: 'bold' }}> {item.name} </div>
              </figure>
              
              <div > {item.price} </div>
              <div> ({item.quantity})</div>
              <div className='remove-add-delete'>
                <button
                  className='remove'
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                > ➖ </button>
                <button
                  className='add'
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                > ➕ </button>
                <button
                  className='delete'
                  onClick={() => removeItem(item.id)}
                > 🗑️ </button>
              </div>
            </div>
          )
        })}      
    </section>
    <div>
      <div className='total-summary'>
        <h2 style={{ color: "#f1f1f1" }}> Total: $ {cartTotal} </h2>
      </div>
      <div className='buttons'>
        <button  className='btn-cancel' style={{fontWeight: 'bold'}}
          onClick={() => emptyCart()} 
        >CANCELAR</button>
        <button className='btn-confirm' style={{fontWeight: 'bold'}}
          onClick={() => createOrder()}
        >CONFIRMAR</button>
      </div>
    </div>
  </section>
)
      }
