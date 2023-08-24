import SubmitPost from './SubmitPost';
import SinglePost from './SinglePost';
import {useState} from 'react'

const Replies = (props)=>{

    const [isReply, setIsReply] = useState(false);
    const [showReplies, setShowReplies] = useState(false);
    const [replies, setReplies] = useState();


    const getReplies = ()=>{
        getReplies(props.parentId).then(r=>{setReplies(r); setShowReplies(true);}).catch(e=>console.error(e));
    }

    return(
    <div className="replies">
            {!isReply&&<button onClick={()=>setIsReply(true)}>Reply</button>}
            {isReply && <div><SubmitPost parent={props.parentId}/>
                <button onClick={()=>setIsReply(false)}>close reply</button>
            </div>}
            <div className='replies'>
            {!showReplies&&<button onClick={getReplies}>Show</button>}
            {showReplies&&
                <div>
                    <button onClick={setShowReplies(false)}>Hide</button>
                    <div>{replies.map(e=>{return(<SinglePost twatt={e}/>)})}</div>
                </div>
            }
            </div>

    </div>
    )
}

export default Replies;