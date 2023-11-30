import axios from 'axios';


import localStorageService from './helpers/localStorageService'
//import router from './router/router'

const axiosInstance = axios.create();
const SERVER_PATH = 'http://localHost:8080'
let hasRefreshedToken = false;

//LocalStorageService
//const localStorageService = LocalStorageService.getService();

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorageService.getAccessToken();
        console.log('token');
        if (token) {
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
    response => {
        return response;
    },
    function (error) {
        console.log("error 34:")
        const originalRequest = error.config;

        if (
            error.response.status === 401 &&
            originalRequest.url === `${SERVER_PATH}/api/v1/auth/token`
        ) {
            window.location.href = '/'
            return Promise.reject(error);
        }

        if (error.response.status === 401 && !originalRequest._retry &&!hasRefreshedToken) {
            originalRequest._retry = true;
            const refreshToken = localStorageService.getRefreshToken();
            if(!refreshToken){
                return Promise.reject(error);
            }
            try {

                const refreshRes = axios.post(`${SERVER_PATH}/api/v1/auth/token`, {
                    refreshToken: localStorageService.getRefreshToken()
                })
                hasRefreshedToken = true;
                
                if (refreshRes.status === 201) {
                    console.log("line 50")
                    localStorageService.setToken(refreshRes.data.refreshToken)
                    axios.defaults.headers.common['Authorization'] =
                        'Bearer ' + localStorageService.getAccessToken()
                    hasRefreshedToken = false;
                    return axios(originalRequest);
                }
                console.log("Refresh failed")
                if(localStorageService.getAccessToken()&&localStorageService.getRefreshToken()){
                    localStorageService.removeItem("AccessToken");
                    localStorageService.removeItem("RefreshToken");
                    window.location.reload();
                }

            }
            catch (error) {
                hasRefreshedToken =false;
                console.log("refresh failed: " + error)
            }




        }
        return Promise.reject(error);
    }
)

export { axiosInstance };