import React from 'react'

import { useState } from 'react'
import '../css/admin.css'
import UserTablet from '../componentsAdmin/userTablet'
import AddUserForm from '../componentsAdmin/addUserForm'
import EditUserForm from '../componentsAdmin/editUserForm'
import { v4 as uuidv4 } from 'uuid';

export default function Admin() {
  const usersData = [
    { id: uuidv4(), name: 'Andrea', username: 'Mesera' },
    { id: uuidv4(), name: 'Carolina', username: 'Mesera' },
    { id: uuidv4(), name: 'Marcela', username: 'Chef' },
  ]

  const [users, setUsers] = useState(usersData)

  //agregar usuarios, (se debe hacer la peción post)
  const addUser = (user) => {
    user.id = uuidv4()
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
    id: null, name: '', username:''
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updateUser : user )))
  }


  return (    
    <div className="container" >      
      <h1>VISTA DEL ADMINISTRADOR</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Administrar Empleados</h2>
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
                <h2>Editar Empleados</h2>
                <EditUserForm
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
              <h2>Agregar Empleados</h2>
              <AddUserForm addUser={addUser}/>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
