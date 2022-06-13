import React from 'react'
import { useForm } from 'react-hook-form'


export default function AddUserForm(props) {

  const {register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data, e) => {
    //console.log(data)
    props.addUser(data)
    
    //limpia los campos
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input type="text" name="name" {...register("name", {
                required: {value: true, message: 'Campo Requerido'}
            })}
       />
      <div>
        {errors?.name?.message}
      </div>
      <label>Rol</label>
      <input type="text" name="username" {...register("username", {
            required: {value: true, message: 'Campo Requerido'}
        })} />
      <div>
        {errors?.usarname?.message}
      </div>
      <button>Agregar</button>
    </form>
  )
}
