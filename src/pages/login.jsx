import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <h1>Hola, Bienvenido al login</h1>
      <p>
      <Link to={'Waiter'}>Waiter</Link>
      </p>
      <p>
      <Link to={'Chef'}>Chef</Link>
      </p>
      <p>
      <Link to={'Admin'}>Admin</Link>
      </p>
    </div>
  )
}
