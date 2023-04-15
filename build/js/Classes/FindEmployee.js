// Search Function
let findEmployee = (empId) => {
    let employeeRecord = JSON.parse(localStorage.getItem('EmployeeRecords'));
    for (let i = 0; i < employeeRecord.length; i++) {
        if (empId === employeeRecord[i]._id) {
            return i;
        }
    }
    return -1;
};
export { findEmployee };
