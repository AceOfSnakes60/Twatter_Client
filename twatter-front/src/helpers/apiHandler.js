import axiosInstance from '../axiosConfig'
import localStorageService from './localStorageService'
const SERVER_PATH = 'http://localHost:8080'


//TODO
// Replace with Axiom
// Create env file

async function authenticate(username, email, password){
    try{
        const response = await axiosInstance.post(`${SERVER_PATH}/api/v1/auth/authenticate`,
        {
            "username": username,
            "email": email,
            "password": password
        })
        if(response.data){
            localStorageService.setAccessToken(response.body.token);
        }
    }catch(error){
        console.error(error)
    }

}

async function register(userDetails){
    try{
        const response = await axiosInstance.post(`${SERVER_PATH}/api/v1/auth/register`, userDetails)
        if(response.data){
            localStorageService.setAccessToken(response.data);
        }
        return response;
    } catch(error){
        console.error(error);
    }
}

async function getAllPosts() {
    try{
        const response = await axiosInstance.get(`${SERVER_PATH}/twatts`)
        return response.data;
    }
    catch(error){
            console.error(error);
    }
    
}

async function postTwatt(twatt){
    console.log(twatt);

    const response = await fetch(`${SERVER_PATH}/twatts`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(twatt)
    })
    const posts = await response;
    console.log(posts);
    return posts;
}

async function validateUser(user){
    const response = await fetch(`${SERVER_PATH}/user/validate`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    const reply = await response.json();
    return reply;
}

async function registerUser(user){
    const response = await fetch(`${SERVER_PATH}/user`,{
        method: `POST`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.springify(user)
    })
    const reply = await response.json();
    return reply;
}

async function getUserById(id){
    const response = await fetch(`${SERVER_PATH}/user/${id}`);
    const user = await response.json();
    return user;
}

async function getReplies(id){
    const response = await fetch(`${SERVER_PATH}/twatts/replies/${id}`);
    const posts = await response.json();
    console.log(posts);
    return posts;
}
async function getPostById(id){
    const response = await fetch(`${SERVER_PATH}/twatts/${id}`);
    const posts = await response.json();
    console.log(posts);
    return posts;
}

export {authenticate, register, getAllPosts, postTwatt, validateUser, registerUser, getUserById, getReplies, getPostById};