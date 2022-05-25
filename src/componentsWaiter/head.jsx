import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../lib/logo.png'

export default function Head(props) {
  return (
    <div>
    <nav className='head'>
      <img className='logo' src={logo} alt="logo" />      
        <Link to='/waiter/order' style={{color:"#f1f1f1"}} activeClassName='active' >{props.text1}</Link>
        <Link to='/waiter/list' style={{color:"#f1f1f1"}} activeClassName='active' >{props.text2}</Link>       
    </nav>
    <section>
      <Outlet />
    </section>
    </div>
  )
}

