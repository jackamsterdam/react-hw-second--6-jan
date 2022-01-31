import "./Register.css";
import { IUser } from '../../../Models/UserModel'
import { useForm } from 'react-hook-form'
import authService from "../../../Services/AuthService";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, FormControlLabel, TextField, Typography } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import notify from "../../../Services/NotifyService";


function Register(): JSX.Element {

    const navigate = useNavigate()
    const { register, handleSubmit, formState } = useForm<IUser>()

    async function submit(user: IUser) {

        try {

            console.log('in the submit of register:', user)
            await authService.register(user)
            notify.success('נרשמת בהצלחה')

            navigate('/home')


        } catch (err: any) {
            notify.error(err)

        }
    }


    return (
        <div className="Register Box">
            <form onSubmit={handleSubmit(submit)}>

                <Typography className="Headline" variant="h3"  >הרשמת יוזר</Typography>

                <TextField variant="outlined" label="שם:" className="TextBox" {...register('firstName')}  required/>
                <TextField variant="outlined" label="שם משפחה:" className="TextBox" {...register('firstName')}  required/>
                <TextField variant="outlined" label="שם משתמש:" className="TextBox" {...register('username')}  required/>
                <TextField type="password" variant="outlined" label="ססמא:" className="TextBox" {...register('password')}  required/>

                <FormControlLabel label="הרשם לרשימת התפוצה שלנו" control={<Checkbox/>}/>

                <Button type="submit" startIcon={<Send/>} fullWidth color="primary" variant="contained">&nbsp;&nbsp;הרשם</Button>

            </form>

        </div>
    );
}

export default Register;
