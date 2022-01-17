import { IEmployee } from "../../../Models/EmployeeModel";
import "./EmployeeDetails.css";
import {useState, useEffect} from 'react'
import axios from "axios";
import config from "../../../Utils/Config";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../SharedArea/Loading/Loading";
import { NavLink } from "react-router-dom";

function EmployeeDetails(): JSX.Element {

    const param = useParams()
    console.log("param.id", param.id);
    const id = param.id
    


  const [employee, setEmployee] = useState<IEmployee>()
  const navigate = useNavigate()

  
  useEffect(() => {
   (async function() {
       const response = await axios.get<IEmployee>(config.employeeUrl + id)
       setEmployee(response.data)

   })()
  }, [])



//btw we didnt need to check for null on start with array of objects cause empty array.id is just undefined and undefined doesnt get displayed but when we displaying {} object we will need the null chaining operator or conditional rednering or initizlie with an object in useState or {} as IEmployee also works


    return (


        <div className="EmployeeDetails">
			<h1>פרטי עובד</h1>
            {!employee && <Loading />}

            {employee &&
            <>
            <h2> שם עובד: {employee.firstName} {employee.lastName}</h2>
            <h2> תפקיד: {employee.title}</h2>
            <h2>  ארץ: {employee.city}, {employee.country}</h2>
            <h2>  תאריך לידה: {employee.birthDate}</h2>

            <img src={config.employeeImageUrl + employee.imageName}/>
<br />
            <NavLink to="/employees">Go back with Navlink</NavLink>
            <br />
            <br />
            {/* if user manually types in adress bar something employee id not there than problem */}
            <button onClick={() => {navigate(-1)}}>Go Back with useNavigate</button>
           
            
            
            </>
            }
        </div>
    );
}

export default EmployeeDetails;
