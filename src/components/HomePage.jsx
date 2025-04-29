import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = ({ isDarkMode, toggleTheme }) => {
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

  const handleNavigateAddFavourite = () => {
    navigate("/addFavourite");
  };
  return (
    <div>
      <h1>Big Four of Europe</h1>
      <h2>Football's top four leagues in Europe</h2>
      <p>
        The current theme is{" "}
        <strong>{isDarkMode ? "Dark Mode" : "Light Mode"}</strong>.
      </p>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="container">
        <button onClick={handleNavigateEngland}>England</button>
        <button onClick={handleNavigateSpain}>Spain</button>
        <button onClick={handleNavigateItaly}>Italy</button>
        <button onClick={handleNavigateGermany}>Germany</button>
      </div>
      <div
        style={{
          margin: "20px",
          padding: "20px",
          border: "1px solid",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Centers horizontally
          justifyContent: "center", // Centers vertically
        }}
      >
        <h2>Who is your favourite player? Who is your GOAT?</h2>
        <button onClick={handleNavigateAddFavourite}>
          Let's hear from you!
        </button>
      </div>
    </div>
  );
};

export default HomePage;
