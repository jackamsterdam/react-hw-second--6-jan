import "./EmployeesList.css";
import {useState, useEffect} from 'react'
import {IEmployee} from '../../../Models/EmployeeModel'
import axios from "axios";
import config from "../../../Utils/Config";
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import Loading from "../../SharedArea/Loading/Loading";
import { NavLink } from "react-router-dom";


function EmployeesList(): JSX.Element {

    const [employees, setEmployees] = useState<IEmployee[]>([])

    useEffect(() => {

        (async function() {
          const response = await axios.get<IEmployee[]>(config.employeeUrl)
          setEmployees(response.data)
        })()
    },[])


//btw we didnt need to check for null on start cause empty array.id is just undefined and undefined doesnt get displayed but when we displaying {} object we will need null chaining operator or conditional rednering or initizlie with an object in useState or {} as IEmployee also works

// hmm maybe better to call it e instead of employee naming is confisuing- name is same for employee propname and employee object also is called employee  
    return (
        <div className="EmployeesList">

            {!employees && <Loading/>}
             
             <NavLink to='/employees/new'>➕</NavLink>

			{employees.map((employee:IEmployee) => <EmployeeCard key={employee.id} employee={employee} />)}
        </div>
    );
}

export default EmployeesList;
