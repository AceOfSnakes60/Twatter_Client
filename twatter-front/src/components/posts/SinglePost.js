import { getReplies, getUserById, getPostById, getPosts } from '../../helpers/apiHandler'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./SinglePost.css";
import Twatt from '../Twatt';
import CenterBar from '../MessageField';
import MessageField from '../MessageField';
import localStorageService from '../../helpers/localStorageService';

const SinglePost = (props) => {
    const id  = props.twattId;
    const [parentTwatt, setParentTwatt] = useState();
    const [replies, setReplies] = useState();
    const [page, getPage] = useState(0)

    useEffect(() => {
        getPosts(`/${id}`).then(twatt => { setParentTwatt(twatt.data); console.log(twatt); }).catch(err => console.error(err));
        getPosts(`/replies/${id}`, 0).then(twatts => {
            setReplies(twatts.data);
             console.log(twatts) })
            .catch(err => console.error(err));

    }, [])

    return (
        <div className="SinglePost">
                {parentTwatt && <Twatt id={parentTwatt.id} date={parentTwatt.date} user={parentTwatt.user} text={parentTwatt.text} />}
                {localStorageService.getAccessToken()&&parentTwatt&&<MessageField parentId={parentTwatt.id}/>}
                <div className='Replies'>
                    {replies && replies.map(element => {
                        return (<div><Twatt id={element.id} user={element.user} date={element.date} text={element.text} /></div>)
                    })}
                </div>

        </div>
    )
}

export default SinglePost;