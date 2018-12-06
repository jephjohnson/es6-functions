/**
 *	Evaluates if a given object has a given property
 *	Function hasOwnProperty is forbidden
 *
 *	@function	hasProperty
 *	@param		object obj
  *	@param		string propertyName
 *	@return		boolean
 */

//function hasProperty(obj, propertyName) {}
const myObject = {
    hello: "Hello message"
 };
 const hasProp = (prop, obj) => {
   if(!(prop in obj))
     console.log("no")
   else
    console.log("yes")
 };
 hasProp('hello', myObject)