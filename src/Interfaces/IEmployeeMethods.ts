/**
 * This interface contains methods that we will use for employee management system
 */
namespace EmployeeMethods {
    export interface IEmployeeMethods {
        addEmployee: (newEmployee:Employee) => void; 
        updateEmployee: (employee:Employee, index:number) => void;
    }
}