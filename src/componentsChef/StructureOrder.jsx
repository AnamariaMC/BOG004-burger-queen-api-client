import React from 'react'
import Items from './Items'

export default function StructureOrder(props) {
    return (
        <div>
           <p>{props.name}</p>
            <p style={{color:'#FE8D06', fontWeight:'700'}}>{props.client}</p>
            <p style={{color:'#FE8D06', fontWeight:'700'}}>{props.date}</p>
            <p style={{color:'#FE8D06', fontWeight:'700'}}>{props.items.status}</p>
            <Items 
                products = {props.items.products}
            />
        </div>
           )
       
    }