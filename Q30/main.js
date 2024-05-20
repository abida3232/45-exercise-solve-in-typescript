//making an array
var userName = ["Areeba", "Bano", "faiza", "Admin", "Aisha"];
//using foreach in array
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hellow ".concat(oneUser, "would you like to see a status report?"));
    }
    else {
        console.log("Hellow ".concat(oneUser, "Thank you for logging in again."));
    }
});
