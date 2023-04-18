import { _tblbody } from "../Elements/BasicElements.js";

export class sortService {

    sortByEId(sortType:string) {

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

        _tblbody.innerHTML = ''; 
    }
}