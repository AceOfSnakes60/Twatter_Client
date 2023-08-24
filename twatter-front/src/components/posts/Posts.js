import { getAllPosts } from '../../library/apiHandler'
import {useState, useEffect} from 'react'


import SinglePost from './SinglePost';
import SubmitPost from './SubmitPost';
import LogIn from '../user/LogIn'
import Replies from '../posts/Replies';

import "./Posts.css"


const Posts = (props)=>{
    const [posts, setPosts] = useState();
    const handleRegister = ()=>{
        props.setIsRegister(true);
        props.setIsPosts(false);
    }

    useEffect(() => {
        getAllPosts().then(posts=>{setPosts(posts)}).catch(err=>console.error(err));
    }, [])


    return( 
    <div className='Middle'>
        {sessionStorage.getItem('isLoggedin') ? <SubmitPost parent={null}/> : <div>
        <LogIn/>
        <button onClick={handleRegister}>Register</button></div>}

        {posts && posts.map(element => {
            return(<div><SinglePost twatt={element}/><Replies parentId={element.id}/></div>)
        })}
    </div>)
}
export default Posts;