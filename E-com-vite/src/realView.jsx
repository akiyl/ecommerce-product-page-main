import React, { useState } from "react";
import image1 from "../src/images/image-product-1.jpg";
import image2 from "../src/images/image-product-2.jpg";
import image3 from "../src/images/image-product-3.jpg";
import image4 from "../src/images/image-product-4.jpg";
import previous from "../src/images/icon-previous.svg";
import next from "../src/images/icon-next.svg";

const RealView = ({ isOpen, setIsOpen }) => {
  const [realValue, setRealValue] = useState("");
  const [mainImg, setImage] = useState(1);

  return (
    <div className={"realView-main"}>
      <div className="black-background"></div>
      <span
        onClick={() => {
          setIsOpen(false);
        }}
      >
        {" "}
        <svg width="34" height="35" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#ffffff"
          />
        </svg>
      </span>
      <div className="hidden-main-img">
        {" "}
        <button
          className="image-change-left"
          onClick={() => {
            if (mainImg > 1) {
              setImage(mainImg - 1);
            }
          }}
        >
          {" "}
          <img src={previous} />
        </button>
        <img
          className="hidden-image-main-inner"
          src={`../src/images/image-product-${mainImg}.jpg`}
          alt=""
        />
        <button
          className="image-change-right"
          onClick={() => {
            if (mainImg < 4) {
              setImage(mainImg + 1);
            }
          }}
        >
          {" "}
          <img src={next} />
        </button>
      </div>
      <div className="toggle-image">
        <button className="image-shuffle" id="image-suf-1">
          {" "}
          <img
            className="image-inner"
            src={image1}
            onClick={() => {
              setImage(1);
            }}
            alt=""
          />
        </button>
        <button className="image-shuffle" id="image-suf-2" value={2}>
          {" "}
          <img
            className="image-inner"
            src={image2}
            onClick={() => {
              setImage(2);
            }}
            alt=""
          />
        </button>
        <button className="image-shuffle" id="image-suf-3" value={3}>
          <img
            className="image-inner"
            src={image3}
            onClick={() => {
              setImage(3);
            }}
            alt=""
          />
        </button>
        <button className="image-shuffle" id="image-suf-4" value={4}>
          {" "}
          <img
            className="image-inner"
            src={image4}
            onClick={() => {
              setImage(4);
            }}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default RealView;
