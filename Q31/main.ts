//making an array
let userName=["Areeba","Amna","Admin","Dua","Faiza"];
//remove all values in array
userName=[]
if(userName.length===0){
    console.log("your array is empty we need to find some users?");
}else{
    //using foreach method
    userName.forEach(oneUser=>{
        if(oneUser==="Admin"){
      console.log(`Hellow ${oneUser}  would you like to see a status report?`);
        }else{
            console.log(`Hellow ${oneUser}  Thank you for logging in again.`);
        }
    })}