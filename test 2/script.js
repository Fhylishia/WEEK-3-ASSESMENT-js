// Start: basket with 4 items
let shoppingList = ["Bread", "Milk", "Sugar", "Rice"];

//Display entire list
console.log("Full list: ", shoppingList);

//Display first item - number 0
console.log("First item: " + shoppingList[0]);

//Display last item
console.log("Last item: " + shoppingList[shoppingList.length - 1]);

// Add "Cooking Oil" to the end
shoppingList.push("Cooking Oil");
console.log("After adding Cooking Oil: ", shoppingList);

// Remove first item - Bread goes out
shoppingList.shift();
console.log("After removing first item: ", shoppingList);

// Change "Sugar" to "Tea Leaves"
let sugarPosition = shoppingList.indexOf("Sugar");
shoppingList[sugarPosition] = "Tea Leaves";
console.log("After changing Sugar to Tea Leaves: ", shoppingList);

// Display total number of items
console.log("Total items: " + shoppingList.length);