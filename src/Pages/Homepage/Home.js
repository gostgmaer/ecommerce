import React from "react";
import Categories from "../../Components/CateGories/Categories";
import ContactBar from "../../Components/ContactBar/ContactBar";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <FeaturedProducts type = 'Featured' ></FeaturedProducts>
      <Categories></Categories>
      <FeaturedProducts type = 'Trending'></FeaturedProducts>
      <ContactBar></ContactBar>
    </div>
  );
};

export default Home;
