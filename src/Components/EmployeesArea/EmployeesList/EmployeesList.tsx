import "./EmployeesList.css";
import {useState, useEffect} from 'react'
import {IEmployee} from '../../../Models/EmployeeModel'
import axios from "axios";
import config from "../../../Utils/Config";
import EmployeeCard from '../EmployeeCard/EmployeeCard'


function EmployeesList(): JSX.Element {

    const [employees, setEmployees] = useState<IEmployee[]>([])

    useEffect(() => {

        (async function() {
          const response = await axios.get<IEmployee[]>(config.employeeUrl)
          setEmployees(response.data)
        })()
    },[])




// hmm maybe better to call it e instead of employee naming is confisuing- name is same for employee propname and employee object also is called employee  
    return (
        <div className="EmployeesList">
			{employees.map((employee:IEmployee) => <EmployeeCard key={employee.id} employee={employee} />)}
        </div>
    );
}

export default EmployeesList;
