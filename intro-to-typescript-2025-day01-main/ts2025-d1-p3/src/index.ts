enum weekDay {    
  MONDAY = "MONDAY", 
  TUESDAY = "TUESDAY", 
  WEDNESDAY = "WEDNESDAY", 
  THURSDAY = "THURSDAY", 
  FRIDAY = "FRIDAY"
};
const employee : {
  empName : string,
  dependents : number,
  committees : [string, boolean],
  payDay : string
} = {
  empName:"Axle",
  dependents:2,
  committees:["Philanthropy", true],
  payDay : weekDay.FRIDAY
};
//employee.committees[0] = "hello";
console.log(employee);

