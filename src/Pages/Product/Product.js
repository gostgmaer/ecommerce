import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { singleproduct } from "../../Assets/Data/Data";
import { FaBalanceScale, FaCartPlus } from "react-icons/fa";
import { MdCompare, MdFavorite } from "react-icons/md";
import "./Product.scss";
const Product = () => {
  const [selectImage, setSelectImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const productID = Number(useParams().id);
  console.log(productID);

  return (
    <div className="Product">
      <div className="left">
        <div className="images">
          {singleproduct.imagesData.map((data, key) => {
            return (
              <img
                src={data}
                key={key}
                alt=""
                onClick={(e) => setSelectImage(key)}
              />
            );
          })}
        </div>
        <div className="mainImage">
         
          <img src={singleproduct.imagesData[selectImage]} alt="" />
        </div>
      </div>

      <div className="right">
        <h2>culpa nulla dolore irure non</h2>
        <span className="price">$199</span>
        <p>
        
          Voluptate sunt enim aliqua nostrud ipsum cupidatat et fugiat enim
          tempor laborum nulla et. Laborum deserunt culpa nulla dolore irure non
          esse ullamco cillum. Adipisicing ad id non occaecat magna amet. Sint
          laborum cillum nisi tempor cillum quis nulla.
        </p>
        <div className="quantity">
          <button
            onClick={(e) => setQuantity((prev) => (prev === 0 ? 0 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={(e) => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="addToCart">
          <FaCartPlus></FaCartPlus> Add to Cart
        </button>
        <div className="links">
          <div className="item">
            <MdFavorite></MdFavorite> Add to Wishlist
          </div>
          <div className="item">
            <FaBalanceScale></FaBalanceScale> Add to Compare
          </div>
        </div>
        <div className="info">
          <span>A perfect pair for your aerobic workout session.</span>
          <span>
            {" "}
            The high-quality durable textile upper is easy to maintain.
          </span>
          <span> The rubber sole provides traction on most surfaces.</span>
          <span>
            {" "}
            You can wear it with a polyester T-shirt and a pair of trackpants.
          </span>
        </div>
        <hr />
        <div className="details">
          <span>Description</span>
          <hr />
          <span>Additional Information</span>
          <hr />
          <span>FAQs</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
