import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/leagues");
  };

  return (
    <div>
      <h1>Welcome to the Football App</h1>
      <button onClick={handleButtonClick}>England</button>
    </div>
  );
};

export default HomePage;
