const rgbArray = [
  [75, 107, 169], //blue
  [111, 143, 199],
  [159, 189, 238],
  [186, 209, 220],
  [224, 229, 145],
  [249, 235, 89],
  [247, 200, 53],
  [238, 146, 15],
  [234, 113, 0],
  [234, 70, 0],
  [234, 38, 0], //red
];

export function normalizeArray(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return arr.map((num) => (num - min) / (max - min));
}

// map normalized numbers to RGB values
export function mapNormalizedToRGB(normalizedArray) {
  const numRanges = rgbArray.length;
  const rangeSize = 1 / numRanges;

  return normalizedArray.map((num) => {
    // const index = Math.floor(num / rangeSize);
    const index = Math.min(Math.floor(num / rangeSize), rgbArray.length - 1);
    return rgbArray[index];
  });
}

export function normalizeRGBValue(value) {
  return value / 255;
}
