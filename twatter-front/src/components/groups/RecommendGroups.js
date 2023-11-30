import { useEffect, useState } from "react";
import { MDBListGroup, MDBListGroupItem, MDBRipple, MDBCard, MDBCardHeader, MDBCardBody, MDBCardFooter, MDBBtn } from 'mdb-react-ui-kit';
import { getAllGroups } from "../../helpers/apiHandler";

const RecommendGroups = () => {
    const [groups, setGroups] = useState();
    useEffect(() => {
        console.log("useEffect for  groups")
        getAllGroups().then((res) => { if (res) { setGroups(res.data) }; console.log(res.data) }).catch(err => console.error(err));
    }, [])

    const limitDescription = (description, max) =>{
        if(description.length >= max){
            return description.substring(0, max)  + '[...]';
        }
        return description;
    }

    return (
        <div>
            <MDBCard>
                <MDBCardHeader>Featured Groups</MDBCardHeader>
                <MDBCardBody>
                    {groups && <MDBListGroup light>{groups.map((element) => {
                        return (
                            <MDBRipple>
                                <MDBListGroupItem tag='a' href={`/group/${element.id}`} action className='d-flex justify-content-between align-items-start' >
                                    <div className='ms-2 me-auto'>
                                        <h6 className='d-flex fw-bold align-items-start'>{element.name}</h6>
                                        <small>{element.description&&limitDescription(element.description, 30)}</small>
                                    </div>
                                    
                                </MDBListGroupItem>
                            </MDBRipple>
                        )
                    })}</MDBListGroup>}

                </MDBCardBody>
                    <MDBBtn className="d-flex fw-bold w-100 btn-sm">Show More</MDBBtn>                
            </MDBCard>
        </div>


    )
}

export default RecommendGroups;