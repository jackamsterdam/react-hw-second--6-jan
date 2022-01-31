import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../../Services/AuthService";
import notify from "../../../Services/NotifyService";
import "./Logout.css";

function Logout(): JSX.Element {

    const navigate = useNavigate()

    useEffect(() => {
        authService.logout()
        notify.success('התנתקת בהצלחה')
        navigate('/home')
    }, [])


    return null
}

export default Logout;
