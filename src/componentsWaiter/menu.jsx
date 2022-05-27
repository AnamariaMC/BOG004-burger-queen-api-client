import { useCart } from "react-use-cart";

const Menu = (props) => {
  const { addItem } = useCart();
  // const onClick = () => {
  //   props.handleAddProduct({name: props.name, price: props.price, id: props.id, type: props.type});
  // }

  return (
    <div className='product' 
    onClick={() =>addItem(props.item)}>
      
      <img src={props.image} alt={props.name} />
      <div className="product-name-price"> 
        <p>{props.name}</p>
        <p className='product-price'>${props.price}</p>
     </div>
      {/* <p>{props.type}</p> */}
    </div>
  );
};

export default Menu;