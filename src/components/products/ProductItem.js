import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";
const ProductItem = (props) => {
  const orderHandler = (e) => {
    e.preventDefault();
    console.log(props.id);
    props.onOrder((prevItemes) => {
      return [
        ...prevItemes,
        { id: props.id, title: props.title, price: props.price },
      ];
    });
  };
  return (
    <Fragment>
      <Link to={`/produnt-detail/${props.id}`}>
        <li className={classes["product__item"]}>
          <p className={classes["product__title"]}>{props.title}</p>
          <p className={classes["product__price"]}>{props.price}</p>
          <img
            src={props.image}
            alt="clothes"
            className={classes["product__img"]}
          ></img>
        </li>
      </Link>
      <button onClick={orderHandler}>Order Now</button>
    </Fragment>
  );
};
export default ProductItem;
