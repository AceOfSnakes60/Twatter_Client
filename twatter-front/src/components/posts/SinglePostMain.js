import SinglePost from "./SinglePost"
import { useParams } from 'react-router-dom';
import localStorageService from "../../helpers/localStorageService";
import UserBar from "../user/UserBar";
import LogIn from "../user/LogIn";
import RecommendGroups from "../groups/RecommendGroups";

const SinglePostMain = (props) =>{
    const { id } = useParams();
    return(
    <div>

        <div className="container-fluid gedf-wrapper">
          <div className="row">
          <div className="col-md-3">
              {localStorageService.getAccessToken()?<UserBar/>:<LogIn/>} {/*Use Context for logged user*/}
          </div>
          <div className="col-md-6 gedf-main">
            
            <SinglePost twattId={id}/>
          </div>
          <div className="col-md-3">
              <RecommendGroups/>
          </div>
          </div>
        </div>
      </div>)
}
export default SinglePostMain;