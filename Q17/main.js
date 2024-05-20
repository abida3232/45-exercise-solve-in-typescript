//guest list arry
var guestlist = ["Arena", "Aisha", "Marva", "Maia"];
//guest who cannot come
var donotCome = guestlist[0];
// print amassage donot come
console.log(donotCome, "Nahi ahh sakti");
//add value in guest list
guestlist.splice(0, 1, "Marium");
//print amessage for dinner
console.log("Good News! Wehave found a bigger table for dinner");
//adding a new guest  in index in starting point array
guestlist.unshift("saima");
//adding a new guest in last index in array
guestlist.push("Arfa");
//making a variable starting a middle index
var middleindex = Math.floor(guestlist.length / 2);
//Adding a new guestto middle indexof arry
guestlist.splice(middleindex, 0, "Areeba");
console.log("updated list of our guests");
//print a invition to guest one by one with their names
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ",would you like to dinner with me")); });
//infome that only two guest can join me in dinner table
console.log("unfortunatly,the new dinner table wont arrive on time,so I can only invite two gusts to dinner with me");
//using while loopto remove guest from the arrary until only two names remain
while (guestlist.length > 2) {
    var removedguest = guestlist.pop();
    console.log("sorry,".concat(removedguest, " I cant invite you to dinner"));
}
//sendingsto the last two gueston the list
console.log("invitaion to the last two guest");
guestlist.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ",you are still invited to dinner")); });
//removintwo guest from the list
guestlist.pop();
guestlist.pop();
console.log("Emptylist;", guestlist);
