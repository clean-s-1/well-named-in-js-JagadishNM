const ColorPair = require("../app/ColorPair");
const MAJOR_COLOR_NAMES = require("../app/constants");
const MINOR_COLOR_NAMES = require("../app/constants");

module.exports =  function getColorFromPairNumber(pairNumber) {
    let minorSize = MAJOR_COLOR_NAMES.length;
    let majorSize = MINOR_COLOR_NAMES.length;

    if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
        throw `Argument PairNumber:${pairNumber} is outside the allowed range`
    }
    let zeroBasedPairNumber = pairNumber - 1;
    let majorIndex = parseInt(zeroBasedPairNumber / minorSize);
    let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
    let pair = new ColorPair();
    pair.majorColor = MAJOR_COLOR_NAMES[majorIndex];
    pair.minorColor = MINOR_COLOR_NAMES[minorIndex];
    return pair;
}

module.exports =  function getPairNumberFromColor(pair) {
    let majorIndex = -1;
    for (let i = 0; i < MAJOR_COLOR_NAMES.length; i++) {
        if (MAJOR_COLOR_NAMES[i] == pair.majorColor) {
            majorIndex = i;
            break;
        }
    }

    let minorIndex = -1;
    for (let i = 0; i < MINOR_COLOR_NAMES.length; i++) {
        if (MINOR_COLOR_NAMES[i] == pair.minorColor) {
            minorIndex = i;
            break;
        }
    }

    if (majorIndex == -1 || minorIndex == -1) {
        throw `Unknown Colors:${pair.toString()}`;
    }

    return (majorIndex * MINOR_COLOR_NAMES.length) + (minorIndex + 1);
}
