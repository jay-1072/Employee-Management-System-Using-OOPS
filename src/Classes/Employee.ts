///<reference path='../Interfaces/IEmployeeDetails.ts' />
///<reference path='../Interfaces/IEmployeeMethods.ts' />

declare var bootstrap: any;

class Employee implements EmployeeDetails.IEmployeeDetails, EmployeeMethods.IEmployeeMethods {
        _id:string;
        _profile: string;
        _about: string;
        _firstName:string;
        _middleName:string;
        _lastName:string;
        _gender:string;
        _age:number;
        _email: string;
        _designation:string;
        _skills: string[];
        _experience:number;
        _salary:number;
        
        // Employee class constructor
        constructor(_id:string, _profile: string, _about: string, _firstName:string, _middleName:string, _lastName:string, _gender:string, _age:number, _email:string, _designation:string, _skills: string[], _experience:number, _salary:number) {
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
        get employeeId():string {
            return this._id;
        }

        // setter method for employeeId
        set employeeId(_id:string) {
            this._id = _id;
        }

        // getter method for employeeProfile
        get employeeProfile():string {
            return this._profile;
        }

        // setter method for employeeProfile
        set employeeProfile(_profile:string) {
            this._profile = _profile;
        }

        // getter method for employeeAboutUs
        get employeeAboutUs():string {
            return this._about;
        }

        // setter method for employeeAboutUs
        set employeeAboutUs(_about:string) {
            this._about = _about;
        }

        // getter method for employeeFirstName
        get employeeFirstName():string {
            return this._firstName;
        }

        // setter method for employeeFirstName
        set employeeFirstName(_firstName:string) {
            this._firstName = _firstName;
        }

        // getter method for employeeMiddleName
        get employeeMiddleName():string {
            return this._middleName;
        }

        // setter method for employeeMiddleName
        set employeeMiddleName(_middleName:string) {
            this._middleName = _middleName;
        }

        // getter method for employeeLastName
        get employeeLastName():string {
            return this._lastName;
        }

        // setter method for employeeLastName
        set employeeLastName(_lastName:string) {
            this._lastName = _lastName;
        }

        // getter method for employeeGender
        get employeeGender():string {
            return this._gender;
        }

        // setter method for employeeGender
        set employeeGender(_gender:string) {
            this._gender = _gender;
        }

        // getter method for employeeAge
        get employeeAge():number {
            return this._age;
        }

        // setter method for employeeAge
        set employeeAge(_age:number) {
            this._age = _age;
        }

        // getter method for employeeContact
        get employeeEmail():string {
            return this._email;
        }

        // setter method for employeeContact
        set employeeEmail(_email:string) {
            this._email = _email;
        }

        // getter method for employeeDesignation
        get employeeDesignation():string {
            return this._designation;
        }

        // setter method for employeeDesignation
        set employeeDesignation(_designation:string) {
            this._designation = _designation;
        }

        // getter method for employeeSkills
        get employeeSkills():string[] {
            return this._skills;
        }

        // setter method for employeeSkills
        set employeeSkills(_skills:string[]) {
            this._skills = _skills;
        }

        // getter method for employeeExperience
        get employeeExperience():number {
            return this._experience;
        }

        // setter method for employeeExperience
        set employeeExperience(_experience:number) {
            this._experience = _experience;
        }

        // getter method for employeeSalary
        get employeeSalary():number {
            return this._salary;
        }

        // setter method for employeeSalary
        set employeeSalary(_salary:number) {
            this._salary = _salary;
        }

        addEmployee = (newEmployee: Employee):void => {
            let tempVar:string | null = localStorage.getItem(EMPLOYEE);

            if(tempVar!=null) {
                employeeRecord = JSON.parse(tempVar);
            }

            employeeRecord.push(newEmployee);

            localStorage.setItem(EMPLOYEE, JSON.stringify(employeeRecord));
            Employee.viewEmployees();
        }

        updateEmployee = (employee: Employee, index:number):void => {

            employeeRecord = JSON.parse(localStorage.getItem(EMPLOYEE)!);
            employeeRecord[index] = employee;

            localStorage.setItem(EMPLOYEE, JSON.stringify(employeeRecord));
            Employee.viewEmployees();
        }

        static deleteEmployee = (index: number):void => {
            employeeRecord = JSON.parse(localStorage.getItem(EMPLOYEE)!);
            employeeRecord.splice(index, 1);

            localStorage.setItem(EMPLOYEE, JSON.stringify(employeeRecord));
            Employee.viewEmployees();
        }

        static viewEmployees = () => {
            if(localStorage.getItem(EMPLOYEE)!=null) {
                employeeRecord = JSON.parse(localStorage.getItem(EMPLOYEE)!);
                html = "";
                for(let i=0; i<employeeRecord.length; i++) {
                    html += `<tr>`;
                    html += `<td class="table-data text-center">` + employeeRecord[i]._id + `</td>`;
                    html += `<td class="table-data text-center" >` + `<img style="max-width: 100%; heigth:auto;" src="${employeeRecord[i]._profile}">`  + `</td>`;
                    html += `<td class="table-data text-center">` + employeeRecord[i]._about + `</td>`;
                    html += `<td class="table-data text-center">` + employeeRecord[i]._firstName + `</td>`;
                    html += `<td class="table-data text-center">` + employeeRecord[i]._lastName + `</td>`;
                    html += `<td class="table-data text-center">` + employeeRecord[i]._gender + `</td>`;
                    html += `<td class="table-data text-center">` + employeeRecord[i]._age + `</td>`;
                    html += `<td class="table-data text-center">` + employeeRecord[i]._email + `</td>`;
                    html += `<td class="table-data text-center">` + employeeRecord[i]._designation + `</td>`;
                    html += `<td class="table-data text-center">` + employeeRecord[i]._skills + `</td>`;
                    html += `<td class="table-data text-center">` + employeeRecord[i]._experience + `</td>`;
                    html += `<td class="table-data text-center">` + employeeRecord[i]._salary + `&nbsp;&nbsp;<i class="fa fa-indian-rupee-sign"></i>` + `</td>`;
                    html += `<td class="table-data text-center">` + `<button onclick="location.href='viewEmployee.html?id=${employeeRecord[i]._id}'" class="btn btn-light text-center viewIcon"><i class="fa fa-light fa-eye"></i></button>` + `</td>`;
                    html += `</tr>`;
                }
                
                document.getElementById('tblBody')!.innerHTML = html;
            }
        }
}

let findEmployee = (empId:number):number => {
    let employeeRecord = JSON.parse(localStorage.getItem('EmployeeRecords')!);
    for(let i=0; i<employeeRecord.length; i++) {
        if(empId==employeeRecord[i]._id) {
            return i;
        }
    }
    return -1;
}

const EMPLOYEE = 'EmployeeRecords';
let employeeRecord:Employee[] = [];
let html = "";
let employeeObj:Employee;
let index:number;
let base64:any = '';
let nameRegexp = /^\S*$/;

const submitBtn = <HTMLInputElement>document.getElementById('submitBtn');
const modal = <any>document.getElementById('newPrdModal');

const sortById_asc = <any>document.getElementById('sortById_asc');
const sortByFname_asc = <any>document.getElementById('sortByFname_asc');
const sortByLname_asc = <any>document.getElementById('sortByLname_asc');
const sortByGender_asc = <any>document.getElementById('sortByGender_asc');
const sortByAge_asc = <any>document.getElementById('sortByAge_asc');
const sortByExperience_asc = <any>document.getElementById('sortByExperience_asc');
const sortBySalary_asc = <any>document.getElementById('sortBySalary_asc');


const sortById_desc = <any>document.getElementById('sortById_desc');
const sortByFname_desc = <any>document.getElementById('sortByFname_desc');
const sortByLname_desc = <any>document.getElementById('sortByLname_desc');
const sortByGender_desc = <any>document.getElementById('sortByGender_desc');
const sortByAge_desc = <any>document.getElementById('sortByAge_desc');
const sortByExperience_desc = <any>document.getElementById('sortByExperience_desc');
const sortBySalary_desc = <any>document.getElementById('sortBySalary_desc');

const orig_eId:any = <HTMLInputElement>document.getElementById('empId');
const orig_eAbout:any = <HTMLInputElement>document.getElementById('empAbout');
const orig_eProfile:any = <HTMLInputElement>document.getElementById('empProfile');
const orig_eFirstName:any = <HTMLInputElement>document.getElementById('empFname');
const orig_eMiddleName:any = <HTMLInputElement>document.getElementById('empMname');
const orig_eLastName:any = <HTMLInputElement>document.getElementById('empLname');
const orig_eGender:any = <HTMLInputElement>document.getElementById('empGender');
const orig_eAge:any = <HTMLInputElement>document.getElementById('ageValue');
const orig_eEmail:any = <HTMLInputElement>document.getElementById('empEmail');
const orig_eDesignation:any = <HTMLInputElement>document.getElementById('empDesignation');
const orig_eSkills:any = <HTMLInputElement>document.getElementById('empSkills');
const orig_eExperience:any = <HTMLInputElement>document.getElementById('empExperience');
const orig_eSalary:any = <HTMLInputElement>document.getElementById('empSalary');


sortById_asc.onclick = () => {
    sortByEId('ASC');
}
sortByFname_asc.onclick = () => {
    sortByFname('ASC', 'fname')
}
sortByLname_asc.onclick = () => {
    sortByFname('ASC', 'lname')
}
sortByGender_asc.onclick = () => {
    sortByGender('ASC')
}
sortByAge_asc.onclick = () => {
    sortByAge('ASC')
}
sortByExperience_asc.onclick = () => {
    sortByExperience('ASC')
}
sortBySalary_asc.onclick = () => {
    sortBySalary('ASC')
}


sortById_desc.onclick = () => {
    sortByEId('DESC');
}
sortByFname_desc.onclick = () => {
    sortByFname('DESC', 'fname')
}
sortByLname_desc.onclick = () => {
    sortByFname('DESC', 'lname')
}
sortByGender_desc.onclick = () => {
    sortByGender('DESC');
}
sortByAge_desc.onclick = () => {
    sortByAge('DESC');
}
sortByExperience_desc.onclick = () => {
    sortByExperience('DESC');
}
sortBySalary_desc.onclick = () => {
    sortBySalary('DESC');
}

(() => {
    Employee.viewEmployees();
})();

function check(event:any) {
    let kCode = event.keyCode;
    if((event.keyCode>=48 && event.keyCode<=57)||(event.keyCode>=65 && event.keyCode<=90)||((event.keyCode==8))) {
        return true;
    }
    return false;
}


function valid(eObj:Employee):boolean{

    document.getElementById("eIdError").innerHTML = "";
    (<any>document.getElementById("empId")).style = orig_eId;

    document.getElementById("eAboutError").innerHTML = "";
    (<any>document.getElementById("empAbout")).style = orig_eAbout;

    document.getElementById("eProfileError").innerHTML = "";
    (<any>document.getElementById("empProfile")).style = orig_eProfile;

    document.getElementById("eFnameError").innerHTML = "";
    (<any>document.getElementById("empFname")).style = orig_eFirstName;

    document.getElementById("eMnameError").innerHTML = "";
    (<any>document.getElementById("empMname")).style = orig_eMiddleName;

    document.getElementById("eLnameError").innerHTML = "";
    (<any>document.getElementById("empLname")).style = orig_eLastName;

    document.getElementById("eEmailError").innerHTML = "";
    (<any>document.getElementById("empEmail")).style = orig_eEmail;

    document.getElementById("eDesignationError").innerHTML = "";
    (<any>document.getElementById("empDesignation")).style = orig_eDesignation;

    document.getElementById("eSkillsError").innerHTML = "";
    (<any>document.getElementById("empSkills")).style = orig_eSkills;

    document.getElementById("eAgeError").innerHTML = "";
    document.getElementById("eExperienceError").innerHTML ="";

    document.getElementById("eSalaryError").innerHTML = "";
    (<any>document.getElementById("empSalary")).style = orig_eSalary;

    let flag:boolean = true;
    
    if(flag) {
        if (eObj._id == '') {
            document.getElementById("eIdError").innerHTML = "please enter employee id";
            document.getElementById("empId").style.border = "1px solid red";
            flag = false;
        }
        if (eObj._about.length==0) {
            document.getElementById("eAboutError").innerHTML = "please enter employee description";
            document.getElementById("empAbout").style.border = "1px solid red";
            flag = false;
        }
        if (eObj._profile.length===0) {
            document.getElementById("eProfileError").innerHTML = "please add employee profile";
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
        if (eObj._experience==0) {
            document.getElementById("eExperienceError").innerHTML = "please enter employee experience";
            flag = false;
        }
        if (!eObj._salary) {
            document.getElementById("eSalaryError").innerHTML = "please enter employee salary";
            document.getElementById("empSalary").style.border = "1px solid red";
            flag = false;
        }
    }

    if(!nameRegexp.test(eObj._firstName)) {
        document.getElementById('eFnameError')!.innerHTML = "white space is not allowed";
        document.getElementById('empFname')!.style.border = "1px solid red"; 
        flag = false;
    }
    if(!nameRegexp.test(eObj._middleName)) {
        document.getElementById('eMnameError')!.innerHTML = "white space is not allowed";
        document.getElementById('empMname')!.style.border = "1px solid red"; 
        flag = false;
    }
    if(!nameRegexp.test(eObj._lastName)) {
        document.getElementById('eLnameError')!.innerHTML = "white space is not allowed";
        document.getElementById('empLname')!.style.border = "1px solid red"; 
        flag = false;
    }

    return flag;
}

submitBtn.onclick = (event):void => {
    let eId:any = <HTMLInputElement>document.getElementById('empId');
    let eAbout:any = <HTMLInputElement>document.getElementById('empAbout');
    let eProfile:any = <HTMLInputElement>document.getElementById('empProfile');
    let eFirstName:any = <HTMLInputElement>document.getElementById('empFname');
    let eMiddleName:any = <HTMLInputElement>document.getElementById('empMname');
    let eLastName:any = <HTMLInputElement>document.getElementById('empLname');
    let eGender:any = <HTMLInputElement>document.getElementById('empGender');
    let eAge:any = <HTMLInputElement>document.getElementById('ageValue');
    let eEmail:any = <HTMLInputElement>document.getElementById('empEmail');
    let eDesignation:any = <HTMLInputElement>document.getElementById('empDesignation');
    let eSkills:any = <HTMLInputElement>document.getElementById('empSkills');
    let eExperience:any = <HTMLInputElement>document.getElementById('empExperience');
    let eSalary:any = <HTMLInputElement>document.getElementById('empSalary');

    console.log(typeof base64);

    eId = eId.value.trim();
    eProfile = base64.length===0?'':base64; 
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

    if(!valid(employeeObj)) {
        event.preventDefault();
    }
    else {
        if(submitBtn.value==='Update') {
            employeeObj.updateEmployee(employeeObj, index);
            showToastMessage('Update');
        }
        else {
            if(!checkEmployeeId(eId)) {
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
}

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

function checkEmployeeId(empId:string):boolean {
    let res:boolean = false;
    if(localStorage.getItem(EMPLOYEE)!=null) {
        employeeRecord = JSON.parse(localStorage.getItem(EMPLOYEE)!);
        for(let i=0; i<employeeRecord.length; i++) {
            if(empId===employeeRecord[i]._id) {
                res = true;
                break;
            }
        }
    }
    return res;
}

function showToastMessage(msg:string) {

    let status = document.getElementById('statusMessage');

    if(msg==='Add') {
        status!.innerHTML = 'Employee added successfully.';
    }
    else if(msg==='Update') {
        status!.innerHTML = 'Employee updated successfully.';
    }
    else {
        status!.innerHTML = 'Employee deleted successfully.';
    }

    const toastTrigger = document.getElementById('submitBtn');
    const Toast = document.getElementById('Toast');
    
    if (toastTrigger) {
        const toast = new bootstrap.Toast(Toast);
        toast.show();
        setTimeout(()=>{location.reload()}, 1000);
    }
    
}

const modalClose = document.getElementById("modalClose");
modalClose!.onclick = ():void => {
    location.reload();
}

const formReset = document.getElementById("formReset");
formReset!.onclick = ():void => {
    (<HTMLFormElement>document.getElementById("employeeForm"))!.reset();
}

let profileInput: any = document.getElementById('empProfile'); 
profileInput.addEventListener('change', function(event:any) { 
    const image = event.target.files[0];
    let reader = new FileReader(); 
    reader.readAsDataURL(image);

    reader.addEventListener('load', () => { 
        base64 = reader.result as string; 
    });  
});

let sortByEId = (sortType:string) => {

    let records = JSON.parse(localStorage.getItem('EmployeeRecords'));

    if(sortType==='ASC') {
        records.sort((e1:any, e2:any) => {
            return parseInt(e1._id) - parseInt(e2._id);
        })
    }
    else {
        records.sort((e1:any, e2:any) => {
            return parseInt(e2._id) - parseInt(e1._id);
        })
    }
    
    localStorage.setItem('EmployeeRecords', JSON.stringify(records));
    Employee.viewEmployees();
}

let sortByFname = (sortType:string, sortField:string) => {
    
    let records = JSON.parse(localStorage.getItem('EmployeeRecords'));
    let name1, name2;

    if(sortType==='ASC') {
        records.sort((e1:any, e2:any) => {

            if(sortField=='fname') {
                name1 = e1._firstName.toLowerCase(), name2 = e2._firstName.toLowerCase();
            }
            else {
                name1 = e1._lastName.toLowerCase(), name2 = e2._lastName.toLowerCase();
            }

            if(name1<name2) {
                return -1;
            }
    
            return 0;
        })
    }
    else {
        records.sort((e1:any, e2:any) => {

            name1 = e1._firstName.toLowerCase(), name2 = e2._firstName.toLowerCase();

            if(sortField=='fname') {
                name1 = e1._firstName.toLowerCase(), name2 = e2._firstName.toLowerCase();
            }
            else {
                name1 = e1._lastName.toLowerCase(), name2 = e2._lastName.toLowerCase();
            }
    
            if(name1>name2) {
                return -1;
            }
    
            return 0;
        })
    }

    localStorage.setItem('EmployeeRecords', JSON.stringify(records));
    Employee.viewEmployees();
}

let sortByGender = (sortType:string) => {

    let records = JSON.parse(localStorage.getItem('EmployeeRecords'));

    if(sortType==='ASC') {
        records.sort((e1:any, e2:any) => {
            if(e2._gender>e1._gender) {
                return -1;
            }
            return 0;
            
        })
    }
    else {
        records.sort((e1:any, e2:any) => {
            if(e1._gender>e2._gender) {
                return -1;
            }
            return 0;
        })
    }
    
    localStorage.setItem('EmployeeRecords', JSON.stringify(records));
    Employee.viewEmployees();
}

let sortByAge = (sortType:string) => {

    let records = JSON.parse(localStorage.getItem('EmployeeRecords'));

    if(sortType==='ASC') {
        records.sort((e1:any, e2:any) => {
            if(e1._age<e2._age) {
                return -1;
            }
            return 0;
            
        })
    }
    else {
        records.sort((e1:any, e2:any) => {
            if(e2._age<e1._age) {
                return -1;
            }
            return 0;
        })
    }
    
    localStorage.setItem('EmployeeRecords', JSON.stringify(records));
    Employee.viewEmployees();
}

let sortByExperience = (sortType:string) => {

    let records = JSON.parse(localStorage.getItem('EmployeeRecords'));

    if(sortType==='ASC') {
        records.sort((e1:any, e2:any) => {
            if(e1._experience<e2._experience) {
                return -1;
            }
            return 0;
            
        })
    }
    else {
        records.sort((e1:any, e2:any) => {
            if(e2._experience<e1._experience) {
                return -1;
            }
            return 0;
        })
    }
    
    localStorage.setItem('EmployeeRecords', JSON.stringify(records));
    Employee.viewEmployees();
}

let sortBySalary = (sortType:string) => {

    let records = JSON.parse(localStorage.getItem('EmployeeRecords'));

    if(sortType==='ASC') {
        records.sort((e1:any, e2:any) => {
            if(e1._salary<e2._salary) {
                return -1;
            }
            return 0;
        })
    }
    else {
        records.sort((e1:any, e2:any) => {
            if(e2._salary<e1._salary) {
                return -1;
            }
            return 0;
        })
    }
    
    localStorage.setItem('EmployeeRecords', JSON.stringify(records));
    Employee.viewEmployees();
}