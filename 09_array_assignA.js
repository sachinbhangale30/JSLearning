const arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`1.1] In the given array first element: ${arraySeasonalFruits[0]}`);
console.log(`In the given array last element: ${arraySeasonalFruits[arraySeasonalFruits.length-1]}`);

console.log(`----------------------------------------------------------`);

console.log(`1.2] Before addition of 'Papaya': ${arraySeasonalFruits}`);
arraySeasonalFruits.unshift("Papaya");
console.log(`After addition of 'Papaya': ${arraySeasonalFruits}`);

console.log(`----------------------------------------------------------`);
console.log(`1.3] Before removing of 'Mango': ${arraySeasonalFruits}`);
arraySeasonalFruits.splice(4,1);
console.log(`After removing of 'Mango': ${arraySeasonalFruits}`);

console.log(`----------------------------------------------------------`);
console.log(`1.4] Before addition of 'Pineapple': ${arraySeasonalFruits}`);
arraySeasonalFruits.push("Pineapple");
console.log(`After addition of 'Pineapple': ${arraySeasonalFruits}`);

console.log(`----------------------------------------------------------`);
console.log(`1.5] Before inserting 'Dragon Fruit': ${arraySeasonalFruits}`);
arraySeasonalFruits.splice(arraySeasonalFruits.length-2,0,"Dragon Fruit");
console.log(`After inserting 'Dragon Fruit': ${arraySeasonalFruits}`);

console.log(`----------------------------------------------------------`);

console.log(`1.6] Before replacing 'Orange' with 'Kiwi': ${arraySeasonalFruits}`);
arraySeasonalFruits.splice(arraySeasonalFruits.length-5,1,'Kiwi')
console.log(`After replacing 'Orange' with 'Kiwi': ${arraySeasonalFruits}`);

console.log(`----------------------------------------------------------`);

console.log(`1.7] Before Selection: ${arraySeasonalFruits}`);
console.log(`Selected elements from index 1 to 4: ${arraySeasonalFruits.slice(1,5)}`);

console.log(`----------------------------------------------------------`);

console.log(`1.8] Array: ${arraySeasonalFruits}`);
console.log(`Last 3 elements: ${arraySeasonalFruits.slice(arraySeasonalFruits.length-3)}`);







