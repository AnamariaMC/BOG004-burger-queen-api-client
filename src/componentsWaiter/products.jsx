
import '../css/product.css'
import { products } from '../orderpetitions';
import { getToken } from '../petitions';
import { useEffect, useState } from 'react';
import  Menu  from './menu'

export default function ProductsMenu({handleAddProduct}) {
 
  const [productos, setProductos] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])
  const token = getToken();

  useEffect(()=>{
    products(token.accessToken) // llamamos a la función products() que está en el provider
    //console.log('token.accessToken ?',token.accessToken)
    //console.log('que trae products', products)  
    .then((response) => {
        setProductos(response.data); // actualizamos el estado
        //console.log(setProductos(response.data))
        setFilteredProducts(response.data)
        // console.log('set products',setFilteredProducts(response.data) )
      })
      .catch(() => {});
  }, []);

  return (
    <div className='ollProducts'>
      {/* <h2 style={{color:'#bde0fe'}}>menu de ordenes</h2> */}
      {filteredProducts.map((producto) => {
        return (
          <div className='productsMenu'>
            <Menu 
              key={"ord" + producto.id}
              id={producto.id}
              handleAddProduct={handleAddProduct}
              name={producto.name}
              price={producto.price}
              image={producto.image}
              type={producto.type}
            />
          </div>
          );
        }
      )}
    </div>
  )

}
