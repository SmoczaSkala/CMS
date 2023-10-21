import React, { useState } from "react";
import { products } from "../../db/products";
import Cart from "../Cart/Cart";
import "./content.scss";

const Content = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const addToSelectedProducts = (product) => {
    const isProductInCart = selectedProducts.some(
      (item) => item.name === product.name
    );

    if (!isProductInCart) {
      setSelectedProducts([...selectedProducts, product]);
    } else {
      const updatedCart = selectedProducts.filter(
        (item) => item.name !== product.name
      );
      setSelectedProducts(updatedCart);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = selectedProducts.filter(
      (item) => item.name !== product.name
    );
    setSelectedProducts(updatedCart);
  };
  return (
    <div className="content">
      <h2>Our Offer</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="shop">
        {filteredProducts.map((product) => (
          <div className="product" key={product.name}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p className="descryption">{product.description}</p>
            <p>Price: ${product.price}</p>
            <button
              onClick={() =>
                addToSelectedProducts({
                  name: product.name,
                  price: product.price,
                })
              }
            >
              {selectedProducts.some((item) => item.name === product.name)
                ? "Delete from cart"
                : "Add to cart"}
            </button>
          </div>
        ))}
      </div>
      <Cart
        selectedProducts={selectedProducts}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default Content;
