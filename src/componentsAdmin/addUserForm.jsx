import React from 'react'
import { useForm } from 'react-hook-form'


export default function AddUserForm({addUser}) {

  const {register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data, e) => {
    data.rol = {
      [data.rol]:true
    }
    //console.log(data)
    addUser(data)
    
    //limpia los campos
    e.target.reset();
  }

  return (
    <form className='form-add' onSubmit={handleSubmit(onSubmit)}>
      <label>correo</label>
      <input type="text" name="email" {...register("email", {
                required: {value: true, message: 'Campo Requerido'}
            })}
       />      
       <label>Contraseña</label>
      <input type="password" name="passsword" {...register("password", {
                required: {value: true, message: 'Campo Requerido'}
            })}
       />   
      <label>Rol</label>
      <input type="text" name="rol" {...register("rol", {
            required: {value: true, message: 'Campo Requerido'}
        })} />
      <div>
        {errors?.rol?.message}
      </div>
      <button className='btnAdd'>Agregar Empleado</button>
    </form>
  )
}
