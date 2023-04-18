"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortService = void 0;
var BasicElements_js_1 = require("../Elements/BasicElements.js");
var sortService = /** @class */ (function () {
    function sortService() {
    }
    sortService.prototype.sortByEId = function (sortType) {
        var records = JSON.parse(localStorage.getItem('EmployeeRecords'));
        if (sortType === 'ASC') {
            records.sort(function (e1, e2) {
                return parseInt(e1._id) - parseInt(e2._id);
            });
        }
        else {
            records.sort(function (e1, e2) {
                return parseInt(e2._id) - parseInt(e1._id);
            });
        }
        localStorage.setItem('EmployeeRecords', JSON.stringify(records));
        BasicElements_js_1._tblbody.innerHTML = '';
    };
    return sortService;
}());
exports.sortService = sortService;
