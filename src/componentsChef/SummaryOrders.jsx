import React from 'react'
import { getOrder } from '../orderpetitions';
import { useEffect, useState } from 'react';
import { getToken } from '../petitions';
import StructureOrder from './StructureOrder';
import '../css/chef.css'

export default function SummaryOrders() {
  const [order, setOrder] = useState([]); //array de objetos
  const token = getToken()

  const newOrder = () => {
    getOrder(token.accessToken) // llamamos a la función products() que está en el provider
      .then((response) => { // cuando la función products() se ejecuta, se ejecuta la función then()
        const orderPending = response.data.filter((orden)=> orden.status === 'pending');       
        setOrder(orderPending); // guardamos los datos en el estado
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(()=>{
    newOrder()
  },[]);
  
  useEffect(() => { // useEffect es una función que se ejecuta cuando el componente se monta
    const interval = setInterval(()=>{
      newOrder()
    },3000)
    return () => clearInterval(interval)
  }, []);
  

  return (
    <div className='containerSummayOrders'>
      {order.map((orders, index) => {
        return(
          <div className='structureOrder' key ={index}>
            <StructureOrder
            totalOrders = {orders}
         />
         </div>
           )
      })}
    </div>
  )};