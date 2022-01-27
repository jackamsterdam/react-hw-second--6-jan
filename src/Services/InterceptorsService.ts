import axios from 'axios';
import store from '../Redux/Store';
class InterceptorsService {
    createInterceptors(): void {


        axios.interceptors.request.use(request => {
            console.log('the token from interceptor' ,store.getState().authState.token)
            if (store.getState().authState.token) {
                request.headers = {
                    authorization: 'Bearer ' + store.getState().authState.token
                }
            }
            return request
        })
 
    }
}

const interceptorsService = new InterceptorsService()

export default interceptorsService