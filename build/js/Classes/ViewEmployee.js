"use strict";
let find = (empId) => {
    let employeeRecord = JSON.parse(localStorage.getItem('EmployeeRecords'));
    for (let i = 0; i < employeeRecord.length; i++) {
        if (empId === employeeRecord[i]._id) {
            return i;
        }
    }
    return -1;
};
var url = new URL(window.location.href);
// Retrieving query string values
let eid = url.searchParams.get("id");
eid = parseInt(eid);
let indx = find(eid);
console.log(indx);
let Record = JSON.parse(localStorage.getItem('EmployeeRecords'));
document.getElementById('id').value = Record[indx]._id;
// (<any>document.getElementById('profile'))!.value = Record[indx]._profile;
document.getElementById('about').innerHTML = Record[indx]._about;
document.getElementById('fname').value = Record[indx]._firstName;
document.getElementById('mname').value = Record[indx]._middleName;
document.getElementById('lname').value = Record[indx]._lastName;
document.getElementById('gender').value = Record[indx]._gender;
document.getElementById('email').value = Record[indx]._email;
document.getElementById('age').value = Record[indx]._age;
document.getElementById('experience').value = Record[indx]._experience;
document.getElementById('skills').value = Record[indx]._skills;
document.getElementById('salary').value = Record[indx]._salary;
document.getElementById('designation').value = Record[indx]._designation;
