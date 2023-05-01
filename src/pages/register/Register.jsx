import "./register.css";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {auth} from '../../firebaseConfig'

export default function Register() {

  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [currentCity,setCurrentCity] = useState("");
  const [relationship,setRelationship] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [user,setUser] = useState({});
  const navigate = useNavigate();


 onAuthStateChanged(auth,(currentUser) => {
  setUser(currentUser)
 })

 const handleSignUp = async (e) => {

  e.preventDefault()

  if(password !== confirmPassword){
   window.alert('Wrong password')
  }

  



  try{
    const user = await createUserWithEmailAndPassword(auth,email,password);
    const res = await fetch('https://finalapp-f210f-default-rtdb.firebaseio.com/users.json',{
    method:'POST',
    headers:{
      "Cpntent-Type":'application/json'
    },
    body:JSON.stringify({
      email,
      username:name,
      currentCity,
      relationship,
      'Posts': [],
    })
  })
    navigate('/')


  }catch(err){
  }


 }

 

  return (<>
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social Media.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" method="POST" onSubmit={handleSignUp}>
            <input placeholder="Name" onInput={(e) => setName(e.target.value)}  required={true}  className="loginInput" />
           
            <input placeholder="Email" required={true}  onInput={(e) => setEmail(e.target.value)} type='email' className="loginInput" />
            <input placeholder="Current City" required={true}  onInput={(e) => setCurrentCity(e.target.value)} type='text' className="loginInput" />
            <input placeholder="relationship" required={true}  onInput={(e) => setRelationship(e.target.value)} type='text' className="loginInput" />
             
            <input placeholder="Password" required={true}  type='password' onInput={(e) => setPassword(e.target.value)} minLength={6} className="loginInput" />
            <input placeholder="Password Again" required type="password" onInput={(e) => setConfirmPassword(e.target.value)} className="loginInput" />
            <button type='submit' className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
    
    </>
  );
}
