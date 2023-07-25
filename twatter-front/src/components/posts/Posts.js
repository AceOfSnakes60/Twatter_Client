import { getAllPosts } from '../../library/apiHandler'

import {useState, useEffect} from 'react'


const Posts = ()=>{
    const [posts, setPosts] = useState();

    useEffect(() => {
        getAllPosts().then(posts=>{setPosts(posts)}).catch(err=>console.error(err));
    })


    return <div className='AllPosts'>
        {posts && posts.array.forEach(element => {
            return <div>e.body</div>
        })}
    </div>
}
export default Posts;