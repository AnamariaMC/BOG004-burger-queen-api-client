import axios from "axios";
const url = 'http://localhost:8080/'

// Validación del ingreso con axios
const login = (data) => {
  return axios.post(url+'login', data);
};
// FUNCION PARA GUARDAR USUARIO LOGUEADO EN SESSIONSTORAGE
const saveIdUser = (user) => {
  sessionStorage.setItem('user', JSON.stringify(user));
};
const getUser = (user) => {
  return axios.post(url+'users', user);
}
export {
  login,
  saveIdUser,
  getUser
}



 