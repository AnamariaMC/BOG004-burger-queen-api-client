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
const infoUser = async() => {
  console.log('que es getToken', getToken().accessToken)
  return await axios({
    method: "GET", 
    url:url+'users', 
    headers: {
      'content-type': 'application/json',
          authorization: 'Bearer ' + getToken().accessToken,
    },         
  })     
}
//PETICIÓN CREAR USUARIOS
const createUser = async(user) => {
  console.log('que es createUser', getToken().accessToken)
  const roleObject = {};
  roleObject[user.rol] = true;
  return await axios({
    method: "POST", 
    url:url+'users', 
    headers: {
      'content-type': 'application/json',
          authorization: 'Bearer ' + getToken().accessToken,
    },
    data: {         
      email: user.email,
      password: user.password,
      roles: roleObject,
    },         
  })     
}

//PETICIÓN EDITAR USUARIOS
const editedUser = async(user) => {
  console.log('que es createUser', getToken().accessToken)
  const roleObject = {};
  roleObject[user.rol] = true;
  return await axios({
    method: "PATCH", 
    url:url+'users', 
    headers: {
      'content-type': 'application/json',
          authorization: 'Bearer ' + getToken().accessToken,
    },
    data: {         
      email: user.email,
      password: user.password,
      roles: roleObject,
    },         
  })     
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
  createUser,
  editedUser,
}