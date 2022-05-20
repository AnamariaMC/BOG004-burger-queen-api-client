import React from 'react'
import { Formik, Form, Field } from 'formik'
import hamburger from '../lib/hamburger.png'
import '../login.css'
import axios from 'axios';
const Apiurl = 'http://localhost:8080/'

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
          } else if (!/^([0-9]){6,}$/.test(valores.password)){
            errores.password = 'Debe tener minimo 6 letras y almenos un numero'
          }          
          return errores;
        }}
        onSubmit={(valores) => {
          let data = { email: valores.email, password: valores.password };
          let url = Apiurl + 'login'
          axios.post(url, data)
          .then(function (response) {
            console.log('que responde:',response);
          })
          .catch(function (error) {
            console.log('se fue al erro?: ',error);
          })
          
          console.log(valores.email, valores.password);
          console.log('Formulario enviado');
        }}
      >
        {({values, errors, touched}) => (
          <Form className="formulario">
            <div>
              <label htmlFor="email">Correo</label>
              <Field 
                type="email" 
                id="email" 
                name="email" 
                placeholder="usuario@bq.com"
                value={values.email}
              />
              {touched.email && errors.email && <div className='error'>{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <Field 
                type="password" 
                id="password" 
                name="password" 
                placeholder="******"
                value={values.placeholder}              
              />
              {touched.password && errors.password && <div className='error'>{errors.password}</div>}
            </div>
            <button type="submit">Ingresar</button>
          </Form>
        )}
      </Formik>
		</div>
    
	);
}

export default Formulario;
