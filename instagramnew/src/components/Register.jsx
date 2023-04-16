import { useState } from "react";
import "./Compnent.css";
import { useNavigate } from "react-router-dom";
import toast  from "react-hot-toast";
import Footer from "./Footer";

function Register() {
  const[instaUserData, setUserData] =useState({email:'',name:'',username:'',password:''});
  const route =useNavigate();

  function submit(e){
    e.preventDefault();


    var dataFromLs =JSON.parse(localStorage.getItem("instaUserData")) || [];
    var flag = false;

    for(var i=0; i<dataFromLs.length; i++){
      if(dataFromLs[i].email === instaUserData.email){
        flag =true;
      }
    }

    if(flag){
      setUserData({...instaUserData, email:''});
      toast.error("Email already Present");
    }
    else if(instaUserData.password.length <8){
      setUserData({...instaUserData, password:''})
      toast.error("password should be of 8 characters");
    }
    else{
      dataFromLs.push(instaUserData);
      localStorage.setItem("instaUserData",JSON.stringify(dataFromLs));
      setUserData({email:'',name:'',username:'',password:''});
      route('/login');
      toast.success("Signup Scucessful");
    }
  }

  function formData(e){
    var name= e.target.name;
    var value= e.target.value;

    setUserData({...instaUserData, [name]:value});
  }

  return (
    <div id="signup-fullpage">
      <div id="signup">
        <div id="signup-one">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/512px-Instagram_logo.svg.png"
            alt=""
          />
        </div>
        <div id="signup-content-info">
          <p>Sign up to see photos and videos from your friends.</p>
        </div>
        <div id="signup-five">
          <div id="signup-five-one">
            <div id="signup-five-f-one">
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div id="signup-five-f-two">
              <p>Log in with facebook</p>
            </div>
          </div>
        </div>
        <div id="signup-three">
          <fieldset>
            <legend>OR</legend>
          </fieldset>
        </div>
        <div id="signup-two">
          <form onSubmit={(e) => {submit(e)}}>
            <input name="email" type="email" placeholder="Enter your Email" onChange={(e) => {formData(e)}} value={instaUserData.email} required/>
            <br />
            <input name="name" type="text" placeholder="Enter your Full Name" onChange={(e) => {formData(e)}} value={instaUserData.name} required/>
            <br />
            <input
              name="username"
              type="text"
              placeholder="Enter your username"
              onChange={(e) => {formData(e)}}
              value={instaUserData.username}
              required 
            />
            <br />
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => {formData(e)}}
              value={instaUserData.password}
              required 
            />
            <br />
            <div id="signup-four">
              <p>
                People who use our service may have uploaded your contact
                information to Instagram. Learn more
              </p>
            </div>
            <div id="signup-content">
              <p>
                By signing up, you agree to our Terms, Privacy Policy and
                Cookies Policy.
              </p>
            </div>
            <input type="submit" value="Signup" />
          </form>
        </div>
      </div>
      <div className="login-bot">
          <p>Get the app.</p>
          <div>
            <div>
              <img
                src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                alt="store"
              />
            </div>
            <div>
              <img
                src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                alt="store"
              />
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default Register;