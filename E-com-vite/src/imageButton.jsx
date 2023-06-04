import React, { useState } from "react";
import RealView from "./realView";
import image1 from "../src/images/image-product-1.jpg";
import previous from "../src/images/icon-previous.svg";
import next from "../src/images/icon-next.svg";
import image2 from "../src/images/image-product-2.jpg";
import image3 from "../src/images/image-product-3.jpg";
import image4 from "../src/images/image-product-4.jpg";

const ImageButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [mainImg, setImage] = useState(1);
  return (
    <div className="image-container-main">
      <div className="image-container" n>
        <div className="main-image">
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
          <div
            className="main-image-cover"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <img
              className="shuffle-main-image"
              src={`../src/images/image-product-${mainImg}.jpg`}
            />
          </div>
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
      </div>
      <div className="toggle-image">
        <button className="image-shuffle" id="image-suf-1">
          {" "}
          <img
            className="image-inner"
            src={image1}
            alt=""
            onClick={() => {
              setImage(1);
            }}
          />
        </button>
        <button
          className="image-shuffle"
          id="image-suf-2"
          onClick={() => {
            setImage(2);
          }}
        >
          {" "}
          <img className="image-inner" src={image2} alt="" />
        </button>
        <button
          className="image-shuffle"
          id="image-suf-3"
          onClick={() => {
            setImage(3);
          }}
        >
          <img className="image-inner" src={image3} alt="" />
        </button>
        <button
          className="image-shuffle"
          id="image-suf-4"
          onClick={() => {
            setImage(4);
          }}
        >
          {" "}
          <img className="image-inner" src={image4} alt="" />
        </button>
      </div>
      {isOpen && <RealView isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};
export default ImageButton;
