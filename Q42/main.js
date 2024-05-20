//difine afuncation
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magicain) {
    return magicain.map(function (name) { return "the great  magician  ".concat(name); });
}
//difine an array
var magician_name = ["Herry Porter", "Hamza", "Ayan"];
//call a function to print each magician name.
var great_magicain = make_great(magician_name);
show_magician(great_magicain);
