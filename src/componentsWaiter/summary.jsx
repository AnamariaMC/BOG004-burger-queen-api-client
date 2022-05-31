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
    <h2 style={{ color: "#f1f1f1", fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}> RESUMEN DEL PEDIDO</h2>
    {console.warn(items)}
    <div>
      <h3 style={{ color: "#f1f1f1", fontWeight: 'bold', textAlign: 'center', justifyContent: 'space-between',  }}>Productos ({totalUniqueItems}) Total Productos: ({totalItems})</h3>
      
        <label style={{ color: "#000000", fontSize: '20px', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#DFC020' }}>Nombre del Cliente</label>
        <input type='text'
          name='client'
          className='client'
          value={clients}
          onChange={ event => setclients(event.target.value)}
          required></input>
          
         </div>

    <table className='summaryTable'>
      <tbody className='orderSummary'>
        {items.map((item, index) => {
          return (
            <tr key={index.toString()} className='contentSummary'>
              <td className='itemContent'>
                <img src={item.image} style={{ height: '5rem' }} alt="" />
              </td>
              <td style={{ color: "#f1f1f1", fontSize: '20px', fontWeight: 'bold' }}> {item.name} </td>
              <td > {item.price} </td>
              <td> ({item.quantity})</td>
              <td>
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
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
    <div>
      <div className='total'>
        <h2 style={{ color: "#f1f1f1" }}> Total: $ {cartTotal} </h2>
      </div>
      <div className='buttons'>
        <button className='btn-cancel'
          onClick={() => emptyCart()}
        >CANCELAR</button>
        <button className='btn-confirm'
          onClick={() => createOrder()}
        >CONFIRMAR</button>
      </div>
    </div>
  </section>
)
      }
