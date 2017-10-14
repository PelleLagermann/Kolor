function toHsl(r, g, b, a) {
    let prefix = "hsl";
    let alpha = "";
    if (typeof a !== "undefined" && a !== null) {
        prefix += "a";
        alpha = ", " + a;
    }

    r /= 255, g /= 255, b /= 255;

    var max = Math.max(r, g, b), 
        min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    const hue = h * 360;
    const saturation = s * 100 + "%";
    const lightness = l * 100 + "%";

    return `${prefix}(${hue}, ${saturation}, ${lightness}${alpha})`;
}

export default toHsl;