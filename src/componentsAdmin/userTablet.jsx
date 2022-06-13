import React from 'react'

export default function UserTablet(props) {
  console.log(props.users)
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>          
          <th>Rol</th>          
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          props.users.length > 0 ?
          props.users.map((user, index) => (
            <tr key={index} >
              <td>{user.email}</td>              
              <td>{`${Object.keys(user.rol)}`}</td>
              <td>
                <button 
                className="button muted-button"
                onClick={
                  ()=> {props.editRow(user)}
                }                
                >
                  Editar
                </button>
                <button 
                  className="button muted-button"
                  onClick={() => {props.deleteUser(user.id)}}
                >
                  Eliminar</button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan={3}>No existen empleados</td>
            </tr>
          )
        }
      </tbody>
  </table>
  )
}
