import React from "react";

import Card from "../UI/Card";
import "./ProductItem.css";
//import { ProductContext } from "../../context/product-context";
//import { useContext } from "react";
import { useStore } from "../../hook-store/store";
const ProductItem = (props) => {
  // const toogleFav = useContext(ProductContext).toggleFav;
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    //dispatch(toggleFav(props.id));
    //toogleFav(props.id);
    dispatch("TOGGLE_FAV", props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
