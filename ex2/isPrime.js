/**
 *	Evaluates if a number is prime or not
 *
 *	@function	isPrime
 *	@param		number num
 *	@return		boolean
 */

//function isPrime(num) {}
const isPrime = (num) => {
    for (let b = 2; b < num; b++) if (num % b == 0) return false;
    return  num >= 2; 
}
console.log(isPrime(1));