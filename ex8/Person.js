/*
 *	@function	{Object} Person
 *	@param		string name
 */
// function Person(name) {
// 	// Todo: Complete the function

// }


// var Mike = Person('John Doe');
// var Bob = Person('John Doe');
// var Worker = Person('John Doe');

// /*
//  * Directions Part 1:
//  * 	- Update the Person function so the below statements don't generate any errors
//  */
// Mike.setName('Mike');	// name setter
// Mike.getName(); 		// name getter



class Person {
    constructor(name) {
        this._name = name;
    }
  
    get name() {
        return this._name;
    }
  
    set name(newName) {
        this._name = newName;  
    }
  
}
         
let Mike = new Person('John Doe');
let Bob = new Person('John Doe');
let Worker = new Person('John Doe');


Mike.name = 'Mike'
console.log(Mike.name);









/*
 * Directions Part 2:
 * 	- Update the Person function so the below statements don't generate any errors
 */
Bob.name('Bob');	// name setter
Bob.name();  		// name getter


/*
 * Directions part 3:
 * - Update the Person function so the below statements don't generate any errors
 *
 */
Worker.setName('Kevin');			// name setter
Worker.profession('Programmer');	// profession setter
Worker.profession();				// profession getter

Worker.introduce();					// Calling this method, the Person will introduce themselves with their name and profession.