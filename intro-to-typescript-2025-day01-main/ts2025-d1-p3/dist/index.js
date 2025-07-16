var weekDay;
(function (weekDay) {
    weekDay["MONDAY"] = "MONDAY";
    weekDay["TUESDAY"] = "TUESDAY";
    weekDay["WEDNESDAY"] = "WEDNESDAY";
    weekDay["THURSDAY"] = "THURSDAY";
    weekDay["FRIDAY"] = "FRIDAY";
})(weekDay || (weekDay = {}));
;
var employee = {
    empName: "Axle",
    dependents: 2,
    committees: ["Philanthropy", true],
    payDay: weekDay.FRIDAY
};
// Log to console
console.log(employee);
// Render to browser
document.body.innerHTML = "\n  <h2>Employee Info</h2>\n  <pre>".concat(JSON.stringify(employee, null, 2), "</pre>\n");
