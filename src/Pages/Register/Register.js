import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css'
import SocialLogin from '../Login/SocialLogin/SocialLogin';


const Register = () => {
  const [
    createUserWithEmailAndPassword,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
  const [updateProfile, updating] = useUpdateProfile(auth);
 
  

  const navigate = useNavigate();

//handle submit form 
  const handleFormSubmit = async (event)=>{
    event.preventDefault();
    const name =  event.target.name.value;
    const email =  event.target.email.value;
    const password = event.target.password.value
    console.log(name, email, password );
    createUserWithEmailAndPassword(email, password);

    await createUserWithEmailAndPassword(email, password,)
    await updateProfile({ displayName:name });
    console.log('Updated profile');
    navigate('/home')

    

  }


  const navigateLogin =()=>{
    navigate('/login')
  }

  if(loading || updating){
    return 
  }

    return (
        <div className='register'>
            <div className="bg-color2 ">
      <Container>
        <Row className="justify-content-md-center pt-5 pb-5 ">
          <Col className="bg-white py-5   rounded">
            <h4 className="pt-1 text-primary  text-center">Register Please !</h4>

            <Form onSubmit={handleFormSubmit}  className="w-75 mx-auto ">


            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className='' >Name</Form.Label>
                <Form.Control name='name'  type="Name" placeholder=" Enter Your Full Name" required />
                <Form.Control.Feedback type="invalid">
                 Please Enter Your Full Name .
               </Form.Control.Feedback>
              </Form.Group>
         

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-dark' >Email address</Form.Label>
                <Form.Control name='email'  type="email" placeholder="Enter Your Email" required />
                <Form.Text className="text-dark">
                  We'll never share your email with anyone else.
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                Please provide a valid Email.
            </Form.Control.Feedback>
              </Form.Group>

           


              <Form.Group className="mb-2" controlId="formBasicConfirmPassword">
                <Form.Label className='' > Password</Form.Label>
                <Form.Control name='password'  type="password" placeholder=" Enter Your Password" required />
                <Form.Control.Feedback type="invalid">
                 Please provide a valid password.
               </Form.Control.Feedback>
              </Form.Group>

              <p className="text-danger">{error}</p>


              <Button variant="primary w-100 mb-1" className='mb-0' type="submit">
              Register
              </Button>
              <p className=""> Already Register :  <Link onClick={navigateLogin} className="text-primary fw-normal text-decoration-none" to='/login'> Login Here</Link> </p>
            </Form>
            <SocialLogin></SocialLogin>
          </Col>
        </Row>
      </Container>
    </div>
        </div>
    );
};

export default Register;