import React from "react";
import Product from "./Product";
import "../../shop.css";
import { Helmet } from "react-helmet";

const Shop = ({ products }) => {
  return (
    <>
      <Helmet>
        <title>Aquarium Keep | Shop</title>
      </Helmet>

      <section id="featured" className="my-5 py-5">
        <div className="container mt-5 py-5">
          <h3>Our Products</h3>
          <hr />
          <p>Here you can check our products</p>
        </div>

        <div className="row mx-auto container">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Shop;
