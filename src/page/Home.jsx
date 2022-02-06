import React from "react";
import ListFood from "../compontes/ListFood";

const Home = ({ Text }) => {
  return (
    <div>
      <ListFood Text={Text} />
    </div>
  );
};

export default Home;
