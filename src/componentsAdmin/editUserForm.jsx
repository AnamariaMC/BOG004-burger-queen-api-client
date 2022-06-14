import React from 'react'
import { useForm } from 'react-hook-form'


export default function EditUserForm(props) {

  //console.log(props.currentUser)

  const {register, handleSubmit, formState: { errors }, setValue} = useForm({
    defaultValues:props.currentUser
  });

  setValue('name',props.currentUser.name);
  setValue('username',props.currentUser.username);

  const onSubmit = (data, e) => {
    //console.log(data)
    data.id = props.currentUser.id
   
    props.updateUser(props.currentUser.id, data)
    
    //limpia los campos
    e.target.reset();
  }

  return  (
    <form className='container-agregar' onSubmit={handleSubmit(onSubmit)}>
      <label style={{color:"#F1F1F1", fontSize: '20px'}}>Nombre</label>
      <input style={{color:"", fontSize: '20px', background:'#DFC020'}} type="text" name="name" {...register("name", {
                required: {value: true, message: 'Campo Requerido'}
            })}
       />
      <div className='msg-err'>
        {errors?.name?.message}
      </div>
      <label style={{color:"#F1F1F1", fontSize: '20px'}}>Rol</label>
      <input style={{color:"", fontSize: '20px', background:'#DFC020'}} type="text" name="username" {...register("username", {
            required: {value: true, message: 'Campo Requerido'}
        })} />
      <div className='msg-err'>
        {errors?.username?.message}
      </div>
      <button className='btn-Agregar'>Agregar Empleado</button>
    </form>
  )
}