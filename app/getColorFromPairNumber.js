const ColorPair = require("../app/ColorPair");

module.exports = {

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
  }

}