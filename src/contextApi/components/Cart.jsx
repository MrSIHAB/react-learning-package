import { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
  const cart = useContext(CartContext);

  return (
    <div className="cart">
        <h1> Cart</h1>
      <div>
        {cart.items.map((e) => (
          <div className="cartItem">
            {e.name} - {e.price}
          </div>
        ))}
      </div>

      <div className="totalBill">Total Bill: {cart.items.reduce((a, b)=> a + b.price, 0)}</div>
    </div>
  );
};

export default Cart;
