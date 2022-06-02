import React from 'react'
import { getOrder } from '../orderpetitions';
// import { useEffect, useState} from 'react';
import { useEffect, useState } from 'react';
import { getToken } from '../petitions';
import StructureOrder from './StructureOrder';

export default function SummaryOrders() {
  const [order, setOrder] = useState([]); //array de objetos

  const token = getToken()
  useEffect(() => { // useEffect es una función que se ejecuta cuando el componente se monta
    getOrder(token.accessToken) // llamamos a la función products() que está en el provider
      .then((response) => { // cuando la función products() se ejecuta, se ejecuta la función then()
        // console.log(response.data);
        localStorage.setItem("order", (response.data));
        setOrder(response.data); // guardamos los datos en el estado
      })
      .catch(() => { });
  }, [token.accessToken, setOrder]);
// console.log('SOY LA ORDEN', order)
  return (
    <div>
      {order.map((orders, index) => {
        return(
          <div key ={index}>
            <StructureOrder
            date = {orders.dataEntry}
            client = {orders.client}
            items = {orders}
         />
         </div>
           )
      })}
    </div>
  )};