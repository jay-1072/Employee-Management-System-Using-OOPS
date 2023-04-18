"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindEmployee = void 0;
var Constants_js_1 = require("../Elements/Constants.js");
var FindEmployee = /** @class */ (function () {
    function FindEmployee() {
    }
    FindEmployee.prototype.findEmployee = function (empId) {
        var employeeRecord = JSON.parse(localStorage.getItem(Constants_js_1.EMPLOYEE));
        for (var i = 0; i < employeeRecord.length; i++) {
            if (empId === employeeRecord[i]._id) {
                return i;
            }
        }
        return -1;
    };
    return FindEmployee;
}());
exports.FindEmployee = FindEmployee;
