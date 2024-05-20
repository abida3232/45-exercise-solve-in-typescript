//making an array
var userName = ["Areeba", "Amna", "Admin", "Dua", "Faiza"];
userName = [];
if (userName.length === 0) {
    console.log("your array is empty we need to find some users?");
}
else {
    userName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hellow ".concat(oneUser, "  would you like to see a status report?"));
        }
        else {
            console.log("Hellow ".concat(oneUser, "  Thank you for logging in again."));
        }
    });
}
