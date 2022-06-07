import React from 'react'
import logo from '../lib/logo.png'
import SummaryOrders from "../componentsChef/SummaryOrders"
import SummaryReady from "../componentsChef/SummaryReady"
import { useNavigate } from 'react-router'
import { BiLogOut } from 'react-icons/bi'

export default function Chef() {
  const navigate = useNavigate();
      const logOut=()=>{
        sessionStorage.clear();
        navigate('/')
      }

  return (
    <>
      <nav className='logo-exit'>      
        <img className='logo' src={logo} alt="logo"/>        
        <h2 style={{color:"#f1f1f1", fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}> BIENVENIDO CHEF </h2> 
        <BiLogOut style={{color:'#f1f1f1'} } className='iconLogout' onClick={logOut}/>
      </nav>
      <hr></hr>        
        <div>          
          <h2 style= {{color:"#f1f1f1", fontSize: '20px', fontWeight: 'bold', textAlign: 'center'}}> PEDIDOS PENDIENTES </h2>
          <SummaryOrders/>
        </div>
        <div>
        <SummaryReady/>
        </div>
        
    </>
      )
}


