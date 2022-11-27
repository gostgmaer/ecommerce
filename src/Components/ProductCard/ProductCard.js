import React from "react";
import { Link } from "react-router-dom";
import './ProductCard.scss'
const ProductCard = ({ imagesData, Categories, Name, Type, ID
}) => {
 
  if (imagesData) {
    return (
      <Link className="link" to={`products/${ID}`}>
        <div className="card">
          <div className="image">
            <span className="newsesson">New Session</span>
            {imagesData.map((image,index)=>{
              return <img  className={`mainImage${index}`} src={image} key={index} alt={Name} />
            })}
          </div>
          <h4>{Name.substring(0,20)}</h4>
          <div className="prices">
            <h5>$ {ID}</h5>
            <h5>$ {ID}</h5>
          </div>
          </div>
      </Link>
    );
  }
 
};

export default ProductCard;
