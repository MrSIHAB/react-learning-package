import { useContext } from "react";
import { CartContext } from "../context/Cart";

const Item = (prof) => {
  const cart = useContext(CartContext);
  return (
    <div className="itemCard">
      <h4>{prof.name}</h4>
      <p>Price: ${prof.price}</p>
      <button className="addCart btn taskBtn"
        onClick={() =>
          cart.setItems([...cart.items, { name: prof.name, price: prof.price }])
        }
      >
        Add to cart
      </button>
    </div>
  );
};

export default Item;
