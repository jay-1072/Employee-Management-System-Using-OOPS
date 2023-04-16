let url;
let eid:string|number;
let indx:number;
let Record:Employee[];

let find = (empId:number):number => {
    Record = JSON.parse(localStorage.getItem('EmployeeRecords')!);
    console.log(Record);
    for(let i=0; i<Record.length; i++) {
        if(empId==Record[i]._id) {
            return i;
        }
    }
    return -1;
}

let updateEdetails = () => {
    Record = JSON.parse(localStorage.getItem('EmployeeRecords')!);
    let id =  (<any>document.getElementById('id')!).value;
    let about =  (<any>document.getElementById('about'))!.innerHTML;
    let fname =  (<any>document.getElementById('fname'))!.value;
    let mname =  (<any>document.getElementById('mname'))!.value;
    let lname =  (<any>document.getElementById('lname'))!.value;
    let gender =  (<any>document.getElementById('gender'))!.value;
    let email =  (<any>document.getElementById('email'))!.value;
    let age =  (<any>document.getElementById('ageVal'))!.value; 
    let experience =  (<any>document.getElementById('experienceVal'))!.value;
    let skills =  (<any>document.getElementById('skills'))!.value;
    let salary =  (<any>document.getElementById('salary'))!.value;
    let designation =  (<any>document.getElementById('designation'))!.value;
    Record[indx]._id = id;
    Record[indx]._about = about;
    Record[indx]._firstName = fname;
    Record[indx]._middleName = mname;
    Record[indx]._lastName = lname;
    Record[indx]._gender = gender;
    Record[indx]._email = email;
    Record[indx]._age = age;
    Record[indx]._experience = experience;
    Record[indx]._skills = skills;
    Record[indx]._salary = salary;
    Record[indx]._designation = designation;
    localStorage.setItem('EmployeeRecords', JSON.stringify(Record));
    location.href = "index.html"
}

(function() {
    url = new URL(window.location.href);
    eid = url.searchParams.get("id")!;
    eid = parseInt(eid as string);
    console.log(eid);
    indx = find(eid);
    Record = JSON.parse(localStorage.getItem('EmployeeRecords')!);
    (<any>document.getElementById('id')!).value = Record[indx]._id;
    // (<any>document.getElementById('profile'))!.value = 'C:/images/abc.png';
    (<any>document.getElementById('about'))!.innerHTML = Record[indx]._about;
    (<any>document.getElementById('fname'))!.value = Record[indx]._firstName;
    (<any>document.getElementById('mname'))!.value = Record[indx]._middleName;
    (<any>document.getElementById('lname'))!.value = Record[indx]._lastName;
    (<any>document.getElementById('gender'))!.value = Record[indx]._gender;
    (<any>document.getElementById('email'))!.value = Record[indx]._email;
    (<any>document.getElementById('ageVal'))!.value = Record[indx]._age;
    (<any>document.getElementById('experienceVal'))!.value = Record[indx]._experience;
    (<any>document.getElementById('skills'))!.value = Record[indx]._skills;
    (<any>document.getElementById('salary'))!.value = Record[indx]._salary;
    (<any>document.getElementById('designation'))!.value = Record[indx]._designation;
})();