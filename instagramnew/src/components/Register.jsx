
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import toast from "react-hot-toast";
import "./Compnent.css";

function Regiater() {
    const [instaUserData, setUserData] = useState({ name: "", email: "", userName: "", password: "", });
    const router = useNavigate();
    function submit(e) {
        e.preventDefault();

        var dataFromLs = JSON.parse(localStorage.getItem("instaUserData")) || [];

        var flag = false;
        for (var i = 0; i < dataFromLs.length; i++) {
            if (dataFromLs[i].email === instaUserData.email) {
                flag = true;
            }
        }
        if (flag) {
            setUserData({ ...instaUserData, ["email"]: "" });
            return toast.error("email already exsited");
        } else if (instaUserData.password.length < 8) {
            setUserData({ ...instaUserData, ["password"]: "" });
            toast.error("password must be 8 characters");
        } else {
            dataFromLs.push(instaUserData);
            localStorage.setItem("instaUserData", JSON.stringify(dataFromLs));
            setUserData({ email: "", name: "", userName: "", password: "" });
            router("/login");
            toast.success("Registration done");
        }
    }

    function featchData(e) {
        var value = e.target.value;
        var name = e.target.name;

        setUserData({ ...instaUserData, [name]: value });
    }
    return (
        <div>
            <center>

                <div id="sign-up">
                    <div className="signUp-page">
                        <div onClick={() => { router("/"); }} >  </div>
                        <div id="img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" />
                        </div>
                        <div>
                            <div>
                                <h3 id="text1">Sign up to see photos and videos from your friends</h3>

                            </div>
                            <div>
                                <button id="button">Log In With Facebook<a href="https://www.facebook.com"></a> </button>
                            </div>

                        </div>

                        <div>
                            <form>
                                <input id="input" type="email" placeholder="Enter Your Email" onChange={(e) => { featchData(e) }} name="email" required value={instaUserData.email} /><br />
                                <input id="input" type="text" placeholder="Full Name" onChange={(e) => { featchData(e); }} name="name" required value={instaUserData.name} /><br />
                                <input id="input" type="text" placeholder="UserName" onChange={(e) => { featchData(e); }} name="userName" required value={instaUserData.userName} /><br />
                                <input id="input" type="password" placeholder="Password" onChange={(e) => { featchData(e); }} name="password" required value={instaUserData.password} />
                            </form>
                        </div>

                        <div>

                            <p id="text2">People who use our service may have uploaded your contact information to Instagram</p>
                            <p id="text2">By signing up, you agree to our Terms, Privacy Policy and Cookies Policy</p>
                            <button id="button" onClick={(e) => submit(e)}>signUp</button>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
}
export default Regiater;