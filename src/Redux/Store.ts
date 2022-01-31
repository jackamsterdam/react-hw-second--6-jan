import {combineReducers, createStore} from 'redux'
import { productsReducer } from './ProductsState'
import { employeesReducer } from './EmployeesState'
import { authReducer } from './AuthState'
import { composeWithDevTools } from 'redux-devtools-extension'



/*
The `combineReducers` function takes a map of reducer functions and returns a new reducer function. 

The `createStore` function takes a reducer function and an optional initial state object. It returns
a Redux store object. 

The `createStore` function takes the root reducer function and returns a Redux store object. 

The store object has a `getState` method that returns the current state tree. 

The store object has an `dispatch` method that takes an action to change the store state.

The store object has a `subscribe` method that lets ......

The reducers are combined into a single object and exported.
*/



const reducers = combineReducers({
    productsState: productsReducer,
    employeesState: employeesReducer,
    authState: authReducer
})

/* The above code is creating a store that will be used to store the state of our application. */
// const store = createStore(reducers)
const store = createStore(reducers, composeWithDevTools())  //! delete this for production
// let options = {
//   trace: true
// }
// const store = createStore(reducers, composeWithDevTools(options)); // With Redux-DevTools
export default store 








// side note: 

/*
# Redux: Create Store
# 
# The Redux store holds the complete state of your application.
 The reducers are combined into one object and then the store is created.

# Redux Thunk

# Redux Thunk is a middleware that allows us to write action creators that return a function instead
of an action.
# 
# It is useful for asynchronous actions that dispatch many actions over time.
# 
# It is also useful for allowing us to dispatch an action creator that contains an API call.
# 
# The action creator that is passed into the dispatch function will be executed at some point in the
future.
# */
















