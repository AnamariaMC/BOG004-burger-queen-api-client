import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../lib/logo.png'

export default function Head(props) {
  return (
    <nav className='head'>
      <img className='logo' src={logo} alt="logo" />      
        <NavLink to='' style={{color:"#f1f1f1"}} activeClassName='active' >{props.text1}</NavLink>
        <NavLink to='' style={{color:"#f1f1f1"}} activeClassName='active' >{props.text2}</NavLink>       
    </nav>
  )
}

