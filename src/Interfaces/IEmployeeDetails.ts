/**
 * This interface contains employee details 
 */

namespace EmployeeDetails {
    export interface IEmployeeDetails {
        _id:number;
        _profile:string;
        _about:string;
        _firstName:string;
        _middleName:string;
        _lastName:string;
        _gender:string;
        _age:number;
        _designation:string;
        _experience:number;
        _salary:number;
        _skills:string[];
        _email:string;
    }
}