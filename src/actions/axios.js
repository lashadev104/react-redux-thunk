import { Axios as AxiosRoot } from 'axios'
import axiosDefaults from 'axios/lib/defaults'

class Axios extends AxiosRoot {
    constructor () {
        super(Object.assign(axiosDefaults));
        this.defaults.baseURL = 'https://gigder-api-dev.herokuapp.com';

        let token = window.localStorage.getItem('token');

        if(token) {
            this.defaults.headers.Authorization = window.localStorage.getItem('token');
        }
    }
}

export default new Axios();