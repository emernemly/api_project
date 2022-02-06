import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import FoodCards from "./FoodCards";
import ReactPaginate from "react-paginate";
const ListFood = ({ Text }) => {
  const [Food, setFood] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Errors, setErrors] = useState(false);

  const [PageNumber, setPageNumber] = useState(0);
  const pageEl = 10;

  const ElSee = PageNumber * pageEl;
  const pageCount = Food ? Math.ceil(Food.length / pageEl) : 1;

  const filter = async () => {
    try {
      setLoading(true);
      const FoodFilter = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${Text}`
      );
      setLoading(false);

      setFood(FoodFilter.data.meals);
    } catch (error) {
      setLoading(false);
      setErrors(true);
    }
  };

  useEffect(() => {
    filter();
  }, [Text]);

  const DisplayFood = Food ? Food.slice(ElSee, ElSee + pageEl) : [];
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        margin: "20px",
      }}
    >
      {" "}
      {Loading ? (
        <h1>loading</h1>
      ) : Errors ? (
        <h1>can not get the user</h1>
      ) : Food == null ? (
        <h1>there is no combination </h1>
      ) : (
        DisplayFood.map((ownFood) => (
          <FoodCards ownFood={ownFood} key={ownFood.idMeal} />
        ))
      )}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default ListFood;
