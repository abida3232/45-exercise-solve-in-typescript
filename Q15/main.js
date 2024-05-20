var guestlist = ["Arena", "Aisha", "Marva", "Maria"];
var donotcome = guestlist[0];
console.log(donotcome, "nahi ahh skti");
guestlist.splice(0, 1, "Mariam");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ",would you like to Dinner with me")); });
