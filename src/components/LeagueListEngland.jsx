import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import YearList from "./YearList";

const LeagueListEngland = () => {
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState(null);

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const leagueID = 39;

  const fetchLeagues = async () => {
    try {
      const response = await fetch(
        "https://v3.football.api-sports.io/leagues?country=england&id=39",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "bb9f4deed51b4d66a5a0dfe84fc072ad",
            // "x-rapidapi-key": import.meta.env.VITE_REACT_APP_API_KEY,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setLeagues(data.response);
    } catch (error) {
      console.error("Error fetching leagues:", error);
      setError("Failed to fetch leagues.");
    }
  };

  useEffect(() => {
    fetchLeagues();
  }, []);

  const handleLeagueClick = (leagueId) => {
    setSelectedLeague(leagueId === selectedLeague ? null : leagueId);
  };

  const handleYearClick = (year) => {
    navigate(`/standingsEngland/${year}`); // Redirect to the StandingsPageEngland with the selected season
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Available Leagues</h1>
      <button onClick={handleHomeClick}>Home</button>
      {error ? (
        <p>{error}</p>
      ) : leagues.length === 0 ? (
        <p>Loading leagues...</p>
      ) : (
        <ul>
          {leagues.map((league) => (
            <li key={league.league.id}>
              <button onClick={() => handleLeagueClick(league.league.id)}>
                {league.league.name}
              </button>
              {selectedLeague === league.league.id && (
                <YearList onYearSelect={handleYearClick} />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LeagueListEngland;
