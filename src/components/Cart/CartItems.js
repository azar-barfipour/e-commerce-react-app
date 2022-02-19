import CartItem from "../Cart/CartItem";
const CartItems = (props) => {
  return (
    <ul>
      {props.cartItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
          />
        );
      })}
    </ul>
  );
};
export default CartItems;
