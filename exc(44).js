function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Your sandwich order:");
    console.log("Bread");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log(item);
    }
    console.log("Enjoy your sandwich!");
    console.log("----------------------------------");
}
make_sandwich("Chicken tikka", "Olives", "Onions", "Olive oil", "Ketchup");
make_sandwich("Beef", "Black olives", "Pickles", "Mustard", "Thousand Island sauce");
make_sandwich("Chicken fillet", "Olives", "Mayo", "Cucumber", "Jalepenos");
