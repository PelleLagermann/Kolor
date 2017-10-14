function toLowerCaseString (input) {
    if (typeof input !== "string") {
        input = "" + input;
    }
    return input.trim().toLowerCase();
}

export default toLowerCaseString;