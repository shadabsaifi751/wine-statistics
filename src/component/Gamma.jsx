import React from "react";
import wineData from "../Utility/Wine-Data.json";
import { calculateClassStatisticsForGamma, calculateGamma } from "../Utility";

const Gamma = () => {
  const wineDataWithGamma = calculateGamma([...wineData]);
  const classStatistics = calculateClassStatisticsForGamma(wineDataWithGamma);

  return (
    <div className="section">
      <table  className="table-wrapper">
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(classStatistics).map((alcoholClass) => (
              <th key={alcoholClass}>Class {alcoholClass}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gamma Mean</td>
            {Object.keys(classStatistics).map((alcoholClass) => (
              <td key={alcoholClass}>
                {classStatistics[alcoholClass].Mean.toFixed(3)}
              </td>
            ))}
          </tr>
          <tr>
            <td>Gamma Median</td>
            {Object.keys(classStatistics).map((alcoholClass) => (
              <td key={alcoholClass}>
                {classStatistics[alcoholClass].Median.toFixed(3)}
              </td>
            ))}
          </tr>
          <tr>
            <td>Gamma Mode</td>
            {Object.keys(classStatistics).map((alcoholClass) => (
              <td key={alcoholClass}>
                {classStatistics[alcoholClass].Mode.toFixed(3)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Gamma;
