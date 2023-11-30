import { useEffect, useState, useParams } from "react";
import { getPostsByUser } from "../../helpers/apiHandler";
import Posts from "../posts/Posts";
import RecommendGroups from '../groups/RecommendGroups';

const UserMain = ()=>{
    const { username } = useParams();
    const [user, setUser] = useState();
    useEffect(()=>{
        getPostsByUser(username);
    }, [])
    return(
    <div>

        <div className="container-fluid gedf-wrapper">
          <div className="row">
          <div className="col-md-3">
            {/*Left Column*/}

          </div>
          <div className="col-md-6 gedf-main">
            {/*Middle Column*/}

            <Posts endpoint=""/>
          </div>
          <div className="col-md-3">
            {/* Right Column */}
            {/*Recommend Groups*/}
            <RecommendGroups/>
          </div>
          </div>
        </div>
      </div>)
}

export default UserMain;