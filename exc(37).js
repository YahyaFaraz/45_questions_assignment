function make_shirt(size, text) {
    if (text === void 0) { text = 'I love TypeScript'; }
    if (size == 'Large') {
        console.log("Shirt size is ".concat(size, " and the text printed on the shirt is '").concat(text, "'."));
    }
    else if (size == 'Medium') {
        console.log("Shirt size is ".concat(size, " and the text printed on the shirt is '").concat(text, "'."));
    }
    else {
        text = 'I love programming';
        console.log("Shirt size is ".concat(size, " and the text printed on the shirt is '").concat(text, "'."));
    }
}
make_shirt("Small");
