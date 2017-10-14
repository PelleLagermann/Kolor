function toRbg (r, g, b, a) {
    let prefix = "rgb";
    let alpha = "";
    if (typeof a !== "undefined" && a !== null) {
        prefix += "a";
        alpha = ", " + a;
    }

    return `${prefix}(${r}, ${g}, ${b}${alpha})`;
}

export default toRbg;