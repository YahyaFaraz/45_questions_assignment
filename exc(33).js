var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < a.length; i++) {
    var ordinalending = void 0;
    if (a[i] === 1) {
        ordinalending = 'st';
    }
    else if (a[i] === 2) {
        ordinalending = 'nd';
    }
    else if (a[i] === 3) {
        ordinalending = 'rd';
    }
    else {
        ordinalending = 'th';
    }
    console.log("".concat(a[i]).concat(ordinalending, " "));
}
