import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./compontes/Footer";
import Navbar from "./compontes/Navbar";
import CardsDetails from "./page/CardsDetails";
import Home from "./page/Home";
import { useState } from "react";

function App() {
  const [Text, setText] = useState("");
  return (
    <div className="App">
      <Navbar setText={setText} />
      <Routes>
        <Route path="/" element={<Home Text={Text} />} />
        <Route path="/details/:id" element={<CardsDetails />} />
      </Routes>
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
