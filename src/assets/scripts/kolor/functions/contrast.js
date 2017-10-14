function luminanace(r, g, b) {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow( (v + 0.055) / 1.055, 2.4 );
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function contrast(kolor1, kolor2) {
    console.log(kolor1, kolor2);

    return (luminanace(kolor1.r, kolor1.g, kolor1.b) + 0.05)
         / (luminanace(kolor2.r, kolor2.g, kolor2.b) + 0.05);
}
// contrast([255, 255, 255], [255, 255, 0]); // 1.074 for yellow
// contrast([255, 255, 255], [0, 0, 255]); // 8.592 for blue

export default contrast;