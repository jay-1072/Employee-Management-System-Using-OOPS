"use strict";
///<reference path='../Interfaces/IEmployeeDetails.ts' />
///<reference path='../Interfaces/IEmployeeMethods.ts' />
var Employee = /** @class */ (function () {
    // Employee class constructor
    function Employee(_id, _profile, _about, _firstName, _middleName, _lastName, _gender, _age, _email, _designation, _skills, _experience, _salary) {
        this.addEmployee = function (newEmployee) {
            var tempVar = localStorage.getItem(EMPLOYEE);
            if (tempVar != null) {
                employeeRecord = JSON.parse(tempVar);
            }
            employeeRecord.push(newEmployee);
            localStorage.setItem(EMPLOYEE, JSON.stringify(employeeRecord));
            Employee.viewEmployees();
        };
        this.updateEmployee = function (employee, index) {
            employeeRecord = JSON.parse(localStorage.getItem(EMPLOYEE));
            employeeRecord[index] = employee;
            localStorage.setItem(EMPLOYEE, JSON.stringify(employeeRecord));
            Employee.viewEmployees();
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
    Object.defineProperty(Employee.prototype, "employeeId", {
        // getter method for employeeId
        get: function () {
            return this._id;
        },
        // setter method for employeeId
        set: function (_id) {
            this._id = _id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "employeeProfile", {
        // getter method for employeeProfile
        get: function () {
            return this._profile;
        },
        // setter method for employeeProfile
        set: function (_profile) {
            this._profile = _profile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "employeeAboutUs", {
        // getter method for employeeAboutUs
        get: function () {
            return this._about;
        },
        // setter method for employeeAboutUs
        set: function (_about) {
            this._about = _about;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "employeeFirstName", {
        // getter method for employeeFirstName
        get: function () {
            return this._firstName;
        },
        // setter method for employeeFirstName
        set: function (_firstName) {
            this._firstName = _firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "employeeMiddleName", {
        // getter method for employeeMiddleName
        get: function () {
            return this._middleName;
        },
        // setter method for employeeMiddleName
        set: function (_middleName) {
            this._middleName = _middleName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "employeeLastName", {
        // getter method for employeeLastName
        get: function () {
            return this._lastName;
        },
        // setter method for employeeLastName
        set: function (_lastName) {
            this._lastName = _lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "employeeGender", {
        // getter method for employeeGender
        get: function () {
            return this._gender;
        },
        // setter method for employeeGender
        set: function (_gender) {
            this._gender = _gender;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "employeeAge", {
        // getter method for employeeAge
        get: function () {
            return this._age;
        },
        // setter method for employeeAge
        set: function (_age) {
            this._age = _age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "employeeEmail", {
        // getter method for employeeContact
        get: function () {
            return this._email;
        },
        // setter method for employeeContact
        set: function (_email) {
            this._email = _email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "employeeDesignation", {
        // getter method for employeeDesignation
        get: function () {
            return this._designation;
        },
        // setter method for employeeDesignation
        set: function (_designation) {
            this._designation = _designation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "employeeSkills", {
        // getter method for employeeSkills
        get: function () {
            return this._skills;
        },
        // setter method for employeeSkills
        set: function (_skills) {
            this._skills = _skills;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "employeeExperience", {
        // getter method for employeeExperience
        get: function () {
            return this._experience;
        },
        // setter method for employeeExperience
        set: function (_experience) {
            this._experience = _experience;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "employeeSalary", {
        // getter method for employeeSalary
        get: function () {
            return this._salary;
        },
        // setter method for employeeSalary
        set: function (_salary) {
            this._salary = _salary;
        },
        enumerable: false,
        configurable: true
    });
    Employee.deleteEmployee = function (index) {
        employeeRecord = JSON.parse(localStorage.getItem(EMPLOYEE));
        employeeRecord.splice(index, 1);
        localStorage.setItem(EMPLOYEE, JSON.stringify(employeeRecord));
        Employee.viewEmployees();
    };
    Employee.viewEmployees = function () {
        if (localStorage.getItem(EMPLOYEE) != null) {
            employeeRecord = JSON.parse(localStorage.getItem(EMPLOYEE));
            html = "";
            for (var i = 0; i < employeeRecord.length; i++) {
                html += "<tr>";
                html += "<td class=\"table-data text-center\">" + employeeRecord[i]._id + "</td>";
                html += "<td class=\"table-data text-center\" >" + "<img style=\"max-width: 100%; heigth:auto;\" src=\"".concat(employeeRecord[i]._profile, "\">") + "</td>";
                html += "<td class=\"table-data text-center\">" + employeeRecord[i]._about + "</td>";
                html += "<td class=\"table-data text-center\">" + employeeRecord[i]._firstName + "</td>";
                html += "<td class=\"table-data text-center\">" + employeeRecord[i]._middleName + "</td>";
                html += "<td class=\"table-data text-center\">" + employeeRecord[i]._lastName + "</td>";
                html += "<td class=\"table-data text-center\">" + employeeRecord[i]._gender + "</td>";
                html += "<td class=\"table-data text-center\">" + employeeRecord[i]._age + "</td>";
                html += "<td class=\"table-data text-center\">" + employeeRecord[i]._email + "</td>";
                html += "<td class=\"table-data text-center\">" + employeeRecord[i]._designation + "</td>";
                html += "<td class=\"table-data text-center\">" + employeeRecord[i]._skills + "</td>";
                html += "<td class=\"table-data text-center\">" + employeeRecord[i]._experience + "</td>";
                html += "<td class=\"table-data text-center\">" + employeeRecord[i]._salary + "&nbsp;&nbsp;<i class=\"fa fa-indian-rupee-sign\"></i>" + "</td>";
                html += "<td class=\"table-data text-center\">" + "<button onclick=\"location.href='viewEmployee.html?id=".concat(employeeRecord[i]._id, "'\" class=\"btn btn-light text-center viewIcon\"><i class=\"fa fa-light fa-eye\"></i></button>") + "</td>";
                html += "</tr>";
            }
            document.getElementById('tblBody').innerHTML = html;
        }
    };
    return Employee;
}());
var findEmployee = function (empId) {
    var employeeRecord = JSON.parse(localStorage.getItem('EmployeeRecords'));
    for (var i = 0; i < employeeRecord.length; i++) {
        if (empId == employeeRecord[i]._id) {
            return i;
        }
    }
    return -1;
};
var EMPLOYEE = 'EmployeeRecords';
var employeeRecord = [];
var html = "";
var employeeObj;
var index;
var base64;
var nameRegexp = /^\S*$/;
var submitBtn = document.getElementById('submitBtn');
var modal = document.getElementById('newPrdModal');
(function () {
    Employee.viewEmployees();
})();
function valid(eObj) {
    var flag = true;
    console.log(eObj._experience);
    if (flag) {
        if (isNaN(eObj._id)) {
            document.getElementById("eIdError").innerHTML = "please enter employee id";
            document.getElementById("empId").style.border = "1px solid red";
            flag = false;
        }
        if (eObj._about == '') {
            document.getElementById("eAboutError").innerHTML = "please enter employee description";
            document.getElementById("empAbout").style.border = "1px solid red";
            flag = false;
        }
        if (eObj._firstName == '') {
            document.getElementById("eFnameError").innerHTML = "please enter first name";
            document.getElementById("empFname").style.border = "1px solid red";
            flag = false;
        }
        if (eObj._middleName == '') {
            document.getElementById("eMnameError").innerHTML = "please enter middle name";
            document.getElementById("empMname").style.border = "1px solid red";
            flag = false;
        }
        if (eObj._middleName == '') {
            document.getElementById("eLnameError").innerHTML = "please enter last name";
            document.getElementById("empLname").style.border = "1px solid red";
            flag = false;
        }
        if (eObj._email == '') {
            document.getElementById("eEmailError").innerHTML = "please enter email id";
            document.getElementById("empEmail").style.border = "1px solid red";
            flag = false;
        }
        if (eObj._designation == '') {
            document.getElementById("eDesignationError").innerHTML = "please enter employee designation";
            document.getElementById("empDesignation").style.border = "1px solid red";
            flag = false;
        }
        if (!eObj._skills) {
            document.getElementById("eSkillsError").innerHTML = "please enter employee skills";
            document.getElementById("empSkills").style.border = "1px solid red";
            flag = false;
        }
        if (!eObj._age) {
            document.getElementById("eAgeError").innerHTML = "please enter employee age";
            flag = false;
        }
        if (eObj._experience == 0) {
            document.getElementById("eExperienceError").innerHTML = "please enter employee experience";
            flag = false;
        }
        if (!eObj._salary) {
            document.getElementById("eSalaryError").innerHTML = "please enter employee salary";
            document.getElementById("empSalary").style.border = "1px solid red";
            flag = false;
        }
    }
    if (!nameRegexp.test(eObj._firstName)) {
        document.getElementById('eFnameError').innerHTML = "white space is not allowed";
        document.getElementById('empFname').style.border = "1px solid red";
        flag = false;
    }
    if (!nameRegexp.test(eObj._middleName)) {
        document.getElementById('eMnameError').innerHTML = "white space is not allowed";
        document.getElementById('empMname').style.border = "1px solid red";
        flag = false;
    }
    if (!nameRegexp.test(eObj._lastName)) {
        document.getElementById('eLnameError').innerHTML = "white space is not allowed";
        document.getElementById('empLname').style.border = "1px solid red";
        flag = false;
    }
    return flag;
}
submitBtn.onclick = function (event) {
    var eId = document.getElementById('empId');
    var eAbout = document.getElementById('empAbout');
    var eProfile = document.getElementById('empProfile');
    var eFirstName = document.getElementById('empFname');
    var eMiddleName = document.getElementById('empMname');
    var eLastName = document.getElementById('empLname');
    var eGender = document.getElementById('empGender');
    var eAge = document.getElementById('ageValue');
    var eEmail = document.getElementById('empEmail');
    var eDesignation = document.getElementById('empDesignation');
    var eSkills = document.getElementById('empSkills');
    var eExperience = document.getElementById('empExperience');
    var eSalary = document.getElementById('empSalary');
    eId = parseInt(eId.value);
    eProfile = base64;
    eAbout = eAbout.value;
    eFirstName = eFirstName.value;
    eMiddleName = eMiddleName.value;
    eLastName = eLastName.value;
    eGender = eGender.value;
    eAge = eAge.value;
    eEmail = eEmail.value;
    eDesignation = eDesignation.value;
    eSkills = eSkills.value;
    eExperience = eExperience.value;
    eSalary = eSalary.value;
    employeeObj = new Employee(eId, eProfile, eAbout, eFirstName, eMiddleName, eLastName, eGender, eAge, eEmail, eDesignation, eSkills, eExperience, eSalary);
    if (!valid(employeeObj)) {
        event.preventDefault();
    }
    else {
        if (submitBtn.value === 'Update') {
            employeeObj.updateEmployee(employeeObj, index);
            // showToastMessage('Update');
        }
        else {
            if (!checkEmployeeId(eId)) {
                employeeObj.addEmployee(employeeObj);
                // showToastMessage('Add');
            }
            else {
                alert("Employee Id already exist");
            }
        }
    }
};
function updateIcon(eid) {
    eid = parseInt(eid);
    document.getElementById('newPrdModalLabel').innerHTML = 'Update Employee';
    submitBtn.value = 'Update';
    index = findEmployee(eid);
    employeeRecord = JSON.parse(localStorage.getItem(EMPLOYEE));
    document.getElementById('empId').value = employeeRecord[index]._id;
    document.getElementById('empAbout').value = employeeRecord[index]._about;
    // (<any>document.getElementById('empProfile'))!.value =  employeeRecord[index]._profile;
    document.getElementById('empFname').value = employeeRecord[index]._firstName;
    document.getElementById('empMname').value = employeeRecord[index]._middleName;
    document.getElementById('empLname').value = employeeRecord[index]._lastName;
    document.getElementById('empGender').value = employeeRecord[index]._gender;
    document.getElementById('empEmail').value = employeeRecord[index]._email;
    document.getElementById('ageValue').value = employeeRecord[index]._age;
    document.getElementById('empDesignation').value = employeeRecord[index]._designation;
    document.getElementById('empSkills').value = employeeRecord[index]._skills;
    document.getElementById('experienceValue').value = employeeRecord[index]._experience;
    document.getElementById('empSalary').value = employeeRecord[index]._salary;
}
function deleteIcon(eid) {
    eid = parseInt(eid);
    index = findEmployee(eid);
    if (confirm("Are you sure you want to delete this record?")) {
        Employee.deleteEmployee(index);
        showToastMessage('Delete');
    }
}
function checkEmployeeId(empId) {
    var res = false;
    if (localStorage.getItem(EMPLOYEE) != null) {
        employeeRecord = JSON.parse(localStorage.getItem(EMPLOYEE));
        for (var i = 0; i < employeeRecord.length; i++) {
            if (empId === employeeRecord[i]._id) {
                res = true;
                break;
            }
        }
    }
    return res;
}
function showToastMessage(msg) {
    var status = document.getElementById('statusMessage');
    if (msg === 'Add') {
        status.innerHTML = 'Product added successfully.';
    }
    else if (msg === 'Update') {
        status.innerHTML = 'Product updated successfully.';
    }
    else {
        status.innerHTML = 'Product deleted successfully.';
    }
    var toastTrigger = document.getElementById('submitBtn');
    var Toast = document.getElementById('Toast');
    if (toastTrigger) {
        var toast = new bootstrap.Toast(Toast);
        toast.show();
    }
    setTimeout(function () { location.reload(); }, 700);
}
var modalClose = document.getElementById("modalClose");
modalClose.onclick = function () {
    location.reload();
};
var formReset = document.getElementById("formReset");
formReset.onclick = function () {
    document.getElementById("employeeForm").reset();
};
var profileInput = document.getElementById('empProfile');
profileInput.addEventListener('change', function (event) {
    var image = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load', function () {
        base64 = reader.result;
    });
});
