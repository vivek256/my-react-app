import "./login.css";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebaseConfig'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {

  const [loginEmail,setLoginEmail] = useState("");
  const [loginPassword,setLoginPassword] = useState("");
  const navigate =useNavigate();

  const handleSignin = async (e) => {

    e.preventDefault()
  
    try{
      const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
      
      navigate('/')
  
  
    }catch(err){
    console.log(err.message)
    window.alert('No such user registered')
    }
  
  
   }
  

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social Media.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" method="POST" onSubmit={handleSignin}>
            <input placeholder="Email"  type='email' onInput={(e) => setLoginEmail(e.target.value)} required className="loginInput" />
            <input placeholder="Password" type='password' onInput={(e) => setLoginPassword(e.target.value)} required className="loginInput" />
            <button className="loginButton" type='submit' >Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            
          </form>
          <button className="loginRegisterButton" onClick={() => navigate('/register')}>
              Create a New Account
            </button>
        </div>
      </div>
    </div>
  );
}
