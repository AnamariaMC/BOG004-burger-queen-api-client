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

const ordenPetition = (token, items) =>{
  console.log('soy token', token)
  return axios({
    method: "POST",
    url:url+'orders',
    headers: {
      'content-type': 'application/json',
          authorization: 'Bearer ' + token.accessToken,
    },
    body: {
      id: 5,
      userId: getId(),
      client: "Carol Shaw",
      products: items, //cambiarlo por el formato requerido
      status: "pending",
      dateEntry: "2022-03-05 15:00" //cambiarlo por la fecha actual
    }
  })
}
 export { products, ordenPetition }