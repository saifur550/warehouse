import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';



const SocialLogin = () => {
    const [ signInWithGoogle,  user, loading, error] = useSignInWithGoogle(auth);
    const [ signInWithGithub ,user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorMessage;
// loading setup
    if(loading || loading2){
        return 
      }
    if( user || user2){
        navigate('/home')
    }
// set error 
    if (error || error2) {
        errorMessage = <p className='text-danger'>Error: {error?.message} {error2?.message}</p>
    
      }
 

    return (
        <div className='container'>
            <div className="row ">
               <div className="col-md-10 mx-auto py-4 mt-2"> 
                       <div className="d-flex align-items-center">
                       <div style={{height:'2px'}} className="bg-dark w-50"></div>
                        <p className='mt-3 px-3'>or</p>
                        <div style={{height:'2px'}} className="bg-dark w-50"></div>
                       </div>

                       {
                         errorMessage  
                       }
                     
                       <button onClick={()=>signInWithGoogle()} className="btn  bg gm  btn-outline-dark">Sign in with Google</button>  <br /> <br />

                       <button  onClick={()=>signInWithGithub()} className="btn  bg fb  btn-outline-dark"> Sign In with Github </button>
               </div>
            </div>
        </div>
    );
};

export default SocialLogin;