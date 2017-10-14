import toFraction from "../conversions/toFraction";
import toPercent from "../conversions/toPercent";
import hslToRgb from "../conversions/colors/hslToRgb";
import { cssUnit, colorMatch3, colorMatch4, hex3, hex4, hex6, hex8 } from "../regex";

function isRgbStr (input) {
    const regex = new RegExp("rgb" + colorMatch3);
    let match;
    if (match = regex.exec(input)) {
        console.info("isRgbStr", match[1], match[4], match[7]);
        return { r: Math.round(match[1]), g: Math.round(match[4]), b: Math.round(match[7]) };
    }

    return false;
}

function isRgbaStr (input) {
    const regex = new RegExp("rgba" + colorMatch4);
    let match;
    if (match = regex.exec(input)) {
        console.info("isRgbaStr", match[1], match[4], match[7], match[10]);
        return { r: Math.round(match[1]), g: Math.round(match[4]), b: Math.round(match[7]), a: toFraction(toPercent(match[10]), 100) };
    }

    return false;
}

function isHslStr (input) {    
    const regex = new RegExp("hsl" + colorMatch3);
    let match;
    if (match = regex.exec(input)) {        
        const rgb = hslToRgb(match[1], match[4], match[7]);        
        return { r: rgb.r, g: rgb.g, b: rgb.b };
    }

    return false;
}

function isHslaStr (input) {
    const regex = new RegExp("hsla" + colorMatch4);
    let match;
    if (match = regex.exec(input)) {        
        const rgb = hslToRgb(match[1], match[4], match[7], match[10]);
        return { r: rgb.r, g: rgb.g, b: rgb.b, a: rgb.a };
    }

    return false;
}

function isHexStr (input) {
    let match;
    if (match = hex8.exec(input)) {
        console.info("isHexStr - hex8", match[1], match[2], match[3], match[4]);
        return {
            r: parseInt(match[1], 16),
            g: parseInt(match[2], 16),
            b: parseInt(match[3], 16),
            a: parseInt(match[4], 16) / 255
        };
    }

    if (match = hex6.exec(input)) {
        console.info("isHexStr - hex6", match[1], match[2], match[3]);
        return {
            r: parseInt(match[1], 16),
            g: parseInt(match[2], 16),
            b: parseInt(match[3], 16)
        };
    }

    if (match = hex4.exec(input)) {
        console.info("isHexStr - hex4", match[1], match[2], match[3], match[4]);
        return {
            r: parseInt(match[1] + "" + match[1], 16),
            g: parseInt(match[2] + "" + match[2], 16),
            b: parseInt(match[3] + "" + match[3], 16),
            a: parseInt(match[4] + "" + match[4], 16) / 255
        };
    }

    if (match = hex3.exec(input)) {
        console.info("isHexStr - hex3", match[1], match[2], match[3]);
        return {
            r: parseInt(match[1] + "" + match[1], 16),
            g: parseInt(match[2] + "" + match[2], 16),
            b: parseInt(match[3] + "" + match[3], 16)
        };
    }

    return false;
}

export { isRgbStr, isRgbaStr, isHslStr, isHslaStr, isHexStr };