import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useState } from 'react';
import { postGroup } from '../../helpers/apiHandler';


const CreateGroup = ()=>{

    const [description, setDescription] = useState('')
    const [name, setName] = useState('');

    const handleSubmit = (event)=>{
        const data = {
            name: name,
            description: description
          }
          console.log(data.text);
          postGroup(data).then(res=>{console.log(res)}).catch(err => console.error(err));
          
    }

    const handleNameChange = (event) =>{
        setName(event.target.value)
    }
    const handleTextChange = (event) => {
        setDescription(event.target.value);
      }

    return(
        <MDBContainer fluid className='d-flex align-items-center justify-content-center'>
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{maxWidth: '600px'}}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Create a group:</h2>
            <MDBInput wrapperClass='mb-4' label='Group Name' size='lg' id='name' type='text' onChange={handleNameChange}/>
            <textarea className="form-control" id="message" rows="3" placeholder="Your group description" onChange={handleTextChange}></textarea>
            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={event=>handleSubmit(event)}>Register</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    )
}

export default CreateGroup;