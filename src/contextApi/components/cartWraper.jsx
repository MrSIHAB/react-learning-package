import Cart from "./Cart";
import Item from "./item";

import './cart.css'

import { CartContext } from "../context/Cart";
import { useContext } from "react";

const CartWraper = () => {
  const cart = useContext(CartContext)

  return (
    <div className="taskContainer e-comCart">
      <div className="itemContainer">
        <Item name="Laptop" price={1000} />
        <Item name="Pen Drive" price={25} />
        <Item name="S23 ultra" price={1990} />
        <Item name="Macbook Pro" price={2340} />
      </div>
      <Cart />
    </div>
  );
};

export default CartWraper