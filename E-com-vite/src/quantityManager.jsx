import React, { useState } from "react";
import cart from "../src/images/icon-cart.svg";
import cross from "../src/images/icon-delete.svg";
import close from "../src/images/icon-close.svg";
const QuantityManager = ({ cartClick, setCartClick }) => {
  const [quantity, setQuantity] = useState(0);
  // const [classes, setClass] = useState("hidden");
  const cartItemfunction = () => {
    if (quantity > 0) {
      return (
        <div className="cart-item-main">
          <img
            className="image-shuffle"
            src="../src/images/image-product-1.jpg"
          />
          <div className="cart-info">
            <img
              src={cross}
              alt=" delete this mf"
              onClick={() => {
                setQuantity(0);
              }}
            />
            <h3>Fall Limited Edition Sneakers</h3>
            <div className="price-cart">
              $125.00 x{quantity} {quantity * 125}
            </div>
          </div>
          <button className="check-out-button">Check-out</button>
        </div>
      );
    } else {
      return <span>your cart is empty</span>;
    }
  };
  const cartFunction = () => {
    return <div className="cart-item">{cartItemfunction()}</div>;
  };
  return (
    <>
      {" "}
      <div className={cartClick}>
        <span
          onClick={() => {
            setCartClick("hidden");
          }}
        >
          <img src={close} alt="" />{" "}
        </span>
        <div className="cart-head">
          <h2 className="head-cart-first">Cart</h2>
        </div>
        {cartFunction()}
      </div>
      <div className="button-functions">
        <div className="quantity-manager">
          <button
            className="quantity-decrease"
            onClick={() => {
              if (quantity > 0) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <img src="../src/images/icon-minus.svg" />{" "}
          </button>
          <span id="quantity">{quantity}</span>
          <button
            className="quantity-increase"
            onClick={() => {
              {
                setQuantity(quantity + 1);
              }
            }}
          >
            {" "}
            <img src="../src/images/icon-plus.svg" />
          </button>
        </div>
        <div className="add-cart">
          {" "}
          <button
            className=" manage-cart"
            onClick={() => {
              // setClass("cart-container");
            }}
          >
            {" "}
            <img src={cart} /> Add to cart
          </button>
        </div>
      </div>
    </>
  );
};
export default QuantityManager;
