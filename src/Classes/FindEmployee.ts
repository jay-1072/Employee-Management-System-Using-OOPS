import { EMPLOYEE } from "../Elements/Constants.js";

export class FindEmployee {
    findEmployee(empId:number):number {
        let employeeRecord = JSON.parse(localStorage.getItem(EMPLOYEE)!);
        for(let i=0; i<employeeRecord.length; i++) {
            if(empId===employeeRecord[i]._id) {
                return i;
            }
        }
        return -1;
    }
}