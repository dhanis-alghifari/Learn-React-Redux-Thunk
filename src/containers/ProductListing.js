import React from "react";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";

function ProductListing() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log("products: ", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
