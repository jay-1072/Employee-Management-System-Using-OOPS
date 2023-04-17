"use strict";
var url;
var eid;
var indx;
var Record;
var base64Img;
var find = function (empId) {
    Record = JSON.parse(localStorage.getItem('EmployeeRecords'));
    console.log(Record);
    for (var i = 0; i < Record.length; i++) {
        if (empId == Record[i]._id) {
            return i;
        }
    }
    return -1;
};
var eImage = document.getElementById('profile');
eImage.addEventListener('change', function (event) {
    var image = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load', function () {
        base64Img = reader.result;
    });
});
var makeEditable = function () {
    document.getElementById('id').disabled = false;
    document.getElementById('profile').disabled = false;
    document.getElementById('about').innerHTML;
    document.getElementById('fname').disabled = false;
    document.getElementById('mname').disabled = false;
    document.getElementById('lname').disabled = false;
    document.getElementById('gender').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('experience').disabled = false;
    document.getElementById('experienceVal').disabled = false;
    document.getElementById('age').disabled = false;
    document.getElementById('ageVal').disabled = false;
    document.getElementById('skills').disabled = false;
    document.getElementById('salary').disabled = false;
    document.getElementById('designation').disabled = false;
};
var updateEdetails = function () {
    Record = JSON.parse(localStorage.getItem('EmployeeRecords'));
    var id = document.getElementById('id').value;
    var profile = document.getElementById('profile').value;
    var about = document.getElementById('about').innerHTML;
    var fname = document.getElementById('fname').value;
    var mname = document.getElementById('mname').value;
    var lname = document.getElementById('lname').value;
    var gender = document.getElementById('gender').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('ageVal').value;
    var experience = document.getElementById('experienceVal').value;
    var skills = document.getElementById('skills').value;
    var salary = document.getElementById('salary').value;
    var designation = document.getElementById('designation').value;
    Record[indx]._id = id;
    Record[indx]._profile = profile != '' ? base64Img : Record[indx]._profile;
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
    location.href = "index.html";
};
var delEmp = function () {
    if (confirm('Are you sure you want to delete this record?')) {
        Record = JSON.parse(localStorage.getItem('EmployeeRecords'));
        Record.splice(indx, 1);
        localStorage.setItem('EmployeeRecords', JSON.stringify(Record));
        location.href = "index.html";
    }
};
(function () {
    url = new URL(window.location.href);
    eid = url.searchParams.get("id");
    eid = parseInt(eid);
    console.log(eid);
    indx = find(eid);
    Record = JSON.parse(localStorage.getItem('EmployeeRecords'));
    document.getElementById('id').value = Record[indx]._id;
    document.getElementById('empImage').src = Record[indx]._profile;
    // (<any>document.getElementById('profile'))!.value = 'C:/images/abc.png';
    document.getElementById('about').innerHTML = Record[indx]._about;
    document.getElementById('fname').value = Record[indx]._firstName;
    document.getElementById('mname').value = Record[indx]._middleName;
    document.getElementById('lname').value = Record[indx]._lastName;
    document.getElementById('gender').value = Record[indx]._gender;
    document.getElementById('email').value = Record[indx]._email;
    document.getElementById('ageVal').value = Record[indx]._age;
    document.getElementById('experienceVal').value = Record[indx]._experience;
    document.getElementById('skills').value = Record[indx]._skills;
    document.getElementById('salary').value = Record[indx]._salary;
    document.getElementById('designation').value = Record[indx]._designation;
})();
