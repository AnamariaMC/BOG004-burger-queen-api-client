import axios from "axios"
let url = 'http://localhost:8080/';

export function loginPetition() {
  let urlLogin = url +'login';
  return axios.get(urlLogin, {
    params: {
      email: '',
      password: '',
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })   
}

 