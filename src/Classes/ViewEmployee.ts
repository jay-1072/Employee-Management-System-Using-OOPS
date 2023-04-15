let find = (empId:number):number => {
    let employeeRecord = JSON.parse(localStorage.getItem('EmployeeRecords')!);
    for(let i=0; i<employeeRecord.length; i++) {
        if(empId===employeeRecord[i]._id) {
            return i;
        }
    }
    return -1;
}

var url = new URL(window.location.href);
// Retrieving query string values
let eid:string|number = url.searchParams.get("id")!;
eid = parseInt(eid as string);
let indx = find(eid);

console.log(indx);

let Record = JSON.parse(localStorage.getItem('EmployeeRecords')!);
(<any>document.getElementById('id')!).value = Record[indx]._id;
// (<any>document.getElementById('profile'))!.value = Record[indx]._profile;
(<any>document.getElementById('about'))!.innerHTML = Record[indx]._about;
(<any>document.getElementById('fname'))!.value = Record[indx]._firstName;
(<any>document.getElementById('mname'))!.value = Record[indx]._middleName;
(<any>document.getElementById('lname'))!.value = Record[indx]._lastName;
(<any>document.getElementById('gender'))!.value = Record[indx]._gender;
(<any>document.getElementById('email'))!.value = Record[indx]._email;
(<any>document.getElementById('age'))!.value = Record[indx]._age;
(<any>document.getElementById('experience'))!.value = Record[indx]._experience;
(<any>document.getElementById('skills'))!.value = Record[indx]._skills;
(<any>document.getElementById('salary'))!.value = Record[indx]._salary;
(<any>document.getElementById('designation'))!.value = Record[indx]._designation;