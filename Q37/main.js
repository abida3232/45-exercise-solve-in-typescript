//making a function
function making_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I love typescript"; }
    console.log("creating a ".concat(size, " shirt with ").concat(printMessage, "prints on shirt"));
}
//calling a function by defalt vallue
making_shirt();
//calling a function
making_shirt("medum");
making_shirt("small", "I love jawascript");
