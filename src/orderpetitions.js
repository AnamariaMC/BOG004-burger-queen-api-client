import axios from "axios";
import { getId } from './petitions'

//import { getToken } from "./petitions";
const url = 'http://localhost:8080/';

// peticion para crear la orden con los productos
const products = (token) => {
    return axios({
      method: "GET", 
      url:url+'products', 
      headers: {
        'content-type': 'application/json',
            authorization: 'Bearer ' + token.accessToken,
      },
        
    })     
}

  
// Peticion para crear estructura de la orden
const ordenPetition = async (token, items, clients) =>{
  console.log('soy token', token)
  console.log('Soy getId', getId())
  
  return await axios({
    method: "POST",
    url:url+'orders',
    headers: {
      'content-type': 'application/json',
          authorization: 'Bearer ' + token.accessToken,
    },
    data: {    
          userId: getId(),
          client: clients,
          products: items,
          status: 'pending',
          dateEntry: new Date().toLocaleString('sv'),
          },
  
  })
}

// Peticion para obtener la orden
const getOrder = (token) => {
  //console.log('Soy getOrder', getOrder(token))
  return axios.get(url+'orders', {
      headers: {
        'content-type': 'application/json',
          authorization: 'Bearer ' + token,
      }
  });
}


const StatusOrder = async(orderId, token) => {
    
  return await axios({
      method: "PATCH",
      url:url+'orders/'+ orderId,
      headers: {
          'content-type': 'application/json',
          authorization: 'Bearer ' + token,
      },
      data: {
          status: 'delivering',
          dateProcessed: new Date().toLocaleString('sv'),
      }
  })
}

const statusDelivered = async(orderId, token) => {
  console.log('order id', orderId, 'token', token)
  return await axios({
      method: "PATCH",
      url:url+'orders/'+ orderId,
      headers: {
          'content-type': 'application/json',
          authorization: 'Bearer ' + token,
      },
      data: {
          status: 'delivered',
      }
  })
}

 export { products, ordenPetition, getOrder, StatusOrder, statusDelivered}