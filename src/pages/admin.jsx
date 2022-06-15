import React from 'react'
import { useState, useEffect } from 'react'
import '../css/admin.css'
import UserTablet from '../componentsAdmin/userTablet'
import AddUserForm from '../componentsAdmin/addUserForm'
import EditUserForm from '../componentsAdmin/editUserForm'
import { infoUser, createUser, editedUser  } from '../petitions'
import { useNavigate } from 'react-router'
import { BiLogOut } from 'react-icons/bi'
import logo from '../lib/logo.png'
import { Link } from 'react-router-dom'


export default function Admin() {  
  const navigate = useNavigate();
  
  const logOut=()=>{
    sessionStorage.clear();
    navigate('/')
  }

  const [users, setUsers] = useState([])
  const getInfoUsers = () =>{
      infoUser()
      .then((response)=>{
          setUsers(response.data.map((user)=>{
            return {
              id: user.id,
              email: user.email,
              password: user.password,
              rol: user.roles,
             }
          }))             
        })
        .catch((error)=>{
            console.log('soy el error ', error)
          })   
        }
        
        useEffect(()=> {       
         getInfoUsers()               
          }, [])       
                          
          
  //agregar usuarios, (se debe hacer la petición post)
  const addUser = (user) => {
     createUser(user)
    .then((response)=>{
      console.log('que responde addUser',response)
    })
    .catch((error)=>{
      console.log(error)
    })
    setUsers([
      ...users,
      user
    ])
  }

  //eliminar usuarios
  const deleteUser = (id) =>{
    const arrayFiterUser = users.filter(user => user.id !== id )
    setUsers(arrayFiterUser)
  }
  
  //editar usuarios
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null, email: '', password:'', rol:'',
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id, 
      email: user.email,
      password: user.password,
      rol: `${Object.keys(user.rol)}`,
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updateUser : user )))
  }


  return  (
    <>
     <nav className='logo-exit'>
      <img className='logo' src={logo} alt="logo"/>
       <Link to='/admin/user' style={{color:"#F1F1F1"}} > EMPLEADOS</Link>
       <Link to='/admin/product' style={{color:"#F1F1F1"}} > PRODUCTOS</Link>
       <BiLogOut style={{color:'#F1F1F1'} } className='iconLogout' onClick={logOut}/>
      </nav>
    <div className="container" >
      {/* <h1 style={{color:"#F1F1F1", fontSize: 'px', fontWeight: 'bold', textAlign: 'center' }}>VISTA DEL ADMINISTRADOR</h1> */}
      <div className="flex-row">
        <div className="flex-large">
          <h2 style={{color:"#F1F1F1", fontWeight: 'bold', textAlign: 'center' }}>Administrar Empleados</h2>
          <UserTablet
              users={users}
              deleteUser={deleteUser}              
              editRow={editRow}
          />
        </div>
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2 style={{color:"#F1F1F1", fontWeight: 'bold', textAlign: 'center' }}>Editar Empleados</h2>
                <EditUserForm
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
              <h2 style={{color:"#F1F1F1", fontWeight: 'bold', textAlign: 'center' }}>Agregar Empleados</h2>
              <AddUserForm addUser={addUser}/>
              </div>
            )
          }
        </div>
      </div>
    </div>
    </>
  )
}
