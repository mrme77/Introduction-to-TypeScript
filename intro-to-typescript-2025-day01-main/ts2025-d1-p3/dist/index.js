"use strict";
var weekDay;
(function (weekDay) {
    weekDay["MONDAY"] = "MONDAY";
    weekDay["TUESDAY"] = "TUESDAY";
    weekDay["WEDNESDAY"] = "WEDNESDAY";
    weekDay["THURSDAY"] = "THURSDAY";
    weekDay["FRIDAY"] = "FRIDAY";
})(weekDay || (weekDay = {}));
;
const employee = {
    empName: "Axle",
    dependents: 2,
    committees: ["Philanthropy", true],
    payDay: weekDay.FRIDAY
};
//employee.committees[0] = "hello";
console.log(employee);
