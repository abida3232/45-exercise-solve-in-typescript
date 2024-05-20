var current_users = ["Aish", "Ali", "Ayan", "Mahad", "Areeba"];
var new_users = ["Marwa", "ali", "Mariam", "Areeba"];
new_users.forEach(function (new_one_users) {
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLocaleLowerCase() === new_one_users.toLocaleLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_users, "  is already taken. "));
    }
    else {
        console.log("this user name ".concat(new_one_users, "  is avialable."));
    }
});
