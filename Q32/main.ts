let current_users=["Aish","Ali","Ayan","Mahad","Areeba"]
let new_users=["Marwa","ali","Mariam","Areeba"]
new_users.forEach(new_one_users=> {
    let our_condition =current_users.some(current_one_users=>current_one_users.toLocaleLowerCase()===new_one_users.toLocaleLowerCase())

if(our_condition){
    console.log(`sorry ${new_one_users}  is already taken. `);
}else{
    console.log(`this user name ${new_one_users}  is avialable.`);
}
})
