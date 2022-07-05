import '../css/product.css'
import { products, } from '../orderpetitions';
import { getToken } from '../petitions';
import { useEffect, useState } from 'react';
import  Menu  from './menu'

export default function ProductsMenu({handleAddProduct}) {
  
  // Variable de estado para productos seleccionados
  const [filteredProducts, setFilteredProducts] = useState([])
 
  const token = getToken();

  // El componente debe ejecutar/ resolver la promesa despues de renderizarse
  useEffect(()=>{ 
    products(token) // llamamos a la función products() que está en el provider
    
    .then((response) => {        
        setFilteredProducts(response.data)        
      })
      .catch(() => {});
  }, [token]);


  // Retorna el menu componente con  todos los productos
  return (
    <div className='ollProducts'>
     {filteredProducts.map((producto, index) => {
        return (
          <div key={index.toString()} className='productsMenu'>
             <Menu 
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
