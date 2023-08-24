import { getUserById } from '../../library/apiHandler'
import {useState, useEffect} from 'react'
import "./SinglePost.css";


const SinglePost = (props)=>{

    const [user, setUser] = useState();
    
    useEffect(() => {
        getUserById(props.twatt.userId).then(user=>{setUser(user)}).catch(err=>console.error(err));
    }, [])

    return(
    <div className="SinglePost">
        <div className="postHeader">
            {user&&<h3>{user.username}</h3>}
            <h3>{props.twatt.date}</h3>
        </div>
        <div className='postBody'>
            <p>
                {props.twatt.text}
            </p>
            </div>

    </div>
    )
}

export default SinglePost;