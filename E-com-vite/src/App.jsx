import React, { useState } from "react";
import imageAvatar from "../src/images/image-avatar.png";

import QuantityManager from "./quantityManager";
import ImageButton from "./imageButton";

const increase = () => {
  let value = increasedValue;
  let increasedValue = value + 1;
};

const MainPage = () => {
  const [cartClick, setCartClick] = useState("hidden");
  return (
    <>
      <div className="header">
        {" "}
        <h1 className="main_head">sneakers</h1>
        <div className="tools">
          {" "}
          <a className="head-tags"> Collections</a>
          <a className="head-tags"> Men</a>
          <a className="head-tags"> Women</a>
          <a className="head-tags"> About</a>
          <a className="head-tags"> Contacts</a>
        </div>
        <div className="user">
          <span
            className="cart"
            onClick={() => {
              setCartClick("cart-container");
            }}
          >
            {" "}
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                // fill-rule="nonzero"
              />
            </svg>
          </span>
          <span className="user-img">
            <img className="user-main-img" src={imageAvatar} alt="" />
          </span>
        </div>
      </div>
      <main>
        <ImageButton />
        <div className="info-container">
          <div className="brand-head">
            <h1 className="brand-name">sneaker company</h1>{" "}
          </div>
          <div className="info-head">
            {" "}
            <h1 className="info-main-head">Fall Limited Edition Sneakers</h1>
          </div>
          <div className="product-discp">
            {" "}
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
          </div>
          <div className="pricing">
            <span className="shoe-price">$125.00</span>
            <span className="discount"> 50%</span>
            <span className="discounted-price">$250.00</span>
          </div>
          {/* this is where the quantity-managemnt.jsx gonna be */}
          <QuantityManager cartClick={cartClick} setCartClick={setCartClick} />
        </div>
      </main>
    </>
  );
};
export default MainPage;
