import ProductItems from "../components/products/ProductItems";
const Products = (props) => {
  const orderCartHandler = (cartArr) => {
    props.onOrderToApp(cartArr);
  };
  return (
    <ProductItems
      productItems={props.products}
      onOrderCart={orderCartHandler}
    />
  );
};
export default Products;
