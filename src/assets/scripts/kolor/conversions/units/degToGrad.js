function degToGrad (degrees) {
    let input = degrees;
    if (typeof input === "string") {
        input = input.trim().toLowerCase().replace("deg", "");
    }
    
    input = parseInt(input);
    if (Number.isInteger(input)) {
        return input / 360 * 400;
    } else {
        console.error(degrees + ": isn't a valid format for degrees for degToGrad()");
        return null;
    }


    
}

export default degToGrad;