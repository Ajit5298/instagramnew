import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import toast from "react-hot-toast";

function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const router = useNavigate();

    function checkLog(e) {
        e.preventDefault();

        var dataFromLs = JSON.parse(localStorage.getItem("instaUserData"));

        var flag = false;
        for (var i = 0; i < dataFromLs.length; i++) {
            if (
                dataFromLs[i].email === formData.email &&
                dataFromLs[i].password === formData.password
            ) {
                flag = true;
            }
        }
        if (flag) {
            localStorage.setItem("instaCurrentUser", JSON.stringify(formData.email));
            setFormData({ email: "", password: "" });
            router("/");
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
        <div>
            <center>
            
            <div id="login">
                <div className="login-page">
                <div id="img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" />
                        </div>
                   
                   

                    <div>
                        <form>
                            <input type="email" placeholder="Email" onChange={(e) => { featchData(e); }} name="email" required value={formData.email} /><br/>
                            <input type="password" placeholder="Password" onChange={(e) => { featchData(e); }} name="password" required value={formData.password} />
                        </form>
                    </div>

                    <div>
                        <button onClick={(e) => { checkLog(e); }}> Continue </button>
                        <p className="tc"> ---------------OR------------------ </p>
                    </div>
                </div>
            </div>
            </center>
        </div>

    );
}

export default Login;