const { MAJOR_COLOR_NAMES, MINOR_COLOR_NAMES } = require("../app/constants");
const { getColorFromPairNumber } = require("../app/getColorFromPairNumber");

module.exports = {
getReferencemanual: function() {
  const majorColorSize = MAJOR_COLOR_NAMES.length;
  const minorColorSize = MINOR_COLOR_NAMES.length;
  let manual = [];
  for (let pairNumber = 1; pairNumber <= majorColorSize * minorColorSize; pairNumber++) {
    const colorPair = getColorFromPairNumber(pairNumber);
    manual.push({
      "ColorCode":pairNumber,
      "MajorColor":colorPair.majorColor,
      "MinorColor":colorPair.minorColor
    });
  }
  return manual;
}

}