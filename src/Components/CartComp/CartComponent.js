import React from "react";
import { MdDelete } from "react-icons/md";
import { singleproduct } from "../../Assets/Data/Data";
import "./CartComponent.scss";
const data = [
  {
    ID: 66,
    Type: "simple",
    SKU: "",
    Name: "Divi Engine String Bag (Big Logo)",
    Published: 1,
    "Is featured?": 0,
    "Visibility in catalog": "visible",
    "Short description":
      "This fashionable string bag is made of 100% cotton. It is the perfect size for carrying your everyday essentials.",
    Description: "",
    "Date sale price starts": "",
    "Date sale price ends": "",
    "Tax status": "taxable",
    "Tax class": "",
    "In stock?": 1,
    Stock: "",
    "Low stock amount": "",
    "Backorders allowed?": 0,
    "Sold individually?": 0,
    "Weight (kg)": "",
    "Length (cm)": "",
    "Width (cm)": "",
    "Height (cm)": "",
    "Allow customer reviews?": 1,
    "Purchase note": "",
    "Sale price": "",
    "Regular price": 19.99,
    Categories: "Accessories",
    Tags: "",
    "Shipping class": "",
    Images:
      "https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg, https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1-1.jpg, https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1-2.jpg",
    "Download limit": "",
    "Download expiry days": "",
    Parent: "",
    "Grouped products": "",
    Upsells: "",
    "Cross-sells": "",
    "External URL": "",
    "Button text": "",
    Position: 0,
    "Attribute 1 name": "Brand",
    "Attribute 1 value(s)": "Divi Engine",
    "Attribute 1 visible": 1,
    "Attribute 1 global": 1,
    "Meta: _et_pb_post_hide_nav": "default",
    "Meta: _et_pb_page_layout": "et_right_sidebar",
    "Meta: _et_pb_side_nav": "off",
    "Meta: _et_pb_use_builder": "",
    "Meta: _et_pb_first_image": "",
    "Meta: _et_pb_truncate_post": "",
    "Meta: _et_pb_truncate_post_date": "",
    "Meta: _et_pb_old_content": "",
    "Attribute 1 default": "",
    "Attribute 2 name": "",
    "Attribute 2 value(s)": "",
    "Attribute 2 visible": "",
    "Attribute 2 global": "",
    "Attribute 2 default": "",
    "Attribute 3 name": "",
    "Attribute 3 value(s)": "",
    "Attribute 3 visible": "",
    "Attribute 3 global": "",
    "Attribute 3 default": "",
    imagesData: [
      "https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg",
      " https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1-1.jpg",
      " https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1-2.jpg",
    ],
  },{
    "ID": 70,
    "Type": "simple",
    "SKU": "",
    "Name": "Divi Engine String Bag (Small Logos)",
    "Published": 1,
    "Is featured?": 0,
    "Visibility in catalog": "visible",
    "Short description": "This fashionable string bag is made of 100% cotton. It is the perfect size for carrying your everyday essentials.",
    "Description": "",
    "Date sale price starts": "",
    "Date sale price ends": "",
    "Tax status": "taxable",
    "Tax class": "",
    "In stock?": 1,
    "Stock": "",
    "Low stock amount": "",
    "Backorders allowed?": 0,
    "Sold individually?": 0,
    "Weight (kg)": "",
    "Length (cm)": "",
    "Width (cm)": "",
    "Height (cm)": "",
    "Allow customer reviews?": 1,
    "Purchase note": "",
    "Sale price": "",
    "Regular price": 19.99,
    "Categories": "Accessories",
    "Tags": "",
    "Shipping class": "",
    "Images": "https://ajax-filters-bc.diviengine.com/sampledata/images/Bag2.jpg, https://ajax-filters-bc.diviengine.com/sampledata/images/Bag2-1.jpg, https://ajax-filters-bc.diviengine.com/sampledata/images/Bag2-2.jpg",
    "Download limit": "",
    "Download expiry days": "",
    "Parent": "",
    "Grouped products": "",
    "Upsells": "",
    "Cross-sells": "",
    "External URL": "",
    "Button text": "",
    "Position": 0,
    "Attribute 1 name": "Brand",
    "Attribute 1 value(s)": "Divi Engine",
    "Attribute 1 visible": 1,
    "Attribute 1 global": 1,
    "Meta: _et_pb_post_hide_nav": "default",
    "Meta: _et_pb_page_layout": "et_right_sidebar",
    "Meta: _et_pb_side_nav": "off",
    "Meta: _et_pb_use_builder": "",
    "Meta: _et_pb_first_image": "",
    "Meta: _et_pb_truncate_post": "",
    "Meta: _et_pb_truncate_post_date": "",
    "Meta: _et_pb_old_content": "",
    "Attribute 1 default": "",
    "Attribute 2 name": "",
    "Attribute 2 value(s)": "",
    "Attribute 2 visible": "",
    "Attribute 2 global": "",
    "Attribute 2 default": "",
    "Attribute 3 name": "",
    "Attribute 3 value(s)": "",
    "Attribute 3 visible": "",
    "Attribute 3 global": "",
    "Attribute 3 default": "",
    "imagesData": [
        "https://ajax-filters-bc.diviengine.com/sampledata/images/Bag2.jpg",
        " https://ajax-filters-bc.diviengine.com/sampledata/images/Bag2-1.jpg",
        " https://ajax-filters-bc.diviengine.com/sampledata/images/Bag2-2.jpg"
    ]
}
];

const CartComponent = () => {
  console.log(singleproduct);
  return (
    <div className="CartComponent">
      <h2>Product in your cart</h2>
      {data?.map((item) => {
        return (
          <div className="item" key={item.ID}>
            <img src={item.imagesData[0]} alt="" />
            <div className="details">
              <h3>{item.Name}</h3>
              <p>{item["Short description"].substring(0, 50)}</p>
              <div className="price"> 1 X ${item["Regular price"]} </div>
            </div>
            <div className="delete"><MdDelete ></MdDelete></div>
          </div>
        );
      })}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$19.6</span>
      </div>
      <button className="checkout"> CheckOut </button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default CartComponent;
