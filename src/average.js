const average = (arr) => {
  let sum = 0;
  if (!arr.length) {
    return undefined;
  }
  for (const element of arr) {
    if (typeof element !== "number") {
      return undefined;
    } else {
      sum += element;
    }
  }
  return Math.round(sum / arr.length);
};

module.exports = average;
