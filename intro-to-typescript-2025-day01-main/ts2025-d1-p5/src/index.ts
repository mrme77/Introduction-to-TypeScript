const numbers = [1, 2, 3, 4, 5];
//
function applyOperation(
  numbers: number[], 
  operation: (num: number) => number
): number[] {
  return numbers.map(operation);
}
//
function double(x: number): number {
  return x * 2;
}
//
let doubledNumbers = applyOperation(numbers, double);
console.log("Doubled:", applyOperation(numbers, double));
