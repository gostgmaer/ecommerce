import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { imgdata } from "./data";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
//   console.log(imgdata);

  imgdata.forEach((element) => {
    element["imagesData"] = element.Images.split(",");
  });
  console.log(imgdata);
  return (
    <div className="FeaturedProducts">
      <div className="top">
        <h3>{type} Products</h3>
        <p>
          Et nulla Lorem nisi esse consequat reprehenderit voluptate ut velit
          laborum dolor proident cupidatat. Quis ut aute magna pariatur pariatur
          sunt id consequat. Sint tempor duis laboris enim velit. Sunt occaecat
          occaecat consequat aute sunt deserunt. Ex consectetur fugiat ea fugiat
          mollit mollit nostrud qui. Ut esse magna non duis est nisi est irure
          est labore. Ut aute adipisicing amet ullamco ut occaecat consectetur
          aute enim consequat incididunt adipisicing ad. Qui ex id ipsum officia
          ut labore adipisicing. Excepteur excepteur voluptate nulla tempor id
          culpa Lorem.
        </p>
      </div>

      <div className="bottom">
        {imgdata.map((data)=>{
          // data["Regular price"]="reglar_price";
          console.log();
            return <ProductCard key={data.ID}  {...data} ></ProductCard>
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
