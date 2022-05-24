import React from 'react'
import '../css/product.css'

const Products = (props) => {
  const onClick = () => {
    props.handleAddProduct({name: props.name, price: props.price, id: props.id, type: props.type});
  }

  return (
    <div className='product' onClick={onClick}>
      <h1 style={{color:"#f1f1f1"}}>Aca estan los productos </h1>
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <p>${props.price}</p>
      <p>{props.type}</p>
    </div>
  );
};

export default Products;
