import axios from 'axios';

import localStorageService from './helpers/localStorageService'
//import router from './router/router'

const axiosInstance = axios.create();
const SERVER_PATH = 'http://localHost:8080'

//LocalStorageService
//const localStorageService = LocalStorageService.getService();

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorageService.getAccessToken();
        console.log('token');
        if(token){
            config.headers['Authorization'] = 'Bearer ' + token;
        }

        // config.headers['Content-Type] = 'application/json';
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)
axiosInstance.interceptors.response.use(
    response=>{
        return response;
    },
    function(error) {
        const originalRequest = error.config;

        if(
            error.response.status === 401 &&
            originalRequest.url === `${SERVER_PATH}/v1/auth/token`
        ) {
            window.location.href = '/'
            return Promise.reject(error);
        }

        if(error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorageService.getRefreshToken();
            return axios.post('auth/token', {
                refresh_token: refreshToken
            }).then(res => {
                if(res.status === 201){
                    console.log("line 50")
                    localStorageService.setToken(res.data)
                    axios.defaults.headers.common['Authorization'] =
                    'Bearer ' + localStorageService.getAccessToken()
                    return axios(originalRequest);
                }
            })
        }
        return Promise.reject(error);
    }
)

export {axiosInstance};