import { getReplies, getUserById, getPostById } from '../../helpers/apiHandler'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./SinglePost.css";
import Twatt from '../Twatt';
import CenterBar from '../SendPost';


const SinglePost = (props) => {
    const { id } = useParams();
    const [parentTwatt, setParentTwatt] = useState();
    const [replies, setReplies] = useState();

    useEffect(() => {
        getPostById(id).then(twatt => { setParentTwatt(twatt); console.log(twatt); }).catch(err => console.error(err));
        getReplies(id).then(twatts => { setReplies(twatts) }).catch(err => console.error(err));

    }, [])

    return (
        <div className="SinglePost">
            <div className="col-md-6 gedf-main">
                {parentTwatt && <Twatt date={parentTwatt.date} text={parentTwatt.text} />}
                <CenterBar parentId={id} />
                <div className='Replies'>
                    {replies && replies.map(element => {
                        return (<div><Twatt id={element.id} date={element.date} text={element.text} /></div>)
                    })}
                </div>
            </div>

        </div>
    )
}

export default SinglePost;