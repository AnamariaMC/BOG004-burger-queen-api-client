import { setNestedObjectValues } from 'formik';
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
      <button>Editar</button>
    </form>
  )
}