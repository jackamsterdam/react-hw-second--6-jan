import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IUser } from "../../../Models/UserModel";
import store from "../../../Redux/Store";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {


    // why does this need to start with null ? 
    const [user, setUser] = useState<IUser>(null)


    useEffect(() => {
        // Once - update user at component load:    
        setUser(store.getState().authState.user)

        // Subscribe to store changes - whenever AuthState change - report it:
        const unsubscribeMe = store.subscribe(() => {
            console.log('change in state so subscribe gets called in Authmenu to update menu')
            setUser(store.getState().authState.user)

        })
// When component is destroyed:
        return () => unsubscribeMe()

    }, [])





    // conditional rednering and subscribing to changes in store 

    return (
        <div className="AuthMenu">
            {user === null ?
                <>

                    <Box component="span">ברוך הבא אורח</Box>
                    <Box component="span"> | </Box>
                    <NavLink to="/login">כניסת משתמש</NavLink>
                    <Box component="span"> | </Box>
                    <NavLink to="/register">הרשם</NavLink>

                </>
                :
                <>
                    <Box component="span"> ברוך הבא {user.firstName} {user.lastName} </Box>
                    <Box component="span"> | </Box>
                    <NavLink to="/logout">התנתק</NavLink>


                </>
            }

        </div>
    );
}

export default AuthMenu;
