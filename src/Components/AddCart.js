import { useState } from "react";

export default function AddCart() {
  let menu = ["Burger", "Pizza", "Sandwitch"];
  const [cart, setCart] = useState({});
  let cartKeys = Object.keys(cart);
  function addToCart(item) {
    if (item in cart) {
      setCart({ ...cart, [item]: cart[item] + 1 });
    } else {
      setCart({ ...cart, [item]: 1 });
    }
  }
  return (
    <div className="App">
      <h2>Menu</h2>
      {menu.map((item) => (
        <li>
          {item}
          <button onClick={() => addToCart(item)}>Add To Cart</button>
        </li>
      ))}
      <h2>Cart</h2>
      {cartKeys.map((item) => (
        <li>{`${item} - ${cart[item]}`}</li>
      ))}
    </div>
  );
}
