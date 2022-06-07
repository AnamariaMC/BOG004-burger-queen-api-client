import React from 'react'


export default function Items({products}) {    
  return (
    <div>
      {products.map((prod, index)=>{
          return(
              <div  key={index}>
                <p >🍴{prod.product.name}</p>
              </div>
          )
      })}
    </div>
  )
}
