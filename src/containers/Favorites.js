import React, { useContext } from "react";
//import { ProductContext } from "../context/product-context";
import { useStore } from "../hook-store/store";
import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";

const Favorites = (props) => {
  // const favoriteProducts = useContext(ProductContext).products.filter(
  //   (p) => p.isFavorite
  // );
  const state = useStore()[0];
  const favoriteProducts = state.products.filter((p) => p.isFavorite);
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
