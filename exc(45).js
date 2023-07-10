function Car_Information(Manufacturer, Model_Name) {
    var kwargs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        kwargs[_i - 2] = arguments[_i];
    }
    var Car_Info = {
        Manufacturer: Manufacturer,
        Model_Name: Model_Name,
    };
    for (var i = 0; i < kwargs.length; i += 2) {
        var key = kwargs[i];
        var value = kwargs[i + 1];
        Car_Info[key] = value;
    }
    return Car_Info;
}
var car = Car_Information("BMW", "i8", "Color", 'Red', 'Year', 2014);
console.log(car);
