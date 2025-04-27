import React, { useEffect, useState } from "react";

const TeamList = ({ leagueId, year, onTeamSelect }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    if (leagueId && year) {
      fetch(
        `https://v3.football.api-sports.io/teams?league=${leagueId}&season=${year}`,
        {
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "bb9f4deed51b4d66a5a0dfe84fc072ad",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setTeams(data.response));
    }
  }, [leagueId, year]);

  return (
    <div>
      <h3>Teams in League</h3>
      <ul>
        {teams.map((team) => (
          <li key={team.team.id} onClick={() => onTeamSelect(team.team.id)}>
            {team.team.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
