import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LeagueList = () => {
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState(null);
  const [standings, setStandings] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const leagueID = 39;

  const fetchLeagues = async () => {
    try {
      const response = await fetch(
        "https://v3.football.api-sports.io/leagues?country=england",
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
      setLeagues(data.response);
    } catch (error) {
      console.error("Error fetching leagues:", error);
      setError("Failed to fetch leagues.");
    }
  };

  // const fetchStandings = async (season) => {
  //   if (!season || season.toString().length !== 4) {
  //     console.error("Invalid season:", season);
  //     setError("Invalid season selected.");
  //     return;
  //   }

  //   try {
  //     const response = await fetch(
  //       `https://v3.football.api-sports.io/standings?league=${leagueID}&season=${season}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "x-rapidapi-host": "v3.football.api-sports.io",
  //           "x-rapidapi-key": "bb9f4deed51b4d66a5a0dfe84fc072ad",
  //         },
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     console.log("Standings Data:", data.response[0]?.league?.standings); // Debug the standings structure
  //     setStandings(data.response[0]?.league?.standings[0] || []);
  //   } catch (error) {
  //     console.error("Error fetching standings:", error);
  //     setError("Failed to fetch standings.");
  //   }
  // };

  useEffect(() => {
    fetchLeagues();
  }, []);

  const handleLeagueClick = (leagueId) => {
    setSelectedLeague(leagueId === selectedLeague ? null : leagueId);
    setStandings([]); // Clear standings when toggling a league
  };

  const handleYearClick = (year) => {
    navigate(`/standings/${year}`); // Redirect to the StandingsPage with the selected season
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
                <ul>
                  {[2021, 2022, 2023].map((year) => (
                    <li key={year}>
                      <button onClick={() => handleYearClick(year)}>
                        {year}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
      {standings.length > 0 && (
        <div>
          <h2>Standings</h2>
          <ul>
            {standings.map((team) => (
              <li key={team.team.id}>
                {team.team.name}: {team.points} points
              </li>
            ))}
          </ul>
        </div>
      )}
      {standings.length === 0 && !error && <p>No standings available.</p>}
    </div>
  );
};

export default LeagueList;
