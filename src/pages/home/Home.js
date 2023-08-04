import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import './Home.scss'
import Product from "../../components/product/Product";
import Footer from "../../components/footer/Footer";
import { axiosClient } from "../../utils/axiosClient";
import { useSelector } from "react-redux";

function Home() {

  const categories = useSelector((state) => state.categoryReducer.categories);
  const [isTopPicks,setIsTopPicks] = useState(null);

  async function fetchData(){
    const isTopPickResponse = await axiosClient.get('/products?filters[isTopPick][$eq]=true&populate=image');
    setIsTopPicks(isTopPickResponse.data.data);
  }

  useEffect(() => {
    fetchData();
  },[])
  
  return (
    <div className="Home">
      <Hero />
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Shop By Category</h2>
          <p className="subheading">
            Shop from the best, our Film and TV Posterz
          </p>
        </div>
        <div className="category-content">
          {categories?.map(category => <Category key={category.id} category={category}/>)}
        </div>
      </section>
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Our Top Picks</h2>
          <p className="subheading">
            All New Designs, Same Old Details.
          </p>
        </div>
        <div className="category-content">
          {isTopPicks?.map(products => <Product key={products.id} products={products} />)}
        </div>
      </section>
    </div>
  );
}

export default Home;
