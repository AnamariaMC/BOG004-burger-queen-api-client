import React from 'react'
import { Formik } from 'formik'
import hamburger from '../lib/hamburger.png'
import '../login.css'

const Formulario = () => {
	return (      
		<div className='contenedor'>
      <img className='hamburger' src={hamburger} alt="hamburger" />
      <Formik
        initialValues={{
          email:'',
          password:''
        }}
        validate={(valores) => {
          let errores = {};

          //validación email
          if(!valores.email){
            errores.email = 'Por favor ingresa un email'
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
              errores.email = 'El correo es incorrecto'
          }
          //validación contraseña
          if(!valores.password){
            errores.password = 'Por favor ingresa una contraseña'
          } else if (!/^(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/
          .test(valores.password)){
              errores.password = 'Debe tener minimo 6 letras y almenos un numero'
          }
          
          return errores;
        }}
        onSubmit={(valores) => {
          console.log(valores);
          console.log('Formulario enviado');
        }}
      >
        {({values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Correo</label>
              <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="usuario@bq.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              {touched.email && errors.email && <div className='error'>{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="******"
              value={values.placeholder}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              {touched.password && errors.password && <div className='error'>{errors.password}</div>}
            </div>
            <button type="submit">Ingresar</button>
          </form>
        )}
      </Formik>
		</div>
    
	);
}

export default Formulario;
