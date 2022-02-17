const ProductDetailItem = (props) => {
  return (
    <li>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <p>{props.category}</p>
    </li>
  );
};
export default ProductDetailItem;
