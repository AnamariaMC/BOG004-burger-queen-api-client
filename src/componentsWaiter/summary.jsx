import '../css/summary.css'
import React, { useState } from 'react'
import { useCart } from 'react-use-cart'
// UseCart Hooks externo que permite manejo de estado del carro de compras
import { getToken } from '../petitions';
import { ordenPetition } from '../orderpetitions';

export default function Summary() {

  //Metodos de UseCart //
  const { isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity, 
    removeItem, 
    emptyCart, 
  } = useCart();

  const [clients, setclients,] = useState ('')
 // Funcion para crear nueva estructura de objeto //
  const creatObject =()=>{
    let total = localStorage.getItem('react-use-cart');
    let arrayItems = [];
    if (total !== null) {
      total = JSON.parse(total);
      
      total.items.forEach((item)=>{
        arrayItems.push(
          {
            "qty": item.quantity,
            "product": {
              "id": item.id,
              "name": item.name,
              "price": item.price,
              "image": item.image,
              "type": item.type,
              "dateEntry": item.dateEntry,
            }
          }
        )
      })
    }
    return arrayItems;
  }

  //--- Funcion para resolver peticion y crear orden
  const createOrder =() =>{
    const token = getToken();  
    const newObject = creatObject();
    
    ordenPetition(token, newObject, clients)
      .then((response)=> {
        return response;
      })
      .catch((error) => {
        return error;
      });
    emptyCart();
    
    //--- cambio de estado que limpia el input nombre cliente ---//
    const input = document.getElementById('orderClient');
    const e = {
      target: input
      }
    e.target.value = '';
    setclients(e.target.value)
  };

if (isEmpty) return <h1 className='text-center' style={{ color: "#f1f1f1", fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}> AGREGA LOS PRODUCTOS</h1>
return (
  <section className='summary'>
    <h3 style={{ color: "#f1f1f1", fontWeight: 'bold', textAlign: 'center', justifyContent: 'space-between',  }}>Productos ({totalUniqueItems}) Total Productos: ({totalItems})</h3>    
    <div className='container-client'>            
        <label className='name-client'>Nombre del Cliente</label>
        <input
                id = 'orderClient'
                type='text'
                name='client'
                className='client'              
                value={clients}
                onChange={event => setclients(event.target.value)}           
              >          
          </input>
          
    </div>
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
              {/*  Actualizar cantidad de items */}
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
      {/* Cancelar pedidos */}
        <button  className='btn-cancel' style={{fontWeight: 'bold'}}
          onClick={() => emptyCart()} 
        >CANCELAR</button>
        <button className='btn-confirm' style={{fontWeight: 'bold'}}
          onClick={() => createOrder()}
        >CONFIRMAR</button>
      </div>
    </div>
  </section>
)}
