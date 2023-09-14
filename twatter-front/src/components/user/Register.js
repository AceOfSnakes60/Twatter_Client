import { register } from "../../helpers/apiHandler";
import React, {useState} from 'react';
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

const Register = (props)=>{

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

    const handleSubmit = (event) =>{
      event.preventDefault();
      
      register(formData);
    }

    const handleInputChange = (event) => {
      const {name, value} = event.target;
      setFormData({
        ...formData,
        [name]: value,
      })
    };

    const submitHandle = (event)=>{
        const formDat = new FormData(event);
        event.preventdefault();
        const reply = register({
            username: formDat.get("username"),
            email: formDat.get("email"),
            password: formDat.get("password")
        }).then(e=>{
            props.setIsRegister(false);
            props.setIsPosts(true);
        })
        

    }
        return (
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
              <div className='mask gradient-custom-3'></div>
              <MDBCard className='m-5' style={{maxWidth: '600px'}}>
                <MDBCardBody className='px-5'>
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>
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