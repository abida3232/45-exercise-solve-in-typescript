//define afunction to create a car object
function creat_car(manufacture, model) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    //insilize a car object with manufacture and model
    var car = {
        manufacture: manufacture,
        model: model,
    };
    //add additional object to a car object
    option.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//call the function to create a car object.
var my_car = creat_car("Toyota", "Carrolla", "colour:Black", "Sunroof:true", "year:2010");
console.log(my_car);
