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
        setOrder(response.data); // guardamos los datos en el estado
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  useEffect(() => { // useEffect es una función que se ejecuta cuando el componente se monta
    newOrder()
  }, [token.accessToken, order]);
  

  return (
    <div className='containerSummayOrders'>
      {order.map((orders, index) => {
        return(
          <div key ={index}>
            <StructureOrder
            totalOrders = {orders}
         />
         </div>
           )
      })}
    </div>
  )};