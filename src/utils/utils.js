export function normalizeArray(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return arr.map((num) => (num - min) / (max - min));
}

// map normalized numbers to RGB values
export function mapNormalizedToRGB(normalizedArray, rgbArray) {
  const numRanges = rgbArray.length;
  const rangeSize = 1 / numRanges;

  return normalizedArray.map((num) => {
    // const index = Math.floor(num / rangeSize);
    const index = Math.min(Math.floor(num / rangeSize), rgbArray.length - 1);
    return rgbArray[index];
  });
}

export function normalizeValue(value) {
  return value / 255;
}
