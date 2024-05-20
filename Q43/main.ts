//difine afuncation
function show_magician(magician:string []){
    magician.forEach(name=>console.log(name));
}
function make_great(magicain:string [] ){
   return  magicain.map(name=>`The great  magician  ${name}`);
}
//difine an array
let magician_name=["Herry Porter","Hamza","Ayan"];
//make a copy of orgnal array.
let copy_magician_name=magician_name.slice();
//modify the copy array to include the great megician.
let copy_great_megician = make_great(copy_magician_name);
//show both array orignal and copy
//orignal
show_magician(magician_name);
//copy
show_magician(copy_great_megician);
