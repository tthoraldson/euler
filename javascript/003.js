/* Completed on 8/4/2016 by Theresa Thoraldson
   source: https://projecteuler.net/problem=3 */
var initialNumber = 600851475143  // the number we are trying to find the largest prime factor inside of
var primeArray = []               // empty array that will store all prime numbers found within initialNumber
var i = 0;

while(i <= 1000){
  for(var x = 2; x <= (1000/2); x++){
    if (i % x === 0){
      primeArray.push(x);
    }

  }
  i++
}
console.log(primeArray);
