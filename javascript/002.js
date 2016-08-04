/* Completed on 8/4/2016 by Theresa Thoraldson
   source: https://projecteuler.net/problem=2 */
var numbers = [], even = [], count = 0, max = 4000000, a = 1, b = 1, f = 0;

while(f <= max && b <= max && a <= max) {
  numbers.push(f);
  f = a + b;
  a = b;
  b = f;
}

for (var i = 0; i < numbers.length; i++){
  if (numbers[i] % 2 === 0){
    even.push(numbers[i]);
  }
}

for(i=0; i < even.length; i++) {
  count += even[i];
}

console.log(count);

/* logs out 4613732 */
