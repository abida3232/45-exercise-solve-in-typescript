//difine function with arest parameter that axcept Item argument.
function makeSandwich(...item:string[]){
    console.log("\n Making a Sandwich with the following Item");
    item.forEach(singleitem=>console.log( singleitem));
    console .log("\n Now engoy the sandwich");
}
//calling a function thre times with different argument.
makeSandwich("bread","butter","cheese","chicken" );
makeSandwich("bread","butter","mayo","tomato","cucumber");
makeSandwich("beaf","butter","bread","cacumber");