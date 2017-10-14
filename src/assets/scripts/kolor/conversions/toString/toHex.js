function rgbToHex (r, g, b, a) {
    let alpha = "";
    if (typeof a !== "undefined" && a !== null) {
        alpha = _partToHex(parseInt(a * 255));
    }
      
    return "#" + _partToHex(r) + _partToHex(g) + _partToHex(b) + alpha;
}

function _partToHex(part) {    
    const hex = (part).toString(16);    
    return hex.length == 1 ? "0" + hex : hex;
}

export default rgbToHex;