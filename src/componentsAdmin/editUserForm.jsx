import React from 'react'
import { useForm } from 'react-hook-form'
import { editedUser } from '../petitions';


export default function EditUserForm(props) {

  console.log(props.currentUser)

  const {register, handleSubmit, setValue, formState: { errors }} = useForm({
    defaultValues:props.currentUser
  });

  setValue('email',props.currentUser.email);
  setValue('password',props.currentUser.password);
  setValue('rol',props.currentUser.rol);

  const onSubmit = (data, e) => {
    data.rol = {
      [data.rol]:true
    }
    editedUser(data.id, data)
    .then((response)=>{
      return response
    })
    .catch((error)=>{
      return error
    })
    data.id = props.currentUser.id
    props.updateUser(props.currentUser.id, data)
    //limpia los campos
    e.target.reset();
  }
  return  (
    <form className='container-agregar' onSubmit={handleSubmit(onSubmit)}>
      <label >Correo</label>
      <input  type="text" name="email" {...register("email", {
                required: {value: true, message: 'Campo Requerido'}
            })}
       />
      <div className='msg-err'>
        {errors?.email?.message}
      </div>
      <label >Contraseña</label>
      <input type="password" name="password" {...register("password", {
            required: {value: true, message: 'Campo Requerido'}
        })} />
      <div className='msg-err'>
        {errors?.password?.message}
      </div>
      <label >Rol</label>
      <input  type="text" name="rol" {...register("rol", {
            required: {value: true, message: 'Campo Requerido'}
        })} />
      <div className='msg-err'>
        {errors?.rol?.message}
      </div>
      <button className='btnAdd'>Agregar Empleado</button>
    </form>
  )
}