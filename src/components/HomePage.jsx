import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

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
      <h2>Football's best four leagues in Europe</h2>
      <div className="container">
        <button onClick={handleNavigateEngland}>England</button>
        <button onClick={handleNavigateSpain}>Spain</button>
        <button onClick={handleNavigateItaly}>Italy</button>
        <button onClick={handleNavigateGermany}>Germany</button>
      </div>
    </div>
  );
};

export default HomePage;
