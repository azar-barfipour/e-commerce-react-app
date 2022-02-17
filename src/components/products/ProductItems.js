import ProductItem from "./ProductItem";
import classes from "./ProductItems.module.css";

const ProductItems = (props) => {
  return (
    <div className={classes["product-wrapper"]}>
      <ul className={classes["product__items"]}>
        {props.productItems.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              description={item.description}
              category={item.category}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default ProductItems;
