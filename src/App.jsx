import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeagueList from "./components/LeagueList"; // Update the import path if necessary
import StandingsPage from "./components/StandingsPage"; // Import the new StandingsPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeagueList />} />
        <Route path="/standings/:season" element={<StandingsPage />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
