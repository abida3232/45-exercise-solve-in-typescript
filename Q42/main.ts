//difine afuncation
function show_magician(magician:string []){
    magician.forEach(name=>console.log(name));
}
function make_great(magicain:string [] ){
   return  magicain.map(name=>`The great  magician  ${name}`);
}
//difine an array
let magician_name=["Herry Porter","Hamza","Ayan"];
//call a function to print each magician name.
 let  great_magicain=make_great(magician_name) ;
 show_magician(great_magicain);

