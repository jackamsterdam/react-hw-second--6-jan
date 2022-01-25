import { IEmployee } from '../Models/EmployeeModel';
import axios from "axios"
import store from "../Redux/Store"
import config from "../Utils/Config"
import { fetchEmployeesAction, updateEmployeeAction } from '../Redux/EmployeesState'
import { addEmployeeAction, deleteEmployeeAction } from '../Redux/EmployeesState';

class EmployeesService {

    // dont use word function lol in class 
    /**
     * @returns The employees array.
     */
    async fetchEmployees(): Promise<IEmployee[]> {
        if (store.getState().employeesState.employees.length === 0) {
            const response = await axios.get<IEmployee[]>(config.employeeUrl)
            const employees = response.data
            store.dispatch(fetchEmployeesAction(employees))
        }

        return store.getState().employeesState.employees

    }

    //no need to change anything in the store this function just gets all employees
   /**
    * @param id - number - The id of the employee to get.
    * @returns The employee object.
    */
    async getOneEmployee(id: number): Promise<IEmployee> {
        let employee = store.getState().employeesState.employees.find(emp => emp.id === id)
        if (!employee) {
            const response = await axios.get<IEmployee>(config.employeeUrl + id)
            employee = response.data   
        }
        return employee
    }

  /**
   * `deleteEmployee` is a function that takes an employee id and deletes the employee from the
   * database.
   * @param id - number - The id of the employee to delete.
   */
    async deleteEmployee(id: number): Promise<void> {
        await axios.delete(config.employeeUrl + id)
        store.dispatch(deleteEmployeeAction(id))
    }

    /**
     * @param  employee - IEmployee
     * @returns The added employee. but doesnt have to BTW
     */
    async addEmployee(employee: IEmployee): Promise<IEmployee> {

        const formData = new FormData()
        formData.append('firstName', employee.firstName)
        formData.append('lastName', employee.lastName)
        formData.append('title', employee.title)
        formData.append('country', employee.country)
        formData.append('city', employee.city)
        formData.append('birthDate', employee.birthDate.toString())
        formData.append('image', employee.image.item(0))

        const response = await axios.post<IEmployee>(config.employeeUrl, formData)
        const addedEmployee = response.data

        //dont forget to dispatch to update state
        store.dispatch(addEmployeeAction(addedEmployee))

        return addedEmployee

    }

  /**
   * Update an employee by sending a form data object to the server.
   * @param  employee - IEmployee
   * @returns The updated employee. even though we dont need it 
   */
    async updateEmployee(employee: IEmployee): Promise<IEmployee> {

        const formData = new FormData()
        formData.append('firstName', employee.firstName)
        formData.append('lastName', employee.lastName)
        formData.append('title', employee.title)
        formData.append('country', employee.country)
        formData.append('city', employee.city)
        formData.append('birthDate', employee.birthDate.toString())
        formData.append('image', employee.image.item(0))


        //dont forget to put formData
        const response = await axios.put<IEmployee>(config.employeeUrl + employee.id, formData)
        const updatedEmployee = response.data

        store.dispatch(updateEmployeeAction(updatedEmployee))

        return updatedEmployee

    }
    



















}

const employeesService = new EmployeesService()

export default employeesService
