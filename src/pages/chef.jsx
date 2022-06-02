import React from 'react'
import logo from '../lib/logo.png'
import SummaryOrders from "../componentsChef/SummaryOrders"
import SummaryReady from "../componentsChef/SummaryReady"

export default function Chef() {

  return (
    <>
      {/* <section className="{style.container}"> */}
        <img className='logo' src={logo} alt="logo"/>
        <div>
          <h1 style={{color:'#f1f1f1'} }> Vista del Chef </h1>
          <h2 style= {{color:"#f1f1f1", fontSize: '20px', fontWeight: 'bold', textAlign: 'center'}}> PEDIDOS PENDIENTES </h2>
          <SummaryOrders/>
        </div>
        <div>
        <SummaryReady/>

        </div>
        {/* </section> */}
    </>
      )
}


