type returnable = string | number;
function generateId(useNumeric: boolean): returnable {
  if (useNumeric) {
    return Math.floor(Math.random() * 100);
  } else {
    return "Employee ID:" 
    + Math.random()
    .toString(36)
    .substring(6)
  }
};
//
console.log(generateId(true));
console.log(generateId(false));

