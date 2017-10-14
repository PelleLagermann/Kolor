import "./polyfills"

import inputToKolor from "./inputToKolor";

//Helpers
import h from "./helpers/";

//Conversions
import degToGrad from "./conversions/units/degToGrad";
import degToRad from "./conversions/units/degToRad";
import degToTurn from "./conversions/units/degToTurn";
import gradToDeg from "./conversions/units/gradToDeg";
import gradToRad from "./conversions/units/gradToRad";
import gradToTurn from "./conversions/units/gradToTurn";
import radToDeg from "./conversions/units/radToDeg";
import turnToDeg from "./conversions/units/turnToDeg";

import toHex from "./conversions/toString/toHex"; 
import toHsl from "./conversions/toString/toHsl"; 
import toRgb from "./conversions/toString/toRgb"; 
import anyToRGBA from "./conversions/colors/anyToRGBA";
import nameToHex from "./conversions/colors/nameToHex";

import contrast from "./functions/contrast"; 

function kolor(input) {       
    //return if input is already an instance of Kolor
    if (input instanceof kolor) {
        return input;
    }
    
    // If called as a function, call using new instead
    if (!(this instanceof kolor)) {
        return new kolor(input);
    }
    
    const color = inputToKolor(input);
    this.r = color.r;
    this.g = color.g;
    this.b = color.b;
    this.a = color.a;
    
    return
}

kolor.prototype = {
    /* EXPORTS */
    toHex () {
        return toHex(this.r, this.g, this.b);
    },
    toHexa () {
        return toHex(this.r, this.g, this.b, this.a);
    },
    toHsl () {
        return toHsl(this.r, this.g, this.b);
    },
    toHsla () {
        return toHsl(this.r, this.g, this.b, this.a);
    },
    toRgb () {
        return toRgb(this.r, this.g, this.b);
    },
    toRgba () {
        return toRgb(this.r, this.g, this.b, this.a);
    },

    /*  */
    contrast (input) {
        var k = inputToKolor(input);
        if (k) {
            return contrast(this, k);
        } else {
            console.info("Invalid contrast color: " + input);
        }        
    }
};



export default kolor;