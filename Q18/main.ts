//making a array of countries names and print it in orignal order .
let countriesToVisit:string[]=["Danmark","China","Rusia","Sudia","America"];
console.log("orignal order:", countriesToVisit);

//print aarray in alphabatical orderwithout modefing the actual list.
console.log("Alphabatcal order:",[...countriesToVisit].sort());
//show that array is still in its orginal order.
console.log("still in orginal order",countriesToVisit);
//print aarry in reverse order without modyfing the actual list.
console.log("reverse order",[...countriesToVisit].reverse());
//show that array is still in its orginal order.
console.log("still in orginal order",countriesToVisit);
//print a orignal array reverse order now
console.log("orignal array reversed:",countriesToVisit .reverse());
// show the array back to its orignal order
console.log("back to orignal order:",countriesToVisit .reverse());
//print a array in alphabatical order.
console.log("sorted in alphabatical order:",countriesToVisit.sort());

//print a orignal array reverse order again
console.log("orignal array reversed again:",countriesToVisit .reverse());