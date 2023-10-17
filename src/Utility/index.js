export const calculateMean = (data) => {
  const sum = data.reduce((acc, item) => acc + item, 0);
  return sum / data.length;
};

// Helper function to calculate the median
export const calculateMedian = (data) => {
  const sortedData = data.slice().sort((a, b) => a - b);
  const middle = Math.floor(sortedData.length / 2);
  if (sortedData.length % 2 === 0) {
    return (sortedData[middle - 1] + sortedData[middle]) / 2;
  } else {
    return sortedData[middle];
  }
};

// Helper function to calculate the mode
export const calculateMode = (data) => {
  const counts = {};
  let mode = null;
  let maxCount = 0;
  for (const item of data) {
    if (counts[item] === undefined) {
      counts[item] = 1;
    } else {
      counts[item]++;
    }
    if (counts[item] > maxCount) {
      maxCount = counts[item];
      mode = item;
    }
  }
  return mode;
};

export const calculateGamma = (data) => {
  for (const wine of data) {
    wine.Gamma =
      (parseFloat(wine.Ash) * parseFloat(wine.Hue)) /
      parseFloat(wine.Magnesium);
  }
  return data;
};

// Function to calculate class-wise statistics for "Gamma"
export const calculateClassStatisticsForGamma = (data) => {
  const classStatistics = {};

  // Group the data by the "Alcohol" class
  for (const wine of data) {
    const alcoholClass = wine.Alcohol;
    if (!classStatistics[alcoholClass]) {
      classStatistics[alcoholClass] = {
        Gamma: [],
      };
    }
    classStatistics[alcoholClass].Gamma.push(wine.Gamma);
  }

  // Calculate mean, median, and mode for each class
  for (const alcoholClass in classStatistics) {
    const gammaValues = classStatistics[alcoholClass].Gamma;

    // Calculate mean
    const mean =
      gammaValues.reduce((sum, value) => sum + value, 0) / gammaValues.length;

    // Calculate median
    const sortedValues = [...gammaValues].sort((a, b) => a - b);
    const mid = Math.floor(sortedValues.length / 2);
    const median =
      sortedValues.length % 2 === 0
        ? (sortedValues[mid - 1] + sortedValues[mid]) / 2
        : sortedValues[mid];

    // Calculate mode
    const counts = {};
    let mode = null;
    let maxCount = 0;

    for (const value of sortedValues) {
      counts[value] = (counts[value] || 0) + 1;
      if (counts[value] > maxCount) {
        maxCount = counts[value];
        mode = value;
      }
    }

    classStatistics[alcoholClass] = {
      Mean: mean,
      Median: median,
      Mode: mode,
    };
  }

  return classStatistics;
};
