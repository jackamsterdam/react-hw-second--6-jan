import axios from "axios";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IEmployee } from "../../../Models/EmployeeModel";
import config from "../../../Utils/Config";
import "./AddEmployee.css";

function AddEmployee(): JSX.Element {

const {register, handleSubmit } = useForm<IEmployee>()
const navigate = useNavigate()

async function submit(employee: IEmployee) {
//dont forget second parameter
    try {
        console.log(employee)
        const response = await axios.post<IEmployee>(config.employeeUrl, employee)
        const addedProduct = response.data 
        console.log("addedProduct", addedProduct);

    }
    catch (err: any) {
       console.log(err.message)
    }
}


    return (
        <div className="AddEmployee Box">
            <form onSubmit={handleSubmit(submit)}>

                <label htmlFor="firstName">שם:</label>
                <input type="text" id="firstName" {...register('firstName')} />

                <label htmlFor="lastName">שם משפחה:</label>
                <input type="text" id="lastName" {...register('lastName')} />

                <label htmlFor="title">תפקיד:</label>
                <input type="text" id="title" {...register('title')} />

                <label htmlFor="country">ארץ:</label>
                <input type="text" id="country" {...register('country')} />

                <label htmlFor="city">עיר:</label>
                <input type="text" id="city" {...register('city')} />

                <label htmlFor="birthdate">יום הולדת:</label>
                <input type="date" id="birthDate" {...register('birthDate')} />

                {/* <button>הוסף</button> */}
{/* איך הפורם יודע אם יש יותר משתי כפתורים?
והאם לעשות את הכפתור שאוטומטי יעזוב את הפורם חזרה לעובדים ובאותה זמן יעשה סאבמיט האם הכפתור זה אותה כפתור או כפתור אחרת צריכה להיות ? */}
                <NavLink to="/employees">חזרה לעמוד עובדים</NavLink>
                <button onClick={() => navigate(-1)}>חזרה לעמוד עובדים</button>

            </form>

        </div>
    );
}

export default AddEmployee;
