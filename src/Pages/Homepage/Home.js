import React from "react";
import Categories from "../../Components/CateGories/Categories";
import ContactBar from "../../Components/ContactBar/ContactBar";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <FeaturedProducts type = 'featured' ></FeaturedProducts>
      <Categories></Categories>
      <FeaturedProducts type = 'trending'></FeaturedProducts>
      <ContactBar></ContactBar>
    </div>
  );
};

export default Home;
