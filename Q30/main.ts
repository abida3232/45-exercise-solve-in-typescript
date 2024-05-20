//making an array
let userName=["Areeba","Bano","faiza","Admin","Aisha"];
//using foreach in array
userName.forEach(oneUser=>{
    if(oneUser==="Admin"){
  console.log(`Hellow ${oneUser}would you like to see a status report?`);
    }else{
        console.log(`Hellow ${oneUser}Thank you for logging in again.`);
    }
})