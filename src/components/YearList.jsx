import React from "react";

const YearList = ({ onYearSelect }) => {
  const years = [2020, 2021, 2022, 2023, 2024];

  return (
    <div>
      <h3>Select a Year</h3>
      <ul>
        {years.map((year) => (
          <li key={year} onClick={() => onYearSelect(year)}>
            {year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YearList;
