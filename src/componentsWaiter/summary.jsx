import React from 'react'
import { useCart } from 'react-use-cart'

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
     if (isEmpty) return <h1 className='text-cemter'>Resumen del pedido </h1>
  return (
    <section className='summary'>
      <h1 style={{color:"#f1f1f1"}}>productos ({totalUniqueItems}) total productos: ({totalItems}) </h1>
        {console.warn(items)}
      <table>
        <div className='orderSummary'>
          {items.map((item,index)=>{
            return(
              <div key={index}>            
                <img src={item.image} style={{height:'5rem'}} alt="" />            
                {item.name}
                {item.price}
                ({item.quantity})
                <button 
                  className='remove'
                  onClick={()=> updateItemQuantity(item.id, item.quantity - 1)}
                > ➖ </button>
                <button 
                  className='add' 
                  onClick={()=> updateItemQuantity(item.id, item.quantity + 1)}
                > ➕ </button>
                <button 
                className='delete'
                onClick={()=> removeItem(item.id)} 
                > 🗑️ </button>
              </div>
            )
          })}
        </div>
      </table>
      <div>
        <div className='total'>
          <h2 style={{color:"#f1f1f1"}}>Precio Total: $ {cartTotal} </h2>
        </div>
        <div className='buttons'>
          <button className='btn-cancel'
          onClick={()=> emptyCart()}
          >Cancelar</button>  
          <button className='btn-confirm'
          
          >Confirmar</button>
        </div>
      </div>
  </section>
  )
}
