import h from "./helpers/";

function inputToKolor(input) {    
    input = input.toLowerCase();
    console.log("inputToKolor - input", input);    
    const kolorObj = h.isHexStr(input) ||
                     h.isRgbStr(input) ||
                     h.isRgbaStr(input) ||
                     h.isHslStr(input) ||
                     h.isHslaStr(input);

    

    // var named = false;
    // if (names[color]) {
    //     color = names[color];
    //     named = true;
    // }
    // else if (color == 'transparent') {
    //     return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    // }

    // // Try to match string input using regular expressions.    
    // var match;
    // if ((match = matchers.rgb.exec(color))) {
    //     return { r: match[1], g: match[2], b: match[3] };
    // }
    // if ((match = matchers.rgba.exec(color))) {
    //     return { r: match[1], g: match[2], b: match[3], a: match[4] };
    // }
    // if ((match = matchers.hsl.exec(color))) {
    //     return { h: match[1], s: match[2], l: match[3] };
    // }
    // if ((match = matchers.hsla.exec(color))) {
    //     return { h: match[1], s: match[2], l: match[3], a: match[4] };
    // }
    // if ((match = matchers.hsv.exec(color))) {
    //     return { h: match[1], s: match[2], v: match[3] };
    // }
    // if ((match = matchers.hsva.exec(color))) {
    //     return { h: match[1], s: match[2], v: match[3], a: match[4] };
    // }
    // if ((match = matchers.hex8.exec(color))) {
    //     return {
    //         r: parseIntFromHex(match[1]),
    //         g: parseIntFromHex(match[2]),
    //         b: parseIntFromHex(match[3]),
    //         a: convertHexToDecimal(match[4]),
    //         format: named ? "name" : "hex8"
    //     };
    // }
    // if ((match = matchers.hex6.exec(color))) {
    //     return {
    //         r: parseIntFromHex(match[1]),
    //         g: parseIntFromHex(match[2]),
    //         b: parseIntFromHex(match[3]),
    //         format: named ? "name" : "hex"
    //     };
    // }
    // if ((match = matchers.hex4.exec(color))) {
    //     return {
    //         r: parseIntFromHex(match[1] + '' + match[1]),
    //         g: parseIntFromHex(match[2] + '' + match[2]),
    //         b: parseIntFromHex(match[3] + '' + match[3]),
    //         a: convertHexToDecimal(match[4] + '' + match[4]),
    //         format: named ? "name" : "hex8"
    //     };
    // }
    // if ((match = matchers.hex3.exec(color))) {
    //     return {
    //         r: parseIntFromHex(match[1] + '' + match[1]),
    //         g: parseIntFromHex(match[2] + '' + match[2]),
    //         b: parseIntFromHex(match[3] + '' + match[3]),
    //         format: named ? "name" : "hex"
    //     };
    // }

    // return false;

    return kolorObj;
}

export default inputToKolor;