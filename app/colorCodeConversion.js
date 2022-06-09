
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
 

  getPairNumberFromColor: function (pair) {
    let majorIndex = module.exports.getColorIndex(MAJOR_COLOR_NAMES, pair.majorColor);
    let minorIndex = module.exports.getColorIndex(MINOR_COLOR_NAMES, pair.minorColor);

    if (majorIndex == -1 || minorIndex == -1) {
      throw `Unknown Colors:${pair.toString()}`;
    }

    return majorIndex * MINOR_COLOR_NAMES.length + (minorIndex + 1);
  },
};
