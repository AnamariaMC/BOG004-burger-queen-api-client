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
//PETICIÓN PARA CREAR USUARIO
const getUser = (user) => {
  return axios.post(url+'users', user);
}
//PETICIÓN PARA OBTENER INFO DE USUARIO
const infoUser = (user) => {
  return axios.get(url+'users', user);
}

const getUserData = () => {
  return JSON.parse(sessionStorage.getItem('user'));
}

const getToken = () => {
  return JSON.parse(sessionStorage.getItem('user'));;
  
}

const getId = () => {
 return getUserData().user.id;
}

export {
  login,
  saveIdUser,
  getUser,
  getUserData,
  getToken,
  getId,
  infoUser,
}