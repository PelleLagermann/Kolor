function anyToRGBA (color) {    
    const tmpElem = document.createElement("div");
    tmpElem.style.backgroundColor = color;
    document.body.appendChild(tmpElem);

    const rgb = getComputedStyle(tmpElem).backgroundColor;
    console.log("anyToRGBA", color);
    console.log("anyToRGBA", rgb);
}

export default anyToRGBA;