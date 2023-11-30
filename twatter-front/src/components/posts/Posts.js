import { getPosts } from '../../helpers/apiHandler'
import {useState, useEffect} from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';


import "./Posts.css"
import Twatt from '../Twatt';


const Posts = (props)=>{
    const [posts, setPosts] = useState();

    const nextPage = ()=>{
        if(posts.totalPages-1>posts.pageable.pageNumber){
            loadPage(posts.pageable.pageNumber + 1);
        }
    }
    const prevPage = ()=>{
        if(posts.pageable.pageNumber>0){
            loadPage(posts.pageable.pageNumber - 1);
        }
    }

    const loadPage = (page)=>{
        getPosts(props.endpoint, page).then((res)=>{if(res){setPosts(res.data)}; console.log(res.data)}).catch(err=>console.error(err));
    }
    useEffect(() => {
        loadPage(0);
    }, [])


    return( 
    <div className='Posts'>
        {posts&&posts.pageable.pageNumber>0&&<MDBBtn className='prev' onClick={prevPage}>Prev</MDBBtn>}
        {posts&&posts.pageable.pageNumber<posts.totalPages-1&&<MDBBtn className='next' onClick={nextPage}>Next</MDBBtn>}

        {posts && posts.content.map(element => {
            return(<div><Twatt id={element.id} date={element.date} user={element.user} text={element.text} parentId={element.parentId}/></div>)
        })}
    </div>)
}
export default Posts;