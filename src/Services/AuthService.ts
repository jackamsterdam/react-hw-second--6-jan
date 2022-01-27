import config from '../Utils/Config';
import store from '../Redux/Store'

import axios  from 'axios';
import { IUser } from '../Models/UserModel';
import { loginAuthAction, logoutAuthAction, registerAuthAction } from '../Redux/AuthState';
import { ICredentials } from '../Models/CredentialsModel';


class AuthService {
   async register(user: IUser): Promise<void> {
       //instead of putting a third parameter to axios we wil do an interceptor - much better  always await axios lol 
     const response = await axios.post<string>(config.registerUrl,user)
     const token = response.data 

     store.dispatch(registerAuthAction(token)) 
   }

   async login(credentials: ICredentials): Promise<void> {
       const response = await axios.post<string>(config.loginUrl, credentials)
       const token = response.data
       store.dispatch(loginAuthAction(token))
   }

   logout():void {
       store.dispatch(logoutAuthAction())
   }
}

const authService = new AuthService()

export default authService