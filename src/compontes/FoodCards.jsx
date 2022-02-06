import React from "react";
import { Link } from "react-router-dom";
import "./FoodCards.css";

const FoodCards = ({ ownFood }) => {
  return (
    <Link to={`/details/${ownFood.idMeal}`} className="link">
      <div className="food">
        {" "}
        <img src={ownFood.strMealThumb} alt={ownFood.strMeal} />
        <h1>{ownFood.strMeal}</h1>
      </div>
    </Link>
  );
};

export default FoodCards;
