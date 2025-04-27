import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StandingsPage = () => {
  const { season } = useParams(); // Extract season from the route parameters
  const [standings, setStandings] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const leagueID = 39; // League ID for the Premier League

  const fetchStandings = async () => {
    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/standings?league=${leagueID}&season=${season}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "bb9f4deed51b4d66a5a0dfe84fc072ad", // Replace with your API key
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Standings Data:", data.response[0]?.league?.standings[0]);
      setStandings(data.response[0]?.league?.standings[0] || []);
    } catch (error) {
      console.error("Error fetching standings:", error);
      setError("Failed to fetch standings.");
    }
  };

  useEffect(() => {
    fetchStandings();
  }, [season]);

  return (
    <div>
      <h1>Standings for Season {season}</h1>
      <button onClick={() => navigate("/")}>Home</button>
      {error ? (
        <p>{error}</p>
      ) : standings.length === 0 ? (
        <p>Loading standings...</p>
      ) : (
        <ul>
          {standings.map((team) => (
            <li key={team.team.id}>
              {team.team.name}: {team.points} points
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StandingsPage;
