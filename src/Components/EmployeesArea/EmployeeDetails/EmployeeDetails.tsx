import { IEmployee } from "../../../Models/EmployeeModel";
import "./EmployeeDetails.css";
import {useState, useEffect} from 'react'
import axios from "axios";
import config from "../../../Utils/Config";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../SharedArea/Loading/Loading";
import { NavLink } from "react-router-dom";
import employeesService from "../../../Services/EmployeesService";
import notify from "../../../Services/NotifyService";

function EmployeeDetails(): JSX.Element {

    const param = useParams()
    console.log("param.id", param.id);
    const id = Number(param.id)
    


  const [employee, setEmployee] = useState<IEmployee>()
  const navigate = useNavigate()

  
  useEffect(() => {
    //   try {

        // Old: 
        //   (async function() {
        //       const response = await axios.get<IEmployee>(config.employeeUrl + id)
        //       setEmployee(response.data)
       
        //   })()

        // new: 
        employeesService.getOneEmployee(id)
        .then(employee => setEmployee(employee))
        .catch(err => notify.error(err))
//!Again catch/????????????????????????????????????????????
    //   }
    //   catch(err: any) {
    //       alert(err.message)
    //   }
  }, [])

  async function deleteProduct() {
      const confirmDelete = window.confirm('האם אתה בטוח?')
      if (!confirmDelete) return 

    //   old: 
    //   await axios.delete(config.employeeUrl + id)
    //new
    /* The below code is making a call to the deleteEmployee method of the employeesService. */
    await employeesService.deleteEmployee(id)
    //! what about try catch here ??? 


      notify.success('העובד/ת נמחק/ה')
      navigate('/employees')
  }



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
            <button onClick={() => navigate(-1)}>Go Back with useNavigate</button>
            <button onClick={deleteProduct}>למחוק עובד</button>
            
            <button onClick={() => navigate('/employees/edit/' + employee.id)}>Edit</button>
            </>
            }
        </div>
    );
}

export default EmployeeDetails;
