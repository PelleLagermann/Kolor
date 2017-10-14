/*********************************\
 *** String
\*********************************/
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      return this.substr(position || 0, searchString.length) === searchString;
  };
}

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchStr, Position) {
        // This works much better than >= because
        // it compensates for NaN:
        if (!(Position < this.length))
          Position = this.length;
        else
          Position |= 0; // round position
        return this.substr(Position - searchStr.length,
                           searchStr.length) === searchStr;
    };
}

if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    };
}

if (!String.prototype.trimLeft) {
    String.prototype.trimLeft = function () {
        return this.replace(/^\s+/, "");      
    };
}

if (!String.prototype.trimRight) {
    String.prototype.trimRight = function () {
        return input.replace(/\s+$/, "");
    };
}