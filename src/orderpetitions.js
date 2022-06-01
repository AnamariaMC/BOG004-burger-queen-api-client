import axios from "axios";
import { getId } from './petitions'

//import { getToken } from "./petitions";
const url = 'http://localhost:8080/';


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

const getOrder = (token) => {
  //console.log('Soy getOrder', getOrder(token))
  return axios.get(url+'orders', {
      headers: {
          authorization: 'Bearer ' + token,
      }
  });
}

 export { products, ordenPetition, getOrder}