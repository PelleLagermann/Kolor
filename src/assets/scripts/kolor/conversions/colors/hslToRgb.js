import { cssUnit } from "../../regex";
import gradToDeg from "../units/gradToDeg";
import radToDeg from "../units/radToDeg";
import turnToDeg from "../units/turnToDeg";
import toFraction from "../toFraction";
import toPercent from "../toPercent";
import toLowerCaseString from "../../helpers/toLowerCaseString";

/*
 - h: deg, grad, rad or turn
 - s: [0, 1] or [0, 100]
 - l: [0, 1] or [0, 100]
*/

function hslToRgb(h, s, l, a) {
    let r, g, b;

    const _h = toFraction(hueToDegrees(h), 360);    
    const _s = toFraction(toPercent(s), 100);
    const _l = toFraction(toPercent(l), 100);    
    const _a = typeof a !== "undefined" ? toFraction(toPercent(a), 100) : a;    

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(_s === 0) {
        r = g = b = _l; // achromatic
    }
    else {
        var q = _l < 0.5 ? _l * (1 + _s) : _l + _s - _l * _s;
        var p = 2 * _l - q;
        r = hue2rgb(p, q, _h + 1/3);
        g = hue2rgb(p, q, _h);
        b = hue2rgb(p, q, _h - 1/3);
    }

    return { 
        r: Math.round(r * 255), 
        g: Math.round(g * 255),
        b: Math.round(b * 255), 
        a: _a 
    };
}

function hueToDegrees (input) {
    /*
        - Accepts hue as either deg, grad, rad or turn
        - Returns hue as degrees
    */
    const h = toLowerCaseString(input);
    let hue;            

    const regex = new RegExp(cssUnit);
    let match;
    if (match = regex.exec(h)) {
        switch (match[2]) {
            case "deg":
                hue = match[1];
                break;
            case "grad":
                hue = gradToDeg(match[1]);
                break;
            case "rad":
                hue = radToDeg(match[1]);
                break;
            case "turn":                
                hue = turnToDeg(match[1]);                
                break;                                    
            default:
                hue = match[1];
          }
    } else {
        console.info("Invalid or unsupported value for hue in HSL color: ", input);
    }

    return hue % 360;    
}

export default hslToRgb;