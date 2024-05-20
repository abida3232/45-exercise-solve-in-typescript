//difine function with arest parameter that axcept Item argument.
function makeSandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("\n Making a Sandwich with the following Item");
    item.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\n Now engoy the sandwich");
}
//calling a function thre times with different argument.
makeSandwich("bread", "butter", "cheese", "chicken");
makeSandwich("bread", "butter", "mayo", "tomato", "cucumber");
makeSandwich("beaf", "butter", "bread", "cacumber");
