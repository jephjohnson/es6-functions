/*
 *	Directions
 *	Write a Javascript program that will return an array populated with the following values:
 *		- the current date formatted: DD-MM-YYYY
 *		- the number of days before next christmas
 *	Note
 *	- Native Javascript only
 *
 *	@function	app
 *
 */
//function app() {}

//the current date formatted: DD-MM-YYYY
let d = new Date();
let app = `${("0" + (d.getMonth() +1)).slice(-2)}-${("0" + (d.getDate())).slice(-2)}-${d.getFullYear()}`;
console.log(app)


//the number of days before next christmas
const app = (compare) => {
    let todaysDate = new Date().toISOString().slice(0, 10);
    let startDate = Date.parse(todaysDate);
    let endDate = Date.parse(compare);
    let timeDiff = endDate - startDate;
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  }
  console.log(app("2018-12-25"))