import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";
const ProductItem = (props) => {
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
    </Fragment>
  );
};
export default ProductItem;
