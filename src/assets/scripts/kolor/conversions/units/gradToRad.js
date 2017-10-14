import gradToDeg from "./gradToDeg";
import degToRad from "./gradToDeg";

function gradToRad (gradians) {
    
    return degToRad(gradToDeg(gradians));
}

export default gradToRad;