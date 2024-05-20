//guest list arry
let guestlist = ["Arena","Aisha","Marva","Maia"];
//guest who cannot come
let donotCome = guestlist[0];
// print amassage donot come
console.log(donotCome,"Nahi ahh sakti");
//add value in guest list
guestlist.splice(0,1,"Marium");
//print amessage for dinner
console.log("Good News! Wehave found a bigger table for dinner");
//adding a new guest  in index in starting point array
guestlist.unshift("saima");
//adding a new guest in last index in array
guestlist .push("Arfa");
//making a variable starting a middle index
let middleindex: number = Math.floor(guestlist.length / 2);
//Adding a new guestto middle indexof arry
guestlist.splice(middleindex,0,"Areeba");
console.log("updated list of our guests"); 
//print a invition to guest one by one with their names
guestlist.forEach(oneguest => console.log(`salam ${oneguest},would you like to dinner with me`));