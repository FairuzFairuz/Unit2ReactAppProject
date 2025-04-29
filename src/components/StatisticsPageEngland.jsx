import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

const StatisticsPageEngland = () => {
  const { season } = useParams(); // Extract season from route parameters
  const leagueID = 39; // Define leagueID based on ID in API
  const [statistics, setStatistics] = useState([]); // State to store statistics data
  const [error, setError] = useState(null); // State to handle errors

  const navigate = useNavigate();

  const fetchStatistics = async () => {
    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/players/topscorers?season=${season}&league=${leagueID}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "bb9f4deed51b4d66a5a0dfe84fc072ad",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setStatistics(data.response); // Update the state with fetched data
    } catch (error) {
      console.error("Error fetching statistics:", error);
      setError("Failed to fetch statistics.");
    }
  };

  useEffect(() => {
    fetchStatistics();
  }, []);

  if (error) {
    return <p>{error}</p>; // Display error message if there is an issue
  }

  const handleStandingsClick = () => {
    navigate(`/standingsEngland/${season}`);
  };
  return (
    <div>
      <h1>Statistics for Season {season}</h1>
      <h2>Top Scorers</h2>
      <div>
        <Navbar />
        <button onClick={handleStandingsClick}>Standings</button>
      </div>
      {statistics.length === 0 ? (
        <p>Loading Statistics</p>
      ) : (
        <table border="1" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Player</th>
              <th>Team</th>
              <th>Goals</th>
              <th>Matches</th>
              <th>Assists</th>
            </tr>
          </thead>
          <tbody>
            {statistics.map((player) => (
              <tr key={player.player.id}>
                <td>{player.player.name}</td>
                <td>{player.statistics[0]?.team?.name}</td>
                <td>{player.statistics[0]?.goals?.total || 0}</td>
                <td>{player.statistics[0]?.games?.appearences || 0}</td>
                <td>{player.statistics[0]?.goals?.assists || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StatisticsPageEngland;
