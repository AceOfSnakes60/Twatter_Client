import {axiosInstance} from '../axiosConfig'
import localStorageService from './localStorageService'
const SERVER_PATH = 'http://localHost:8080'


async function authenticate(email, password){
    try{
        const response = await axiosInstance.post(`${SERVER_PATH}/api/v1/auth/authenticate`, 
        {"email": email,
        "password": password})
        console.log(response);
        if(response.data.accessToken&&response.data.refreshToken){
            localStorageService.setAccessToken(response.data.accessToken);
            localStorageService.setRefreshToken(response.data.refreshToken);
            console.log(response.data.accessToken);
        }
    }catch(error){
        console.error(error)
    }

}

async function register(userDetails){
    try{
        console.log(userDetails);
        const response = await axiosInstance.post(`${SERVER_PATH}/api/v1/auth/register`, userDetails)
        console.log(response)
        if(response.data.token){
            localStorageService.setAccessToken(response.data.token);
            console.log(response.data.token)
        }
        return response;
    } catch(error){
        console.error(error);
    }
}

async function getMyself(){
    try{
        const response = axiosInstance.get(`${SERVER_PATH}/user/me`);

        console.log(response);
        return response;
        } catch(error){
            console.error(error);
        }
}
    
async function getPostsByUser(username){
    try{
        const response = axiosInstance.get(`${SERVER_PATH}/twatts/user/${username}`);
        return response;
    } catch(error){
        console.error(error);
    }
}

async function getAllPosts(page) {
    console.log('getAllPosts');
    try{
    const response = await axiosInstance.get(`${SERVER_PATH}/twatts?page=${page}`)
    return response;
    }
    catch(error){ console.error(error);} 
}

async function postTwatt(twatt){
    console.log(twatt);

    axiosInstance.post(`${SERVER_PATH}/twatts`, twatt)
    .then(res=>{return res})
    .catch(err=>console.error(err))
    }


    async function getAllGroups() {
        try{
        const response = await axiosInstance.get(`${SERVER_PATH}/groups`)
        return response;
        }
        catch(error){ console.error(error);} 
    }

    async function postGroup(group){
    
        axiosInstance.post(`${SERVER_PATH}/groups`, group)
        .then(res=>{return res})
        .catch(err=>console.error(err))
    }

    async function getPosts(endpoint, page){
        try{
            const respone = axiosInstance.get(`${SERVER_PATH}/twatts${endpoint}?page=${page}`)
            return respone;
        }
        catch(error){ console.error(error);}

    }

    async function getGroup(id){
        try{
            const response = axiosInstance.get(`${SERVER_PATH}/groups/${id}`);
            return response;
        }
        catch(error){ console.error(error);}
    }


export {getMyself, authenticate, register, getAllPosts, postTwatt,  getAllGroups, postGroup, getPosts, getGroup, getPostsByUser};