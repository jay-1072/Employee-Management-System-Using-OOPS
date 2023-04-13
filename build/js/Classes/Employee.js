"use strict";
///<reference path='../Interfaces/IEmployeeDetails.ts' />
///<reference path='../Interfaces/IEmployeeMethods.ts' />
class Employee {
    // Employee class constructor
    constructor(_id, _profile, _about, _firstName, _middleName, _lastName, _gender, _age, _email, _designation, _skills, _experience, _salary) {
        this.addEmployee = (newEmployee) => {
            let tempVar = localStorage.getItem(EMPLOYEE);
            if (tempVar != null) {
                employeeRecord = JSON.parse(tempVar);
            }
            employeeRecord.push(newEmployee);
            localStorage.setItem(EMPLOYEE, JSON.stringify(employeeRecord));
            Employee.viewEmployees();
        };
        this.updateEmployee = (employee, index) => {
            employeeRecord = JSON.parse(localStorage.getItem(EMPLOYEE));
            employeeRecord[index] = employee;
            localStorage.setItem(EMPLOYEE, JSON.stringify(employeeRecord));
        };
        this.deleteEmployee = (index) => {
            employeeRecord = JSON.parse(localStorage.getItem(EMPLOYEE));
            employeeRecord.splice(index, 1);
            localStorage.setItem(EMPLOYEE, JSON.stringify(employeeRecord));
        };
        this._id = _id;
        this._profile = _profile;
        this._about = _about;
        this._firstName = _firstName;
        this._middleName = _middleName;
        this._lastName = _lastName;
        this._gender = _gender;
        this._age = _age;
        this._email = _email;
        this._designation = _designation;
        this._skills = _skills;
        this._experience = _experience;
        this._salary = _salary;
    }
    // getter method for employeeId
    get employeeId() {
        return this._id;
    }
    // setter method for employeeId
    set employeeId(_id) {
        this._id = _id;
    }
    // getter method for employeeProfile
    get employeeProfile() {
        return this._profile;
    }
    // setter method for employeeProfile
    set employeeProfile(_profile) {
        this._profile = _profile;
    }
    // getter method for employeeAboutUs
    get employeeAboutUs() {
        return this._about;
    }
    // setter method for employeeAboutUs
    set employeeAboutUs(_about) {
        this._about = _about;
    }
    // getter method for employeeFirstName
    get employeeFirstName() {
        return this._firstName;
    }
    // setter method for employeeFirstName
    set employeeFirstName(_firstName) {
        this._firstName = _firstName;
    }
    // getter method for employeeMiddleName
    get employeeMiddleName() {
        return this._middleName;
    }
    // setter method for employeeMiddleName
    set employeeMiddleName(_middleName) {
        this._middleName = _middleName;
    }
    // getter method for employeeLastName
    get employeeLastName() {
        return this._lastName;
    }
    // setter method for employeeLastName
    set employeeLastName(_lastName) {
        this._lastName = _lastName;
    }
    // getter method for employeeGender
    get employeeGender() {
        return this._gender;
    }
    // setter method for employeeGender
    set employeeGender(_gender) {
        this._gender = _gender;
    }
    // getter method for employeeAge
    get employeeAge() {
        return this._age;
    }
    // setter method for employeeAge
    set employeeAge(_age) {
        this._age = _age;
    }
    // getter method for employeeContact
    get employeeEmail() {
        return this._email;
    }
    // setter method for employeeContact
    set employeeEmail(_email) {
        this._email = _email;
    }
    // getter method for employeeDesignation
    get employeeDesignation() {
        return this._designation;
    }
    // setter method for employeeDesignation
    set employeeDesignation(_designation) {
        this._designation = _designation;
    }
    // getter method for employeeSkills
    get employeeSkills() {
        return this._skills;
    }
    // setter method for employeeSkills
    set employeeSkills(_skills) {
        this._skills = _skills;
    }
    // getter method for employeeExperience
    get employeeExperience() {
        return this._experience;
    }
    // setter method for employeeExperience
    set employeeExperience(_experience) {
        this._experience = _experience;
    }
    // getter method for employeeSalary
    get employeeSalary() {
        return this._salary;
    }
    // setter method for employeeSalary
    set employeeSalary(_salary) {
        this._salary = _salary;
    }
}
Employee.viewEmployees = () => {
    if (localStorage.getItem(EMPLOYEE) != null) {
        employeeRecord = JSON.parse(localStorage.getItem(EMPLOYEE));
        html = "";
        for (let i = 0; i < employeeRecord.length; i++) {
            html += `<tr>`;
            html += `<td>` + employeeRecord[i]._id + `</td>`;
            html += `<td>` + employeeRecord[i]._profile + `</td>`;
            html += `<td>` + employeeRecord[i]._about + `</td>`;
            html += `<td>` + employeeRecord[i]._firstName + `</td>`;
            html += `<td>` + employeeRecord[i]._middleName + `</td>`;
            html += `<td>` + employeeRecord[i]._lastName + `</td>`;
            html += `<td>` + employeeRecord[i]._gender + `</td>`;
            html += `<td>` + employeeRecord[i]._age + `</td>`;
            html += `<td>` + employeeRecord[i]._email + `</td>`;
            html += `<td>` + employeeRecord[i]._designation + `</td>`;
            html += `<td>` + employeeRecord[i]._skills + `</td>`;
            html += `<td>` + employeeRecord[i]._experience + `</td>`;
            html += `<td>` + employeeRecord[i]._salary + `</td>`;
            html += "</tr>";
        }
        document.getElementById('tblBody').innerHTML = html;
    }
};
const EMPLOYEE = 'EmployeeRecords';
let employeeRecord = [];
let html = "";
let employeeObj;
let index;
const submitBtn = document.getElementById('submitBtn');
const updateBtn = document.getElementById('updateBtn');
const viewBtn = document.getElementById('viewBtn');
(() => {
    Employee.viewEmployees();
})();
let Add_Update = () => {
    let eId = document.getElementById('empId');
    let eProfile = document.getElementById('empProfile');
    let eFirstName = document.getElementById('empFname');
    let eMiddleName = document.getElementById('empMname');
    let eLastName = document.getElementById('empLname');
    let eGender = document.getElementById('empGender');
    let eEmail = document.getElementById('empEmail');
    eId = parseInt(eId.value);
    eProfile = eProfile.value;
    let eAbout = 'I am trainee';
    eFirstName = eFirstName.value;
    eMiddleName = eMiddleName.value;
    eLastName = eLastName.value;
    eGender = eGender.value;
    let eAge = 21;
    eEmail = eEmail.value;
    let eDesignation = '';
    let eSkills = ['HTML5', 'CSS3', 'Bootstrap', 'JAVA', 'Typescript'];
    let eExperience = 1;
    let eSalary = 50000;
    employeeObj = new Employee(eId, eProfile, eAbout, eFirstName, eMiddleName, eLastName, eGender, eAge, eEmail, eDesignation, eSkills, eExperience, eSalary);
    employeeObj.addEmployee(employeeObj);
    // employeeObj.updateEmployee(employeeObj, index);
};
submitBtn.onclick = () => {
    Add_Update();
};
// updateIcon.onclick = (empId:number):void => {
//     index = findEmployee(empId);
// }
updateBtn.onclick = () => {
    Add_Update();
};
// Search Function
let findEmployee = (empId) => {
    employeeRecord = JSON.parse(localStorage.getItem(EMPLOYEE));
    for (let i = 0; i < employeeRecord.length; i++) {
        if (empId === employeeRecord[i]._id) {
            return i;
        }
    }
    return -1;
};
