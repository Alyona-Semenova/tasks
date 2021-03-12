function sumSquareDifference (n) {
	var sumOfSquare = 0;
  for(var i = 1; i <= n; i++){
  	sumOfSquare += i ** 2;
  }
  let squareOfSum = 0;
  for (var i = 1; i <= n; i++) {
  squareOfSum += i;
  }
  return squareOfSum**2 - sumOfSquare;
};
