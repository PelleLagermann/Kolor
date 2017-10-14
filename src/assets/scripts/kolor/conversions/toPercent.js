import toLowerCaseString from "../helpers/toLowerCaseString";

function toPercent (input) {
    const str = toLowerCaseString(input);        
    let val = parseFloat(str);    
    if (str.indexOf("%") === -1 && val <= 1) {
        val = val * 100;
    }
    
    return val
}

export default toPercent;