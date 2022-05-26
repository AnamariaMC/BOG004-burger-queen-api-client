import '../css/product.css'
import { products } from '../orderpetitions';
import { getToken } from '../petitions';
import { useEffect, useState } from 'react';
import  Menu  from './menu'

export default function ProductsMenu({handleAddProduct}) {
  
  const [filteredProducts, setFilteredProducts] = useState([])
  const token = getToken();

  useEffect(()=>{
    products(token.accessToken) // llamamos a la función products() que está en el provider
    
    .then((response) => {        
        setFilteredProducts(response.data)        
      })
      .catch(() => {});
  }, []);

  return (
    <div className='ollProducts'>
      {/* <h2 style={{color:'#bde0fe'}}>menu de ordenes</h2> */}
      {filteredProducts.map((producto, index) => {
        return (
          <div className='productsMenu'>
            <Menu 
              key={index}
              id={producto.id}
              handleAddProduct={handleAddProduct}
              name={producto.name}
              price={producto.price}
              image={producto.image}              
              type={producto.type}
              item ={producto}
            />
          </div>
          );
        }
      )}
    </div>
  )

}
