import { getAllPosts } from '../../library/apiHandler'

import {useState, useEffect} from 'react'
import SinglePost from './SinglePost';
import SubmitPost from './SubmitPost';
import LogIn from '../user/LogIn'


const Posts = ()=>{
    const [posts, setPosts] = useState();
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        getAllPosts().then(posts=>{setPosts(posts)}).catch(err=>console.error(err));
    }, [])


    return( 
    <div className='AllPosts'>
        {loggedIn ? <SubmitPost/> :
        <LogIn/>}

        {posts && posts.map(element => {
            return <SinglePost twatt={element}/>
        })}
    </div>)
}
export default Posts;