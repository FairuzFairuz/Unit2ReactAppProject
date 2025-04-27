import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StandingsPageItaly = () => {
  const { season } = useParams(); // Extract season from route parameters
  const [standings, setStandings] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const leagueID = 135; // League ID for the Premier League
  // const apiKey = process.env.REACT_APP_API_KEY;

  const fetchStandings = async () => {
    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/standings?league=${leagueID}&season=${season}`,
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
      <h1>Standings for Season {season} - Serie A</h1>
      <button onClick={() => navigate("/")}>Home</button>
      {error ? (
        <p>{error}</p>
      ) : standings.length === 0 ? (
        <p>Loading standings...</p>
      ) : (
        <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              <th>Logo</th>
              <th>Points</th>
              <th>Goal Difference</th>
              <th>Form</th>
              <th>Played</th>
              <th>Wins</th>
              <th>Draws</th>
              <th>Losses</th>
              <th>Goals For</th>
              <th>Goals Against</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team) => (
              <tr key={team.team.id}>
                <td>{team.rank}</td>
                <td>{team.team.name}</td>
                <td>
                  <img
                    src={team.team.logo}
                    alt={`${team.team.name} logo`}
                    style={{ width: "40px", height: "40px" }}
                  />
                </td>
                <td>{team.points}</td>
                <td>{team.goalsDiff}</td>
                <td>{team.form}</td>
                <td>{team.all.played}</td>
                <td>{team.all.win}</td>
                <td>{team.all.draw}</td>
                <td>{team.all.lose}</td>
                <td>{team.all.goals.for}</td>
                <td>{team.all.goals.against}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StandingsPageItaly;
