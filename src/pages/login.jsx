import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router';
import {login, saveIdUser} from '../petitions'
import hamburger from '../lib/hamburger.png'
import '../login.css'

const Formulario = () => {

  const navigate = useNavigate(); 
 
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
            errores.password = 'Contraseña incorrecta'
          }          
          return errores;
        }}
       onSubmit ={(valores, { resetForm }) => {                  
          let data = { email: valores.email, password: valores.password };
          login(data)
          .then(function (response) { 
            saveIdUser(response.data)           
            console.log('que es saveIdUser:',saveIdUser(response.data));
            console.log('que responde:',response);
            const activeUser = JSON.parse(sessionStorage.user);
            const userRole = activeUser.user.roles;
           //Cambio de vistas con captura del id
            navigate(`/${Object.keys(userRole)}`, { replace: true })
          })
          .catch(function (error) {
            console.log('se fue al erro?: ',error);
          //   // aca el mensaje de correo y/o contraseña incorrectos
           })          
          console.log(valores.email, valores.password);
          console.log('Formulario enviado');  
          resetForm()                               
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
