import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import AddFavourite from "./AddFavourite";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateEngland = () => {
    navigate("/leaguesEngland");
  };

  const handleNavigateSpain = () => {
    navigate("/leaguesSpain");
  };

  const handleNavigateItaly = () => {
    navigate("/leaguesItaly");
  };

  const handleNavigateGermany = () => {
    navigate("/leaguesGermany");
  };

  return (
    <div>
      <h1>Big Four of Europe</h1>
      <h2>Football's top four leagues in Europe</h2>
      <div className="container">
        <button onClick={handleNavigateEngland}>England</button>
        <button onClick={handleNavigateSpain}>Spain</button>
        <button onClick={handleNavigateItaly}>Italy</button>
        <button onClick={handleNavigateGermany}>Germany</button>
      </div>
      <div
        style={{ margin: "20px", padding: "20px", border: "1px solid #ccc" }}
      >
        <h2>Add your favourite player, team or league below</h2>
        <AddFavourite />
      </div>
    </div>
  );
};

export default HomePage;
