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
var base64 = '';
var Regexp = /^\S*$/;
var emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
var idRegex = /^[a-zA-Z0-9]*$/;
var submitBtn = document.getElementById('submitBtn');
var modal = document.getElementById('newPrdModal');
var sortById_asc = document.getElementById('sortById_asc');
var sortByFname_asc = document.getElementById('sortByFname_asc');
var sortByLname_asc = document.getElementById('sortByLname_asc');
var sortByGender_asc = document.getElementById('sortByGender_asc');
var sortByAge_asc = document.getElementById('sortByAge_asc');
var sortByExperience_asc = document.getElementById('sortByExperience_asc');
var sortBySalary_asc = document.getElementById('sortBySalary_asc');
var sortById_desc = document.getElementById('sortById_desc');
var sortByFname_desc = document.getElementById('sortByFname_desc');
var sortByLname_desc = document.getElementById('sortByLname_desc');
var sortByGender_desc = document.getElementById('sortByGender_desc');
var sortByAge_desc = document.getElementById('sortByAge_desc');
var sortByExperience_desc = document.getElementById('sortByExperience_desc');
var sortBySalary_desc = document.getElementById('sortBySalary_desc');
var orig_eId = document.getElementById('empId');
var orig_eAbout = document.getElementById('empAbout');
var orig_eProfile = document.getElementById('empProfile');
var orig_eFirstName = document.getElementById('empFname');
var orig_eMiddleName = document.getElementById('empMname');
var orig_eLastName = document.getElementById('empLname');
var orig_eGender = document.getElementById('empGender');
var orig_eAge = document.getElementById('ageValue');
var orig_eEmail = document.getElementById('empEmail');
var orig_eDesignation = document.getElementById('empDesignation');
var orig_eSkills = document.getElementById('empSkills');
var orig_eExperience = document.getElementById('empExperience');
var orig_eSalary = document.getElementById('empSalary');
sortById_asc.onclick = function () {
    sortByEId('ASC');
};
sortByFname_asc.onclick = function () {
    sortByFname('ASC', 'fname');
};
sortByLname_asc.onclick = function () {
    sortByFname('ASC', 'lname');
};
sortByGender_asc.onclick = function () {
    sortByGender('ASC');
};
sortByAge_asc.onclick = function () {
    sortByAge('ASC');
};
sortByExperience_asc.onclick = function () {
    sortByExperience('ASC');
};
sortBySalary_asc.onclick = function () {
    sortBySalary('ASC');
};
sortById_desc.onclick = function () {
    sortByEId('DESC');
};
sortByFname_desc.onclick = function () {
    sortByFname('DESC', 'fname');
};
sortByLname_desc.onclick = function () {
    sortByFname('DESC', 'lname');
};
sortByGender_desc.onclick = function () {
    sortByGender('DESC');
};
sortByAge_desc.onclick = function () {
    sortByAge('DESC');
};
sortByExperience_desc.onclick = function () {
    sortByExperience('DESC');
};
sortBySalary_desc.onclick = function () {
    sortBySalary('DESC');
};
(function () {
    Employee.viewEmployees();
})();
function check(event, element) {
    var kCode = event.keyCode;
    if (element == 'fname' || element == 'mname' || element == 'lname') {
        if (!(kCode >= 65 && kCode <= 90) && !(kCode == 8)) {
            event.preventDefault();
        }
    }
    if (element == 'salary') {
        if ((!(kCode >= 48 && kCode <= 57) && !(kCode == 8))) {
            event.preventDefault();
        }
    }
    if (element == 'designation') {
        if (!(kCode >= 65 && kCode <= 90) && !(kCode == 8) && !(kCode == 32)) {
            event.preventDefault();
        }
    }
    if (element == 'email') {
        if (!(kCode >= 65 && kCode <= 90) && !(kCode == 8) && !(kCode >= 48 && kCode <= 57) && (kCode == 110)) {
            event.preventDefault();
        }
    }
    if (element == 'id') {
        if ((!(kCode >= 65 && kCode <= 90) && !(kCode >= 48 && kCode <= 57) && !(kCode == 8))) {
            event.preventDefault();
        }
    }
}
function valid(eObj) {
    document.getElementById("eIdError").innerHTML = "";
    document.getElementById("empId").style = orig_eId;
    document.getElementById("eAboutError").innerHTML = "";
    document.getElementById("empAbout").style = orig_eAbout;
    document.getElementById("eProfileError").innerHTML = "";
    document.getElementById("empProfile").style = orig_eProfile;
    document.getElementById("eFnameError").innerHTML = "";
    document.getElementById("empFname").style = orig_eFirstName;
    document.getElementById("eMnameError").innerHTML = "";
    document.getElementById("empMname").style = orig_eMiddleName;
    document.getElementById("eLnameError").innerHTML = "";
    document.getElementById("empLname").style = orig_eLastName;
    document.getElementById("eEmailError").innerHTML = "";
    document.getElementById("empEmail").style = orig_eEmail;
    document.getElementById("eDesignationError").innerHTML = "";
    document.getElementById("empDesignation").style = orig_eDesignation;
    document.getElementById("eSkillsError").innerHTML = "";
    document.getElementById("empSkills").style = orig_eSkills;
    document.getElementById("eAgeError").innerHTML = "";
    document.getElementById("eExperienceError").innerHTML = "";
    document.getElementById("eSalaryError").innerHTML = "";
    document.getElementById("empSalary").style = orig_eSalary;
    var flag = true;
    var profileExtention = eObj._profile.split(";")[0].split("/")[1];
    if (flag) {
        if (eObj._id == '') {
            document.getElementById("eIdError").innerHTML = "please enter employee id";
            document.getElementById("empId").style.border = "1px solid red";
            flag = false;
        }
        else if (!idRegex.test(eObj._id)) {
            document.getElementById("eIdError").innerHTML = "Only alphanumeric id is allowed";
            document.getElementById("empId").style.border = "1px solid red";
            flag = false;
        }
        if (eObj._about.length == 0) {
            document.getElementById("eAboutError").innerHTML = "please enter employee description";
            document.getElementById("empAbout").style.border = "1px solid red";
            flag = false;
        }
        if (eObj._profile.length === 0) {
            document.getElementById("eProfileError").innerHTML = "please add employee profile";
            document.getElementById("empProfile").style.border = "1px solid red";
            flag = false;
        }
        else if (profileExtention != 'png' && profileExtention != 'jpeg') {
            document.getElementById("eProfileError").innerHTML = "Only .png, .jpg and .jpeg images are allowed";
            document.getElementById("empProfile").style.border = "1px solid red";
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
        else if (!emailRegex.test(eObj._email)) {
            document.getElementById("eEmailError").innerHTML = "please enter valid email id";
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
        else if (eObj._salary.length >= 7 || eObj._salary.length < 5) {
            document.getElementById("eSalaryError").innerHTML = "salary must be in between 10000 and 999999";
            document.getElementById("empSalary").style.border = "1px solid red";
            flag = false;
        }
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
    eId = eId.value.trim();
    eProfile = base64.length === 0 ? '' : base64;
    eAbout = eAbout.value.trim();
    eFirstName = eFirstName.value.trim();
    eMiddleName = eMiddleName.value.trim();
    eLastName = eLastName.value.trim();
    eGender = eGender.value;
    eAge = eAge.value;
    eEmail = eEmail.value.trim();
    eDesignation = eDesignation.value.trim();
    eSkills = eSkills.value.trim();
    eExperience = eExperience.value;
    eSalary = eSalary.value.trim();
    employeeObj = new Employee(eId, eProfile, eAbout, eFirstName, eMiddleName, eLastName, eGender, eAge, eEmail, eDesignation, eSkills, eExperience, eSalary);
    if (!valid(employeeObj)) {
        event.preventDefault();
    }
    else {
        if (submitBtn.value === 'Update') {
            employeeObj.updateEmployee(employeeObj, index);
            showToastMessage('Update');
        }
        else {
            if (!checkEmployeeId(eId)) {
                employeeObj.addEmployee(employeeObj);
                event.preventDefault();
                showToastMessage('Add');
            }
            else {
                alert("Employee Id already exist");
                event.preventDefault();
            }
        }
    }
};
// function updateIcon(eid:string|number) {
//     eid = parseInt(eid as string);
//     (<HTMLElement>document.getElementById('newPrdModalLabel')!).innerHTML = 'Update Employee';
//     submitBtn.value = 'Update';
//     index = findEmployee(eid);
//     employeeRecord = JSON.parse(localStorage.getItem(EMPLOYEE)!);
//     (<any>document.getElementById('empId'))!.value = employeeRecord[index]._id;
//     (<any>document.getElementById('empAbout'))!.value = employeeRecord[index]._about;
//     // (<any>document.getElementById('empProfile'))!.value =  employeeRecord[index]._profile;
//     (<any>document.getElementById('empFname'))!.value = employeeRecord[index]._firstName;
//     (<any>document.getElementById('empMname'))!.value = employeeRecord[index]._middleName;
//     (<any>document.getElementById('empLname'))!.value = employeeRecord[index]._lastName;
//     (<any>document.getElementById('empGender'))!.value = employeeRecord[index]._gender;
//     (<any>document.getElementById('empEmail'))!.value = employeeRecord[index]._email;
//     (<any>document.getElementById('ageValue'))!.value = employeeRecord[index]._age;
//     (<any>document.getElementById('empDesignation'))!.value = employeeRecord[index]._designation;
//     (<any>document.getElementById('empSkills'))!.value = employeeRecord[index]._skills;
//     (<any>document.getElementById('experienceValue'))!.value = employeeRecord[index]._experience;
//     (<any>document.getElementById('empSalary'))!.value = employeeRecord[index]._salary;
// }
// function deleteIcon(eid:string|number) {
//     eid = parseInt(eid as string);
//     index = findEmployee(eid);
//     if(confirm("Are you sure you want to delete this record?")) {
//         Employee.deleteEmployee(index);
//         showToastMessage('Delete');
//     }
// }
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
        status.innerHTML = 'Employee added successfully.';
    }
    else if (msg === 'Update') {
        status.innerHTML = 'Employee updated successfully.';
    }
    else {
        status.innerHTML = 'Employee deleted successfully.';
    }
    var toastTrigger = document.getElementById('submitBtn');
    var Toast = document.getElementById('Toast');
    if (toastTrigger) {
        var toast = new bootstrap.Toast(Toast);
        toast.show();
        setTimeout(function () { location.reload(); }, 1000);
    }
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
var sortByEId = function (sortType) {
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
    Employee.viewEmployees();
};
var sortByFname = function (sortType, sortField) {
    var records = JSON.parse(localStorage.getItem('EmployeeRecords'));
    var name1, name2;
    if (sortType === 'ASC') {
        records.sort(function (e1, e2) {
            if (sortField == 'fname') {
                name1 = e1._firstName.toLowerCase(), name2 = e2._firstName.toLowerCase();
            }
            else {
                name1 = e1._lastName.toLowerCase(), name2 = e2._lastName.toLowerCase();
            }
            if (name1 < name2) {
                return -1;
            }
            return 0;
        });
    }
    else {
        records.sort(function (e1, e2) {
            name1 = e1._firstName.toLowerCase(), name2 = e2._firstName.toLowerCase();
            if (sortField == 'fname') {
                name1 = e1._firstName.toLowerCase(), name2 = e2._firstName.toLowerCase();
            }
            else {
                name1 = e1._lastName.toLowerCase(), name2 = e2._lastName.toLowerCase();
            }
            if (name1 > name2) {
                return -1;
            }
            return 0;
        });
    }
    localStorage.setItem('EmployeeRecords', JSON.stringify(records));
    Employee.viewEmployees();
};
var sortByGender = function (sortType) {
    var records = JSON.parse(localStorage.getItem('EmployeeRecords'));
    if (sortType === 'ASC') {
        records.sort(function (e1, e2) {
            if (e2._gender > e1._gender) {
                return -1;
            }
            return 0;
        });
    }
    else {
        records.sort(function (e1, e2) {
            if (e1._gender > e2._gender) {
                return -1;
            }
            return 0;
        });
    }
    localStorage.setItem('EmployeeRecords', JSON.stringify(records));
    Employee.viewEmployees();
};
var sortByAge = function (sortType) {
    var records = JSON.parse(localStorage.getItem('EmployeeRecords'));
    if (sortType === 'ASC') {
        records.sort(function (e1, e2) {
            if (e1._age < e2._age) {
                return -1;
            }
            return 0;
        });
    }
    else {
        records.sort(function (e1, e2) {
            if (e2._age < e1._age) {
                return -1;
            }
            return 0;
        });
    }
    localStorage.setItem('EmployeeRecords', JSON.stringify(records));
    Employee.viewEmployees();
};
var sortByExperience = function (sortType) {
    var records = JSON.parse(localStorage.getItem('EmployeeRecords'));
    if (sortType === 'ASC') {
        records.sort(function (e1, e2) {
            if (e1._experience < e2._experience) {
                return -1;
            }
            return 0;
        });
    }
    else {
        records.sort(function (e1, e2) {
            if (e2._experience < e1._experience) {
                return -1;
            }
            return 0;
        });
    }
    localStorage.setItem('EmployeeRecords', JSON.stringify(records));
    Employee.viewEmployees();
};
var sortBySalary = function (sortType) {
    var records = JSON.parse(localStorage.getItem('EmployeeRecords'));
    if (sortType === 'ASC') {
        records.sort(function (e1, e2) {
            if (e1._salary < e2._salary) {
                return -1;
            }
            return 0;
        });
    }
    else {
        records.sort(function (e1, e2) {
            if (e2._salary < e1._salary) {
                return -1;
            }
            return 0;
        });
    }
    localStorage.setItem('EmployeeRecords', JSON.stringify(records));
    Employee.viewEmployees();
};
