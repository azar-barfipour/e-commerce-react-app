import ProductItems from "../components/products/ProductItems";
const Products = (props) => {
  const orderCartHandler = (cartArr) => {
    props.onOrderToApp(cartArr);
  };
  const filterHandler = (word) => {
    props.onFilterName(word);
  };
  return (
    <ProductItems
      productItems={props.products}
      onOrderCart={orderCartHandler}
      onFilter={filterHandler}
    />
  );
};
export default Products;
