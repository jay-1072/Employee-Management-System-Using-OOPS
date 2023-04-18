const _tblbody = document.getElementById('tblBody');
// let employeeObj:Employee;
let index:any;
let base64:any;
let nameRegexp:any = /^\S*$/;
const submitBtn = <HTMLInputElement>document.getElementById('submitBtn');
const modal = <any>document.getElementById('newPrdModal');

export {
    _tblbody, index, base64, nameRegexp, submitBtn, modal
}