import React from "react";
import "./Cart.scss";

const Cart = ({ selectedProducts, removeFromCart }) => {
  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + parseInt(item.price), 0);
    return total;
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {selectedProducts.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {selectedProducts.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <img
                  className="trash-icon"
                  onClick={() => removeFromCart(item)}
                  src="https://png.pngtree.com/png-clipart/20230805/original/pngtree-trash-can-flat-red-color-icon-recycle-dustbin-glyph-vector-picture-image_9756861.png"
                  alt="Remove"
                />
                {/* Alternatywa */}
                {/* <button onClick={() => removeFromCart(item)}>Remove</button> */}
              </li>
            ))}
          </ul>
        )}
      </div>
      <p>Total Price: ${calculateTotalPrice(selectedProducts)}</p>
    </div>
  );
};

export default Cart;
