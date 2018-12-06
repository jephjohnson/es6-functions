/*
 *	Convert an object into a list of [key, value] pairs, behaving as Object.entries()
 *	Function entries is forbidden
 *
 *	@function	toListOfPairs
 *	@param		object obj
 *	@return 	array
 */

//function toListOfPairs(obj) {}
const objs = (obj) => {
    return Array.from(Object.keys(obj), a => obj[a])
}
console.log(objs({0: 'red', 1: 'green', 2: 'blue'}))