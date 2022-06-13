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
      <label>correo</label>
      <input type="text" name="email" {...register("email", {
                required: {value: true, message: 'Campo Requerido'}
            })}
       />
      <div>
        {errors?.email?.message}
      </div>
      <label>contraseña</label>
      <input type="text" name="passeword" {...register("passeword", {
                required: {value: true, message: 'Campo Requerido'}
            })}
       />
      <div>
        {errors?.passeword?.message}
      </div>
      <label>Rol</label>
      <input type="text" name="rol" {...register("rol", {
            required: {value: true, message: 'Campo Requerido'}
        })} />
      <div>
        {errors?.rol?.message}
      </div>
      <button>Agregar</button>
    </form>
  )
}
