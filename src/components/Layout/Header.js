import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes["header-wrapper"]}>
      <div>LOGO</div>
      <ul className={classes["nav__list"]}>
        <NavLink to="/contact" className={classes["nav__link"]}>
          <li className={classes["nav__item"]}>contact</li>
        </NavLink>
        <NavLink to="/cart" className={classes["nav__link"]}>
          <li className={classes["nav__item"]}>cart(0)</li>
        </NavLink>
      </ul>
    </div>
  );
};
export default Header;
