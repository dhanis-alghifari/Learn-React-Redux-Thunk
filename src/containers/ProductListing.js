import React from "react";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";

function ProductListing() {
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error", err);
      });
    console.log(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container" style={{ marginTop: "4rem" }}>
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
