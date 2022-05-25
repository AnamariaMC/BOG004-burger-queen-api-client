import axios from "axios";
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
 export { products }