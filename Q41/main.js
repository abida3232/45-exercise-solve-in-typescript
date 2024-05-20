//define a function to print magicine name
function show_magician(magician) {
    magician.forEach(function (name) { return (console.log(name)); });
}
//define anarray
var magician_name = ["Herry porter", "Hamza", "Ayan"];
//call the function to print each magicin name
show_magician(magician_name);
