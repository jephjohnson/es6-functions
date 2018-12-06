/*
 *	Joins all string elements from an array to one string, excluding the last node of the array
 *
 *	@function	arrayToString
 *	@param		array arr
 *	@return 	string
 */

//function arrayToString(arr) {}
const items = ['foo', 'bar', 'foooobarrrrr'];
const newItems = items.slice(0,-1);

const arrayToString = (arr) => {
  return arr.map((a) => a).join(',');
};

console.log(arrayToString(newItems));