function toFraction (n, max) {    
    n = Math.min(max, Math.max(0, parseFloat(n)));
    
    if (max === 100) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }
    
    return (n % max) / parseFloat(max);
}

export default toFraction;