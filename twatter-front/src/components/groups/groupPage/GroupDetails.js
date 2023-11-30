import { useState } from "react";

const GroupDetails = (props)=>{

    const [group, setGroup] = useState(props.groupDetails);

    return(
        <div>
            <h2>{group.name}</h2>
            <div>{group.description}</div>
            <div>{group.createdAt}</div>
            <div>{group.admin.username}</div>
            <div>If User is owner add edit button</div>
            {group.isOwner&&<button>Edit</button>}
        </div>
    )
}

export default GroupDetails;