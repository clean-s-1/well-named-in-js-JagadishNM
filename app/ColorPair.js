module.exports = class ColorPair {
    constructor() {
        this.majorColor;
        this.minorColor;
    }
    toString() {
        return `MajorColor:${this.majorColor},MinorColor:${this.minorColor}`;
    }
}
