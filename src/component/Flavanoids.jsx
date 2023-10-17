import React from "react";
import wineData from "../Utility/Wine-Data.json";
import { calculateMean, calculateMedian, calculateMode } from "../Utility";

const Flavanoids = () => {
  // Extract data for each class
  const class1Data = wineData
    .filter((wine) => wine.Alcohol === 1)
    .map((wine) => wine.Flavanoids);
  const class2Data = wineData
    .filter((wine) => wine.Alcohol === 2)
    .map((wine) => wine.Flavanoids);
  const class3Data = wineData
    .filter((wine) => wine.Alcohol === 3)
    .map((wine) => wine.Flavanoids);
    
  // Calculate mean, median, and mode for each class
  const class1Mean = calculateMean(class1Data);
  const class2Mean = calculateMean(class2Data);
  const class3Mean = calculateMean(class3Data);

  const class1Median = calculateMedian(class1Data);
  const class2Median = calculateMedian(class2Data);
  const class3Median = calculateMedian(class3Data);

  const class1Mode = calculateMode(class1Data);
  const class2Mode = calculateMode(class2Data);
  const class3Mode = calculateMode(class3Data);
  return (
    <div className="section">
      <table className="table-wrapper">
        <thead>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavanoids Mean</td>
            <td>{class1Mean.toFixed(3)}</td>
            <td>{class2Mean.toFixed(3)}</td>
            <td>{class3Mean.toFixed(3)}</td>
          </tr>
          <tr>
            <td>Flavanoids Median</td>
            <td>{class1Median}</td>
            <td>{class2Median}</td>
            <td>{class3Median}</td>
          </tr>
          <tr>
            <td>Flavanoids Mode</td>
            <td>{class1Mode}</td>
            <td>{class2Mode}</td>
            <td>{class3Mode}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Flavanoids;
