import React, { useEffect, useState } from "react";
import "./Collection.scss";
import Product from "../../components/product/Product";
import { useNavigate, useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { useSelector } from "react-redux";

function Collection() {
  const navigate = useNavigate();
  const params = useParams();
  const [categoryId, setCategoryId] = useState("");
  const [products, setProducts] = useState(null);

  const categories = useSelector((state) => state.categoryReducer.categories);

  async function fetchData() {
    const url = params.categoryId
      ? `/products?populate=image&filters[newcategory][key][$eq]=${params.categoryId}&sort=${sortBy}`
      : `/products?populate=image&sort=${sortBy}`;

    const categoryResponse = await axiosClient.get(url);
    setProducts(categoryResponse.data.data);
  }

  const sortOptions = [
    {
      value: "Price - Low to High",
      sort: "price",
    },
    {
      value: "Newest First",
      sort: "createdAt",
    },
  ];

  const [sortBy, setSortBy] = useState(sortOptions[0].sort);

  useEffect(() => {
    setCategoryId(params.categoryId);
    fetchData();
  }, [params, sortBy]);

  function handleEvent(e) {
    navigate(`/category/${e.target.value}`);
  }
  return (
    <div className="Categories">
      <div className="container">
        <div className="header">
          <div className="info">
            <h2>Explore All Print and Artwork</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              nam ducimus voluptatibus quis sunt adipisci tempora temporibus
              consequuntur velit explicabo.
            </p>
          </div>
          <div className="sort-by">
            <div className="sort-by-container">
              <h3 className="sort-by-text">Sort By</h3>
              <select
                className="select-sort-by"
                name="sort-by"
                id="sort-by"
                onClick={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((item) => (
                  <option key={item.sort} value={item.sort}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>Category</h3>
              {categories?.map((item) => (
                <div key={item.id} className="filter-radio">
                  <input
                    name="category"
                    type="radio"
                    value={item.attributes.key}
                    id={item.id}
                    onChange={handleEvent}
                    checked={item.attributes.key === categoryId}
                  />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="product-box">
            {products?.map((products) => (
              <Product key={products.id} products={products} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
