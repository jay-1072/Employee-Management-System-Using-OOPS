///<reference path='../Interfaces/IEmployeeDetails.ts' />
///<reference path='../Interfaces/IEmployeeMethods.ts' />

class Employee implements EmployeeDetails.IEmployeeDetails, EmployeeMethods.IEmployeeMethods   {
        _id:number;
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
        constructor(_id:number, _profile: string, _about: string, _firstName:string, _middleName:string, _lastName:string, _gender:string, _age:number, _email:string, _designation:string, _skills: string[], _experience:number, _salary:number) {
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
        get employeeId():number {
            return this._id;
        }

        // setter method for employeeId
        set employeeId(_id:number) {
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

        addEmployee =  (newEmployee: Employee):void => {
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
        }

        deleteEmployee = (index: number):void => {
            employeeRecord = JSON.parse(localStorage.getItem(EMPLOYEE)!);
            employeeRecord.splice(index, 1);

            localStorage.setItem(EMPLOYEE, JSON.stringify(employeeRecord));
        }

        static viewEmployees = () => {
            if(localStorage.getItem(EMPLOYEE)!=null) {
                employeeRecord = JSON.parse(localStorage.getItem(EMPLOYEE)!);
                    html = "";
                for(let i=0; i<employeeRecord.length; i++) {
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
                
                document.getElementById('tblBody')!.innerHTML = html;
            }
        }
}

const EMPLOYEE = 'EmployeeRecords';
let employeeRecord:Employee[] = [];
let html = "";
let employeeObj:Employee;
let index:number;

const submitBtn = <HTMLInputElement>document.getElementById('submitBtn');
const updateBtn = <HTMLButtonElement>document.getElementById('updateBtn');
const viewBtn = <HTMLButtonElement>document.getElementById('viewBtn');

(() => {
    Employee.viewEmployees();
})();

let Add_Update = ():void => {
    let eId:any = <HTMLInputElement>document.getElementById('empId');
    let eProfile:any = <HTMLInputElement>document.getElementById('empProfile');
    let eFirstName:any = <HTMLInputElement>document.getElementById('empFname');
    let eMiddleName:any = <HTMLInputElement>document.getElementById('empMname');
    let eLastName:any = <HTMLInputElement>document.getElementById('empLname');
    let eGender:any = <HTMLInputElement>document.getElementById('empGender');
    let eEmail:any = <HTMLInputElement>document.getElementById('empEmail');

    eId = parseInt(eId.value);
    eProfile = eProfile.value;
    let eAbout:string = 'I am trainee';
    eFirstName = eFirstName.value;
    eMiddleName = eMiddleName.value;
    eLastName = eLastName.value;
    eGender = eGender.value;
    let eAge:number = 21;
    eEmail = eEmail.value;
    let eDesignation:string = '';
    let eSkills:string[] = ['HTML5', 'CSS3', 'Bootstrap', 'JAVA', 'Typescript'];
    let eExperience:number = 1;
    let eSalary:number = 50000;
    
    employeeObj = new Employee(eId, eProfile, eAbout, eFirstName, eMiddleName, eLastName, eGender, eAge, eEmail, eDesignation, eSkills, eExperience, eSalary);
    employeeObj.addEmployee(employeeObj);
    // employeeObj.updateEmployee(employeeObj, index);
}

submitBtn.onclick = ():void => {
    Add_Update();
}

// updateIcon.onclick = (empId:number):void => {
//     index = findEmployee(empId);
// }

updateBtn.onclick = ():void => {
    Add_Update();
}

// Search Function
let findEmployee = (empId:number):number => {
    employeeRecord = JSON.parse(localStorage.getItem(EMPLOYEE)!);
    for(let i=0; i<employeeRecord.length; i++) {
        if(empId===employeeRecord[i]._id) {
            return i;
        }
    }
    return -1;
}