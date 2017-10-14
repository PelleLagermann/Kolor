const cssInteger = "[-\\+]?\\d+"; 
const cssNumber = "[-\\+]?\\d*\\.\\d+";
const cssUnit = "((?:" + cssNumber + ")|(?:" + cssInteger + ")" + ")(%|grad|rad|turn|deg)?";

// Matchers for rgb, rgba, hsl & hsla
// Matchers are flexible 
// - Parentheses and commas are optional
// - Whitespace can take the place of commas or opening parentheses
const colorMatch3 = "[\\s|\\(]+(" + cssUnit + ")[,|\\s]+(" + cssUnit + ")[,|\\s]+(" + cssUnit + ")\\s*\\)?";
const colorMatch4 = "[\\s|\\(]+(" + cssUnit + ")[,|\\s]+(" + cssUnit + ")[,|\\s]+(" + cssUnit + ")[,|\\s]+(" + cssUnit + ")\\s*\\)?";

// Matchers for hex variants
const hex3 = /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
const hex4 = /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex8 = /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;

export {cssInteger, cssNumber, cssUnit, colorMatch3, colorMatch4, hex3, hex4, hex6, hex8};