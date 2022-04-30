import React ,{useRef} from "react";
import './Login.css';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import {  useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  const emailRef = useRef('')
  const passwordRef = useRef('')
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";


  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  //handle submit form 
  const handleFormSubmit = (event)=>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value
    signInWithEmailAndPassword(email, password)
   
  }




  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );


  if(loading || sending){
    return 
  }

  // redirect page 
  const navigateRegister =()=>{
    navigate('/register')
  }


  // check user exist or not
  if(user){
    navigate(from, { replace: true });
  }


  const handleResetPassword=async()=>{
    const email = emailRef.current.value
  if(email){
    await sendPasswordResetEmail(email);
    toast('Sent email');
  } else{
    toast('please enter your email address')
  }
  }
 



  return (
    <div className="login pb-5 ">
      <Container>
        <Row className="justify-content-md-center pt-5 ">
          <Col className="bg-white  rounded">
            <h4 className="pt-4 text-primary text-center">Login Please !</h4>
            <Form  onSubmit={handleFormSubmit}  className="w-75 mx-auto pt-1">
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef}  type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef}   type="password" placeholder="Password" required />
              </Form.Group>
            <p className="text-danger mt-1">{error?.message}</p>
          


              <Button variant="primary w-100 mb-1" type="Login">
                Login
              </Button>
              <p>
          Forget password 
          <span className=" text-primary pointer  navigate ms-2" onClick={handleResetPassword}>
              Reset password 
          </span>
      </p>
              <p className=""> New User ? :  <span onClick={navigateRegister} className="text-primary pointer text-decoration-none fw-normal" >Register Here</span> </p>
            </Form>
          <SocialLogin></SocialLogin>
          <ToastContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

// b644ac
