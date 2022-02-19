import CartItems from "../components/Cart/CartItems";
const Cart = (props) => {
  return <CartItems cartItems={props.cartProducts} />;
};
export default Cart;
