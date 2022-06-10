import React from 'react'
import { useEffect, useState } from 'react';
import { getToken } from '../petitions';
import { getOrder } from '../orderpetitions';
//import ComponentEstate from '../componentsChef/componentEstate';

export default function Delivered() {
  const [orderDelivered, setOrderDeliveres] = useState([]);
  const token = getToken()

  const orderReady= () => {
    getOrder(token.accessToken) // llamamos a la función products() que está en el provider
      .then((response) => { // cuando la función products() se ejecuta, se ejecuta la función then()
        const orderDelivered = response.data.filter((orden)=> orden.status === 'delivered');       
        setOrderDeliveres(orderDelivered); // guardamos los datos en el estado
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
    <div className='title'>
      <h2 style={{color:"#f1f1f1", fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}> PEDIDOS ENTREGADOS </h2>
    </div>
    <table className='table'>
            <thead>
              <tr style={{color:"#f1f1f1", fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>
                <th>Cliente</th>
                <th>Hora Inicial</th>
                <th>Hora Entrega</th>
                
              </tr>
            </thead>
            <tbody>            
            {
              orderDelivered.map((order)=>{
                console.log('que es',order)
                return(
                  <tr style={{color:"#f1f1f1", fontSize: '15px', fontWeight: 'bold', textAlign: 'center' }}>
                    <th>{order.client}</th>
                    <th>{order.dateEntry}</th>
                    <th>{order.dateProcessed}</th>                    
                  </tr>
                )
              })
            }
            </tbody>
        </table>   
  </>
  )
}
