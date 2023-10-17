import { register } from "../../helpers/apiHandler";
import React, {useState} from 'react';
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
import "./Register.css"
import localStorageService from "../../helpers/localStorageService";

const Register = (props)=>{
  const [errorMSG, setErrorMSG] = useState()
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

    const handleSubmit = (event) =>{
      event.preventDefault();
      console.log(formData);
      
      const response = register(formData).then(e=>{
        if(e.data.error){
          setErrorMSG(e.data.error);
        }      
      }).catch(error=>{console.error(error)});
      if(localStorageService.getAccessToken){
        navigate('/');
      }
    }

    const handleInputChange = (event) => {
      const {name, value} = event.target;
      console.log('Before setFormData:', formData);
      setFormData({
        ...formData,
        [event.target.id]: value,
      })
    };
        
        return (
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
              <div className='mask gradient-custom-3'></div>
              <MDBCard className='m-5' style={{maxWidth: '600px'}}>
                <MDBCardBody className='px-5'>
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                  {errorMSG&&<MDBCard><div style={{ color: 'red' }}>{errorMSG}</div></MDBCard>}
                  <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='username' type='text' onChange={handleInputChange}/>
                  <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='email' type='email' onChange={handleInputChange}/>
                  <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='password' type='password' onChange={handleInputChange}/>
                  <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='password-repeat' type='password'/>
                  <div className='d-flex flex-row justify-content-center mb-4'>
                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                  </div>
                  <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={event=>handleSubmit(event)}>Register</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
          );
}

export default Register