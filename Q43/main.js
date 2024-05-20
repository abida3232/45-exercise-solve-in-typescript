//difine afuncation
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magicain) {
    return magicain.map(function (name) { return "The great  magician  ".concat(name); });
}
//difine an array
var magician_name = ["Herry Porter", "Hamza", "Ayan"];
//make a copy of orgnal array.
var copy_magician_name = magician_name.slice();
//modify the copy array to include the great megician.
var copy_great_megician = make_great(copy_magician_name);
//show both array orignal and copy
//orignal
show_magician(magician_name);
//copy
show_magician(copy_great_megician);
