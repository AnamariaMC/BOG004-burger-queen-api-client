import React from 'react'
import ComponentEstate from '../componentsChef/componentEstate';
import { getOrder } from '../orderpetitions';
import { getToken } from '../petitions';
import {  useState, useEffect } from 'react';

export default function List() {
  const [order, setOrder] = useState([]);
  const token = getToken()

  const orderReady= () => {
    getOrder(token.accessToken) // llamamos a la función products() que está en el provider
      .then((response) => { // cuando la función products() se ejecuta, se ejecuta la función then()
        const orderDelivering = response.data.filter((orden)=> orden.status === 'delivering');       
        setOrder(orderDelivering); // guardamos los datos en el estado
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  useEffect(()=>{
    orderReady()
  },[]);
  
  useEffect(() => { // useEffect es una función que se ejecuta cuando el componente se monta
    const interval = setInterval(()=>{
      orderReady()
    },3000)
    return () => clearInterval(interval)
  }, []);
  return (
    <>
    <div>
      <h2 style={{color:"#f1f1f1", fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}> PEDIDOS PENDIENTES POR ENTREGAR </h2>
    </div>
    <div className='containerSummayOrders'>
  {order.map((orders, index) => {
    return(
      <div key ={index}>
        <ComponentEstate totalOrders = {orders} />
        <button>ENTREGADO</button>
     </div>
       )
  })}
</div>
  </>
  )
}
