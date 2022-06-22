import { useCart } from "react-use-cart";
// Hooks externo que permite manejo de estado del carro de compras

const Menu = (props) => {

  const { addItem } = useCart();
 // Nos permite visualizar los productos: nombre, precio e imagen
  return (
    <div className='product' 
    onClick={() =>addItem(props.item)}>
      
      <img src={props.image} alt={props.name} className="imgProductos" />
      <div className="product-name-price"> 
        <p>{props.name}</p>
        <p className='product-price'>${props.price}</p>
     </div>
     </div>
  );
};

export default Menu;