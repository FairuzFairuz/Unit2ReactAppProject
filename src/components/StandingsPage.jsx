import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StandingsPage = () => {
  const { season } = useParams(); // Extract season from route parameters
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
            "x-rapidapi-key": "bb9f4deed51b4d66a5a0dfe84fc072ad", // Replace with your actual API key
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
          {standings.map((team, index) => (
            <li key={team.team.id}>
              <img
                src={team.team.logo}
                alt={`${team.team.name} logo`}
                style={{ width: "50px", height: "50px" }}
              />
              <p>
                <strong>Rank:</strong> {team.rank}
              </p>
              <p>
                <strong>Team:</strong> {team.team.name}
              </p>
              <p>
                <strong>Points:</strong> {team.points}
              </p>
              <p>
                <strong>Goal Difference:</strong> {team.goalsDiff}
              </p>
              <p>
                <strong>Group:</strong> {team.group}
              </p>
              <p>
                <strong>Form:</strong> {team.form}
              </p>
              <p>
                <strong>Status:</strong> {team.status}
              </p>
              <p>
                <strong>Description:</strong> {team.description}
              </p>
              <div>
                <h4>Overall</h4>
                <p>
                  <strong>Played:</strong> {team.all.played}
                </p>
                <p>
                  <strong>Wins:</strong> {team.all.win}
                </p>
                <p>
                  <strong>Draws:</strong> {team.all.draw}
                </p>
                <p>
                  <strong>Losses:</strong> {team.all.lose}
                </p>
                <p>
                  <strong>Goals For:</strong> {team.all.goals.for}
                </p>
                <p>
                  <strong>Goals Against:</strong> {team.all.goals.against}
                </p>
              </div>
              <div>
                <h4>Home</h4>
                <p>
                  <strong>Played:</strong> {team.home.played}
                </p>
                <p>
                  <strong>Wins:</strong> {team.home.win}
                </p>
                <p>
                  <strong>Draws:</strong> {team.home.draw}
                </p>
                <p>
                  <strong>Losses:</strong> {team.home.lose}
                </p>
                <p>
                  <strong>Goals For:</strong> {team.home.goals.for}
                </p>
                <p>
                  <strong>Goals Against:</strong> {team.home.goals.against}
                </p>
              </div>
              <div>
                <h4>Away</h4>
                <p>
                  <strong>Played:</strong> {team.away.played}
                </p>
                <p>
                  <strong>Wins:</strong> {team.away.win}
                </p>
                <p>
                  <strong>Draws:</strong> {team.away.draw}
                </p>
                <p>
                  <strong>Losses:</strong> {team.away.lose}
                </p>
                <p>
                  <strong>Goals For:</strong> {team.away.goals.for}
                </p>
                <p>
                  <strong>Goals Against:</strong> {team.away.goals.against}
                </p>
              </div>
              <p>
                <strong>Last Updated:</strong> {team.update}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StandingsPage;
