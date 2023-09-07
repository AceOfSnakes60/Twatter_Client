import { getAllPosts } from '../../library/apiHandler'
import {useState, useEffect} from 'react'


import SinglePost from './SinglePost';
import SubmitPost from './SubmitPost';
import LogIn from '../user/LogIn'
import Replies from '../posts/Replies';

import "./Posts.css"
import Twatt from '../Twatt';


const Posts = (props)=>{
    const [posts, setPosts] = useState();


    useEffect(() => {
        getAllPosts().then(posts=>{setPosts(posts)}).catch(err=>console.error(err));
    }, [])


    return( 
    <div className='Posts'>
        {posts && posts.map(element => {
            return(<div><Twatt id={element.id} date={element.date} text={element.text} parentId={element.parentId}/></div>)
        })}
    </div>)
}
export default Posts;