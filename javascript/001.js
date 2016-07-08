/*Completed on 7/8/2016 by Theresa Thoraldson
  source: https://projecteuler.net/problem=1 */

var list = [];
 
for (i=1; i < 1000; i++) {
	if (i % 3 === 0) {
 		list.push(i);
 	}
 	else if (i % 5 === 0) {
 		list.push(i);
 	}
}

var count = 0;
 
for(var i=0, n=list.length; i < n; i++) {
   count += list[i]; 
}