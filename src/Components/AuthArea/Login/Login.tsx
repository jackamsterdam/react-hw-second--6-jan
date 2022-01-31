import "./Login.css";

import { useForm } from 'react-hook-form'
import authService from "../../../Services/AuthService";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { ICredentials } from "../../../Models/CredentialsModel";
import notify from "../../../Services/NotifyService";

// import { Notyf } from "notyf"
// let notification = new Notyf({duration: 4000, position: {x: "center", y: 'center'}})


function Login(): JSX.Element {

    const navigate = useNavigate()
    const { register, handleSubmit, formState } = useForm<ICredentials>()

    async function submit(credentials: ICredentials) {
        try {

            console.log('in the submit of Login:', credentials)
            await authService.login(credentials)
            // alert('התחברת בהצלחה')
            // notify.success('התחברת בהצלחה')
            notify.success('התחברת בהצלחה')
            // notification.success('using without class')
            navigate('/home')


        } catch (err: any) {
            // alert(err.message)
            notify.error(err)

        }
    }


    return (
        <div className="Login Box">
            <form onSubmit={handleSubmit(submit)}>

                <Typography className="Headline" variant="h3"  >כניסת יוזר</Typography>

               
                <TextField variant="outlined" label="שם משתמש:" className="TextBox" {...register('username')}  required/>
                <TextField type="password" variant="outlined" label="ססמא:" className="TextBox" {...register('password')}  required/>

                {/* default is type button for material ui for html its submit */}
                <Button type="submit" startIcon={<Send/>} fullWidth color="primary" variant="contained">&nbsp;&nbsp;התחבר</Button>

            </form>

        </div>
    );
}

export default Login;
