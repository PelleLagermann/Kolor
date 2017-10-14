//color functions
import { isRgbStr, isRgbaStr, isHslStr, isHslaStr, isHexStr } from "./isColorType"

function helpers () {        
    this.isRgbStr = isRgbStr;
    this.isRgbaStr = isRgbaStr;
    this.isHslStr = isHslStr;
    this.isHslaStr = isHslaStr;
    this.isHexStr = isHexStr;
}

const h = new helpers();

export default h;