enum weekDay {    
  MONDAY = "MONDAY", 
  TUESDAY = "TUESDAY", 
  WEDNESDAY = "WEDNESDAY", 
  THURSDAY = "THURSDAY", 
  FRIDAY = "FRIDAY"
};

const employee: {
  empName: string,
  dependents: number,
  committees: [string, boolean],
  payDay: string
} = {
  empName: "Axle",
  dependents: 2,
  committees: ["Philanthropy", true],
  payDay: weekDay.FRIDAY
};

// Log to console
console.log(employee);

// Render to browser
document.body.innerHTML = `
  <h2>Employee Info</h2>
  <pre>${JSON.stringify(employee, null, 2)}</pre>
`;
