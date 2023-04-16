import "./Compnent.css";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
// import reducer from "./Reducer/Reducer";
// import reducer, {initialState} form './Reducer/Reducer';

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useNavigate();


  function checkLog(e) {
    e.preventDefault();

    var dataFromLs = JSON.parse(localStorage.getItem("instaUserData"));

    var flag = false;
    var storeName ;
   
    for (var i = 0; i < dataFromLs.length; i++) {
      if (
        dataFromLs[i].email === formData.email &&
        dataFromLs[i].password === formData.password
      ) {
        flag = true;
        storeName = dataFromLs[i].username;
      }
    }
   
    if (flag) {
      localStorage.setItem(
        "instaCurrentUser",
        JSON.stringify({
          currentEmail: formData.email,
          currentUserName: storeName,
        })
      );
      
      setFormData({ email: "", password: "" });
      
        // dispatch({
        //     type: 'changed_name',
        //     nextName: e.target.value
        // });
    
      router('/HomePage');
      toast.success("Log in sucessful");
    } else {
      setFormData({ email: "", password: "" });
      toast.error("Please check email or password");
    }
  }

  function featchData(e) {
    var value = e.target.value;
    var name = e.target.name;
    // console.log(name,value) ;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div id="login">
      <div>
        <div className="login-top">
          <div className="login-logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/512px-Instagram_logo.svg.png"
              alt="logo"
            />
          </div>
          <div className="login-form">
            <form
              onSubmit={(e) => {
                checkLog(e);
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  featchData(e);
                }}
                value={formData.email}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  featchData(e);
                }}
                value={formData.password}
              />
              <input
                type="submit"
                value="Log in"
                onChange={(e) => {
                  featchData(e);
                }}
              />
            </form>
          </div>
          <div className="login-or">
            <fieldset>
              <legend>OR</legend>
            </fieldset>
          </div>
          <div className="login-password">
            <p>
              <i className="fa-brands fa-square-facebook"></i> Log in With
              Facebook
            </p>
            <p>Forgot Password</p>
          </div>
        </div>
        <div className="login-mid">
          <p>
            Don't have an account? <b>Sign up</b>
          </p>
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
      </div>
      <Footer />
    </div>
  );
}
export default Login;