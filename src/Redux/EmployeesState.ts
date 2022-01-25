import { IEmployee } from './../Models/EmployeeModel';


/* The below code is creating a class called EmployeeState. The class has a property called employees.
The property is an array of objects. 
*/
class EmployeesState {
    employees: IEmployee[] = []
}

/* The EmployeesActionType enum is used to define the action types that are dispatched to the reducer. 
The FetchEmployees action type is dispatched when the fetchEmployeesAction action is dispatched. 
The AddEmployees action type is dispatched when the addEmployeesAction action is dispatched. 
The UpdateEmployees action type is dispatched when the updateEmployeesAction action is dispatched. 
The DeleteEmployees action type is dispatched when the deleteEmployeesAction action is dispatched. 
/* The EmployeesActionType enum is used to define the different types of actions that can be dispatched
to the store. 

The FetchEmployees action type is used to dispatch an action to fetch all employees from the API. 

The AddEmployees action type is used to dispatch an action to add a new employee to the store. 

The UpdateEmployee action type is used to dispatch an action to update an existing employee in the
store. 

The DeleteEmployee action type is used to dispatch an action to delete an existing employee from
the store */
// The EmployeesActionType enum is used to define the action types */
enum EmployeesActionType {
    FetchEmployees = 'FetchEmployees',
    AddEmpoyees = 'AddEmployees',
    UpdateEmployee = 'UpdateEmployees',
    DeleteEmployee = 'DeleteEmployees'
}

/* This is the action (object) that will be dispatched to the reducer. */
export interface EmployeesAction {
    type: EmployeesActionType,
    payload: any
}


//Action Creators
/**
 * @param employees - IEmployee[]
 * @returns The action object.
 */
export function fetchEmployeesAction(employees: IEmployee[]): EmployeesAction {
    return { type: EmployeesActionType.FetchEmployees, payload: employees }
}

/**
 * @param employee - IEmployee
 * @returns The action object.
 */
export function addEmployeeAction(employee: IEmployee): EmployeesAction {
    return { type: EmployeesActionType.AddEmpoyees, payload: employee }
}

/**
 * @param employee - IEmployee
 * @returns The action object.
 */
export function updateEmployeeAction(employee: IEmployee): EmployeesAction {
    return { type: EmployeesActionType.UpdateEmployee, payload: employee }
}

/**
 * @param id - number - The id of the employee to delete.
 * @returns The action object.
 */
export function deleteEmployeeAction(id: number): EmployeesAction {
    return { type: EmployeesActionType.DeleteEmployee, payload: id }
}

/**
 * The `employeesReducer` function takes the current state and an action as parameters. 
 * It returns the new state. 
 * 
 * The `employeesReducer` function is a pure function. 
 * It does not modify the state passed to it. 
 * It returns a new state object. 
 * 
 * The `employeesReducer` function is also a reducer function. 
 * It returns the new state object after it receives an action. 
 * 
 * The `employeesReducer` function is also a switch statement. 
 * It switches on the type of action that was passed to it. 
 * 
 * The `employeesReducer` function is also a reducer function. 
 * It returns the new state object after it receives an action. 
 * 
 * The `employeesReducer` function is also a pure function. 
 * It does not modify the state passed to it. 
 * It returns a new state object.
 * @param currentState - The current state of the store.
 * @param {EmployeesAction} action - The action that was dispatched.
 * @returns The new state.
 */

export function employeesReducer(currentState = new EmployeesState(), action: EmployeesAction): EmployeesState {
    const newState = { ...currentState }
    switch (action.type) {

        case EmployeesActionType.FetchEmployees:
        newState.employees = action.payload
        break

        case EmployeesActionType.AddEmpoyees:
            newState.employees.push(action.payload)
        break

        case EmployeesActionType.UpdateEmployee:
            const indexToUpdate = newState.employees.findIndex(emp => emp.id === action.payload.id)
            if (indexToUpdate >= 0) {
                newState.employees[indexToUpdate] = action.payload
            }
        break

        case EmployeesActionType.DeleteEmployee:
            const indexToDelete = newState.employees.findIndex(emp => emp.id === action.payload)
            if (indexToDelete >= 0) {
                newState.employees.splice(indexToDelete, 1)
            }
    }

    return newState
}

