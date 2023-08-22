import { getAllPosts } from '../../library/apiHandler'
import {useState, useEffect} from 'react'


import SinglePost from './SinglePost';
import SubmitPost from './SubmitPost';
import LogIn from '../user/LogIn'

import "./Posts.css"


const Posts = ()=>{
    const [posts, setPosts] = useState();

    useEffect(() => {
        getAllPosts().then(posts=>{setPosts(posts)}).catch(err=>console.error(err));
    }, [])


    return( 
    <div className='Middle'>
        {sessionStorage.getItem('isLoggedin') ? <SubmitPost/> :
        <LogIn/>}

        {posts && posts.map(element => {
            return <SinglePost twatt={element}/>
        })}
    </div>)
}
export default Posts;