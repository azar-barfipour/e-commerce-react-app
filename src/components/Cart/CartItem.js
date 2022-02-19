const CartItem = (props) => {
  return (
    <div>
      <li>
        <p>{props.title}</p>
        <p>{props.price}</p>
      </li>
    </div>
  );
};
export default CartItem;
