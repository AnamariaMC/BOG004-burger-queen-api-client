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
            authorization: 'Bearer ' + token,
      },
        
    })     
}

// Peticion para obtener la fecha actual
const getDateActual = () => {
  let dateActual= new Date();
  console.log('SOY FECHA', dateActual)
   return dateActual.getFullYear() +
    '-' +
    (dateActual.getMonth() + 1 )+
    '-' +
   dateActual.getDate() +
    ' ' +
    dateActual.getHours() +
    ':' +
    dateActual.getMinutes()
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
          status: 'pendings',
          dataEntry: getDateActual(),
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


const StatusOrder = (id, update, token) => {
  return axios.patch(url+'orders/'+ id, update, {
         headers: {
             "content-type": "application/json",
             authorization: 'Bearer ' + token
         }
     });
 }

 export { products, ordenPetition, getOrder, StatusOrder}