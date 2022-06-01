import React from 'react'
import { getOrder } from '../orderpetitions';
import { useEffect, useState} from 'react';


export default function Chef() {
  const [order, setOrder] = useState([]); //array de objetos
  
  
  useEffect(() => { // useEffect es una función que se ejecuta cuando el componente se monta
    getOrder() // llamamos a la función products() que está en el provider
      .then((response) => { // cuando la función products() se ejecuta, se ejecuta la función then()
        console.log(response.data);
        localStorage.setItem("order",(response.data));
        setOrder(response.data); // guardamos los datos en el estado
      })
      .catch(() => {});
  },[]);

  return (
    <div>
      <h1 style={{color:"#f1f1f1"}} >Vista del Chef</h1>
    </div>
  )
}
