import { useEffect, useState } from "react";
import { getGroup } from "../../helpers/apiHandler";
import MessageField from "../MessageField";
import Posts from "../posts/Posts";
import GroupDetails from "./groupPage/GroupDetails";
import { useParams } from 'react-router-dom';
import RecommendGroups from "./RecommendGroups";
import localStorageService from "../../helpers/localStorageService";

const GroupMain = (props)=>{
//TODO
// Name, description, admin(Owner), users, tweets

const [group, setGroup] = useState();
const { id } = useParams();
useEffect(()=>{
  getGroup(id.valueOf()).then((res)=>{console.log(res); setGroup(res.data)}).catch((err)=>console.error(err));
},[])
    return(
        <div>

        <div className="container-fluid gedf-wrapper">
          <div className="row">
          <div className="col-md-3">
            {/*Left Column*/}
            {/*Group details*/}
            {group&&<GroupDetails groupDetails={group}/>}
          </div>
          <div className="col-md-6 gedf-main">
            {/*Middle Column*/}
            {/* Group submit post if member */}
            {/*Group posts*/}
            {localStorageService.getAccessToken()&&<MessageField/>}
            {group&&<Posts endpoint={`/group/${group.id}`}/>}
          </div>
          <div className="col-md-3">
            {/* Right Column */}
            {/*Recommend Groups*/}
            <RecommendGroups/>
          </div>
          </div>
        </div>
      </div>
    )
}

export default GroupMain;