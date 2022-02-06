import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Cardsdetails.css";
const CardsDetails = () => {
  const [FoodDetails, setFoodDetails] = useState({});
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  let handleId = async () => {
    setloading(true);
    try {
      let findId = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
      );
      setFoodDetails(findId.data.meals[0]);
      setloading(false);
    } catch (error) {
      setloading(false);
      seterror(true);
    }
  };
  useEffect(() => {
    handleId();
  }, []);
  console.log(params);
  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : error ? (
        <h1>can not get the user</h1>
      ) : (
        <div className="cardDetails">
          <img src={FoodDetails.strMealThumb} alt={FoodDetails.strMeal} />
          <div>
            <h1>Name:</h1>
            <h2> {FoodDetails.strMeal}</h2>
          </div>
          <div>
            <h1>Category:</h1>
            <h2>{FoodDetails.strCategory}</h2>
          </div>
          <div>
            <h1>Area:</h1>
            <h2>{FoodDetails.strArea}</h2>
          </div>
          <div>
            <h1>Instructions:</h1>
            <h2> {FoodDetails.strInstructions}</h2>
          </div>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      )}
    </div>
  );
};

export default CardsDetails;
