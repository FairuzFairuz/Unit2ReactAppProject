import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeagueListEngland from "./components/LeagueListEngland"; // Update the import path if necessary
import LeagueListSpain from "./components/LeagueListSpain";
import HomePage from "./components/HomePage";
import StandingsPageEngland from "./components/StandingsPageEngland";
import StandingsPageSpain from "./components/StandingsPageSpain";
import StandingsPageItaly from "./components/StandingsPageItaly";
import LeagueListItaly from "./components/LeagueListItaly";
import StandingsPageGermany from "./components/StandingsPageGermany";
import LeagueListGermany from "./components/LeagueListGermany";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaguesEngland" element={<LeagueListEngland />} />
        <Route path="/leaguesSpain" element={<LeagueListSpain />} />
        <Route path="/leaguesItaly" element={<LeagueListItaly />} />
        <Route path="/leaguesGermany" element={<LeagueListGermany />} />
        <Route
          path="/standingsEngland/:season"
          element={<StandingsPageEngland />}
        />
        <Route
          path="/standingsSpain/:season"
          element={<StandingsPageSpain />}
        />
        <Route
          path="/standingsItaly/:season"
          element={<StandingsPageItaly />}
        />
        <Route
          path="/standingsGermany/:season"
          element={<StandingsPageGermany />}
        />
      </Routes>
    </Router>
  );
};

export default App;
