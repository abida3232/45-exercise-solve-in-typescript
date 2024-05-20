//define afunction to create a car object
function creat_car(manufacture:string,model:string,...option){
    //insilize a car object with manufacture and model
    let car={
        manufacture:manufacture,
        model:model,
    };
    //add additional object to a car object
    option.forEach(option=>{
let [key,value]=option.split(":");
car[key.trim()]=value.trim()
    });
    return car;
}
//call the function to create a car object.
let my_car= creat_car("Toyota","Carrolla","colour:Black","Sunroof:true","year:2010");
console.log(my_car);