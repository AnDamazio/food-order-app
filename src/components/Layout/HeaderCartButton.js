import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    console.log(curNumber, item.amount);
    return curNumber + item.amount;
  }, 0);
  return (
    <CartContext.Provider value={cartCtx}>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </CartContext.Provider>
  );
};

export default HeaderCartButton;
