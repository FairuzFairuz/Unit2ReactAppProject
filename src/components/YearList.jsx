import React from "react";

const YearList = ({ onYearSelect }) => {
  const years = [2019, 2020, 2021, 2022, 2023, 2024]; // List of years

  return (
    <div>
      <h3>Select a Year</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {years.map((year) => (
          <li key={year} style={{ marginBottom: "10px" }}>
            <button onClick={() => onYearSelect(year)}>{year}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YearList;
