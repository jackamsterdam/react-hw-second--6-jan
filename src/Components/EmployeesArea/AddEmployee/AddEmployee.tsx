import axios from "axios";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IEmployee } from "../../../Models/EmployeeModel";
import employeesService from "../../../Services/EmployeesService";
import notify from "../../../Services/NotifyService";
import config from "../../../Utils/Config";
import "./AddEmployee.css";

function AddEmployee(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<IEmployee>()
    const navigate = useNavigate()

    async function submit(employee: IEmployee) {
        //dont forget second parameter

       
        try {
            // old: 
            // const formData = new FormData()
            // formData.append('firstName', employee.firstName)
            // formData.append('lastName', employee.lastName)
            // formData.append('title', employee.title)
            // formData.append('country', employee.country)
            // formData.append('city', employee.city)
            // formData.append('birthDate', employee.birthDate.toString())
            // formData.append('image', employee.image.item(0))


            // console.log(employee)
            // // const response = await axios.post<IEmployee>(config.employeeUrl, employee)
            // const response = await axios.post<IEmployee>(config.employeeUrl, formData)
            // const addedEmployee = response.data
            // console.log("addedProduct", addedEmployee);

            // new from services: 
               employeesService.addEmployee(employee)
               notify.success('Employee has been added!')
               

            navigate('/employees')

        }
        catch (err: any) {
            console.log(err.message)
            notify.error(err)
        }
    }


    return (
        <div className="AddEmployee Box">
            <form onSubmit={handleSubmit(submit)}>
                <h3>הוסף עובד</h3>
            

                <label htmlFor="firstName">שם:</label>
                <input type="text" id="firstName" {...register('firstName', {
                    required: { value: true, message: 'הכנס שם' },
                    minLength: { value: 2, message: 'מינימום 2 אותיות' },
                    maxLength: { value: 30, message: 'מקסימום 30 אותיות' }
                })} />
                <span>{formState.errors.firstName?.message}</span>

                <label htmlFor="lastName">שם משפחה:</label>
                <input type="text" id="lastName" {...register('lastName', {
                    required: { value: true, message: 'הכנס שם משפחה' },
                    minLength: { value: 2, message: 'מינימום 2 אותיות' },
                    maxLength: { value: 30, message: 'מקסימום 30 אותיות' },
                    
                })} />
                <span>{formState.errors.lastName?.message}</span>


                <label htmlFor="title">תפקיד:</label>
                <input type="text" id="title" {...register('title', {
                    required: { value: true, message: 'הכנס תפקיד' },
                    minLength: { value: 5, message: 'מינימום 5 אותיות' },
                    maxLength: { value: 20, message: 'מקסימום 20 אותיות' }
                })} />
                <span>{formState.errors.title?.message}</span>


                <label htmlFor="country">ארץ:</label>
                <input type="text" id="country" {...register('country', {
                     required: { value: true, message: 'הכנס ארץ' },
                     minLength: { value: 3, message: 'מינימום 3 אותיות' },
                     maxLength: { value: 30, message: 'מקסימום 30 אותיות' }
                })} />
                <span>{formState.errors.country?.message}</span>

                <label htmlFor="city">עיר:</label>
                <input type="text" id="city" {...register('city', {
                     required: { value: true, message: 'הכנס עיר' },
                     minLength: { value: 3, message: 'מינימום 3 אותיות' },
                     maxLength: { value: 30, message: 'מקסימום 30 אותיות' }
                })} />
                <span>{formState.errors.city?.message}</span>


                <label htmlFor="birthdate">יום הולדת:</label>
                <input type="date" id="birthDate" {...register('birthDate')} />

                <label htmlFor="pic">תמונה:</label>
                {/* lol register not required dont confuse  */}
                <input type="file" accept="image/*" {...register('image')} />

                <button>הוסף</button>
                {/* איך הפורם יודע אם יש יותר משתי כפתורים?
והאם לעשות את הכפתור שאוטומטי יעזוב את הפורם חזרה לעובדים ובאותה זמן יעשה סאבמיט האם הכפתור זה אותה כפתור או כפתור אחרת צריכה להיות ? */}
                {/* תשובה navigate('/employees') */}
                <NavLink to="/employees">חזרה לעמוד עובדים</NavLink>
                <button onClick={() => navigate(-1)}>חזרה לעמוד עובדים</button>

            </form>

        </div>
    );
}

export default AddEmployee;
