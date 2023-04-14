"use strict";
let empRecords = JSON.parse(localStorage.getItem('EmployeeRecords'));
let data = "";
for (let i = 0; i < empRecords.length; i++) {
    data += `<tr>`;
    // Outer Div
    // data += `<div style="background-color:red" class="outer-div">`;
    // For profile
    data += `<td>`;
    data += `<div class="profile-div">`;
    data += `<img class="text-center" style="height: 100px; width:100px" src="${empRecords[i]._profile}">`;
    data += `</div>`;
    data += `</td>`;
    // For basic details
    data += `<td>`;
    data += `<div class="basic-details-div">`;
    data += `<div class="table-data text-center">` + empRecords[i]._id + `</div>`;
    data += `<div class="table-data text-center">` + empRecords[i]._firstName + `</div>`;
    data += `<div class="table-data text-center">` + empRecords[i]._middleName + `</div>`;
    data += `<div class="table-data text-center">` + empRecords[i]._lastName + `</div>`;
    data += `<div class="table-data text-center">` + empRecords[i]._gender + `</div>`;
    data += `<div class="table-data text-center">` + empRecords[i]._age + `</div>`;
    data += `</td>`;
    data += "</tr>";
}
document.getElementById("empTbl").innerHTML = data;
