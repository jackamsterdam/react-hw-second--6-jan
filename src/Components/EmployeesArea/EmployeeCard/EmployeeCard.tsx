import { NavLink } from "react-router-dom";
import { IEmployee } from "../../../Models/EmployeeModel";
import config from "../../../Utils/Config";
import "./EmployeeCard.css";

interface EmployeeCardProps {
    employee: IEmployee
 }

function EmployeeCard(props: EmployeeCardProps): JSX.Element {
  
    return (
        <div className="EmployeeCard Box">
            <div>
            {props.employee.title} {props.employee.firstName}   {props.employee.lastName}
            </div>
            <div>
                תאריך לידה: {props.employee.birthDate}
            </div>
            <div>
                ארץ:  {props.employee.city},  {props.employee.country}
            </div>
            <div>
                <NavLink to={'/employees/details/' + props.employee.id}>
                <img src={config.employeeImageUrl + props.employee.imageName}  alt="Employee picture" />
                </NavLink>
            </div>
        
			
        </div>
    );
}

export default EmployeeCard;
