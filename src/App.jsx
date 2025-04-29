import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeagueListEngland from "./components/LeagueListEngland";
import LeagueListSpain from "./components/LeagueListSpain";
import HomePage from "./components/HomePage";
import StandingsPageEngland from "./components/StandingsPageEngland";
import StandingsPageSpain from "./components/StandingsPageSpain";
import StandingsPageItaly from "./components/StandingsPageItaly";
import LeagueListItaly from "./components/LeagueListItaly";
import StandingsPageGermany from "./components/StandingsPageGermany";
import LeagueListGermany from "./components/LeagueListGermany";
import StatisticsPageEngland from "./components/StatisticsPageEngland";
import StatisticsPageSpain from "./components/StatisticsPageSpain";
import StatisticsPageItaly from "./components/StatisticsPageItaly";
import StatisticsPageGermany from "./components/StatisticsPageGermany";
import NotFoundPage from "./components/NotFoundPage";
import AddFavourite from "./components/AddFavourite";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "darkgrey" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            }
          />
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
          <Route
            path="/statisticsEngland/:season"
            element={<StatisticsPageEngland />}
          />
          <Route
            path="/statisticsSpain/:season"
            element={<StatisticsPageSpain />}
          />
          <Route
            path="/statisticsItaly/:season"
            element={<StatisticsPageItaly />}
          />
          <Route
            path="/statisticsGermany/:season"
            element={<StatisticsPageGermany />}
          />
          <Route
            path="/addFavourite"
            element={
              <AddFavourite isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
