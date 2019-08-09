function sumTwoSmallestNumbers(numbers) {
  const smallestNumber = Math.min.apply(Math, numbers);
  let twoSmallestNumber = Math.max.apply(Math, numbers);
  numbers.forEach((el) => {
    twoSmallestNumber = el && (smallestNumber < el && twoSmallestNumber > el)
      ? el
      : twoSmallestNumber;
  });
  return twoSmallestNumber !== -Infinity
    ? smallestNumber + twoSmallestNumber
    : smallestNumber !== -Infinity
      ? smallestNumber
      : 0;
}