let guestlist =["Arena","Aisha","Marva","Maria"];
let donotcome = guestlist[0];
console.log(donotcome,"nahi ahh skti");
guestlist.splice(0,1,"Mariam");
guestlist.forEach(guest => console.log(`salam ${guest},would you like to Dinner with me`));
