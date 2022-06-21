import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../lib/logo.png'
import { BiLogOut } from 'react-icons/bi'
import { useNavigate } from 'react-router'

export default function Head(props) {
  const navigate = useNavigate();
  
  // Funcion de cierre de sesión
  const logOut=()=>{
    sessionStorage.clear();
    navigate('/')
  }

  // Barra de navegacion de la vista del  mesero
  return (
    <div>
    <nav className='head'>
      <img className='logo' src={logo} alt="logo" />      
        <Link to='/waiter/order' style={{color:"#f1f1f1"}} >{props.text1}</Link>
        <Link to='/waiter/list' style={{color:"#f1f1f1"}} >{props.text2}</Link>
        <Link to='/waiter/delivered' style={{color:"#f1f1f1"}} >{props.text3}</Link>
        <BiLogOut style={{color:'#f1f1f1'} } className='iconLogout' onClick={logOut}/>       
    </nav>
      {/* Seccion donde se imprimir el contenido segun los links  */}
    <section>
      <Outlet /> 
    </section>
    </div>
  )
}

