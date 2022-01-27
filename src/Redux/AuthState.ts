import jwtDecode from 'jwt-decode'
import  {IUser}  from './../Models/UserModel';



/* Creating a class called AuthState. */
// dont forget to export ! 
/* The AuthState class is a class that holds the user and token. 
The constructor sets the token and user if there is a token in local storage. */
export class AuthState {
    public user: IUser | null | undefined = null  //strictnullchecks false in tsconfig would prevent the error 
    public token: string | null | undefined = null

    constructor() {
        this.token = localStorage.getItem('token')
        if (this.token) {
            const encodedObject: any = jwtDecode(this.token)
            this.user = encodedObject.user
        }
    }

}


// The AuthActionType enum is used to define the action types */
export enum AuthActionType {
    Register = 'Register',
    Login = 'Login',
    Logout = 'Logout'
}


/* This is the action (object) that will be dispatched to the reducer. */
export interface AuthAction {
    type: AuthActionType
    payload?: string 
}

// we use these when we dispatch to the store to change state and we get what gets returned from axios and put it in here so in this case its the token 
/**

 * @param token - string: The token to be stored in the store.
 * @returns The action object
 */
export function registerAuthAction(token: string): AuthAction {
    return { type: AuthActionType.Register, payload: token }
}

export function loginAuthAction(token: string): AuthAction {
    return { type: AuthActionType.Login, payload: token }
}

export function logoutAuthAction(): AuthAction {
    return { type: AuthActionType.Logout }
}


// lol dont write currentState: new AuthState()   its acutally currentState: AuthState = new AuthState() which the default value object

/**
 * `authReducer` is a reducer function that takes the current state and an action as parameters. 
 * It returns a new state. 
 * 
 * The `switch` statement handles the different actions. 
 * 
 * The `case AuthActionType.Register` and `case AuthActionType.Login` statements set the `token`  to the action payload. 
 * and sets the `user` property to the decoded object from jwtDecode
 * 
 * The `case AuthActionType.Logout` statement sets  `token` and `user` properties to null 
 * 
 * The `localStorage.setItem with the 'token' statement adds the token to local storage.
 * The `localStorage.removeItem('token')` statement removes the token from local storage.
 * @param currentState - The current state of the application.
 * @param  action - AuthAction - The action that was dispatched.
 * @returns The new state.
 */

export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {
    const newState = { ...currentState }

    switch (action.type) {
        case AuthActionType.Register:
        case AuthActionType.Login:
            newState.token = action.payload // Here the payload is the token sent from the backend.
            console.log('are these the same thing???')
            console.log("action.payload", action.payload);
            console.log("newState.token ", newState.token );

            
            const encodedObject: any = jwtDecode(action.payload)  /// Convert to any for getting the inside  and you can write newState.token instead 
            newState.user = encodedObject.user

            localStorage.setItem('token', newState.token)

            break;
        case AuthActionType.Logout:
            newState.user = null
            newState.token = null

            localStorage.removeItem('token')

    }
    return newState
}