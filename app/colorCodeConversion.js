const ColorPair = require("../app/ColorPair");
const { MAJOR_COLOR_NAMES, MINOR_COLOR_NAMES } = require("../app/constants");

module.exports = {
  getColorIndex: function (colorNames, color) {
    for (let i = 0; i < colorNames.length; i++) {
      if (colorNames[i] == color) {
        return i;
      }
    }
    return -1;
  },
  getColorFromPairNumber: function (pairNumber) {
    let minorSize = MAJOR_COLOR_NAMES.length;
    let majorSize = MINOR_COLOR_NAMES.length;

    if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
      throw `Argument PairNumber:${pairNumber} is outside the allowed range`;
    }
    let zeroBasedPairNumber = pairNumber - 1;
    let majorIndex = parseInt(zeroBasedPairNumber / minorSize);
    let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
    let pair = new ColorPair();
    pair.majorColor = MAJOR_COLOR_NAMES[majorIndex];
    pair.minorColor = MINOR_COLOR_NAMES[minorIndex];
    return pair;
  },

  getPairNumberFromColor: function (pair) {
    let majorIndex = getColorIndex(MAJOR_COLOR_NAMES, pair.majorColor);
    let minorIndex = getColorIndex(MINOR_COLOR_NAMES, pair.minorColor);

    if (majorIndex == -1 || minorIndex == -1) {
      throw `Unknown Colors:${pair.toString()}`;
    }

    return majorIndex * MINOR_COLOR_NAMES.length + (minorIndex + 1);
  },
};
