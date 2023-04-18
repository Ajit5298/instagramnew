import "./Compnent.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {

    const [post, setPost] = useState({
        caption: "",
        image: "",
        username: "",
        useremail: "",
    });
    const [userPosts, setUserPosts] = useState([]);
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("instaCurrentUser")));

    useEffect(() => {
        setUserInfo(JSON.parse(localStorage.getItem("instaCurrentUser")));
        const userPostsFromLs = JSON.parse(localStorage.getItem("instaPost")) || [];
        const filteredUserPosts = userPostsFromLs.filter(post => post.useremail === userInfo.currentEmail);
        setUserPosts(filteredUserPosts);
    }, [setPost]);

    // useEffect(() => {
    //     const userPostsFromLs = JSON.parse(localStorage.getItem("instaPost")) || [];
    //     const filteredUserPosts = userPostsFromLs.filter(post => post.useremail === userInfo.currentEmail);
    //     setUserPosts(filteredUserPosts);
    // }, [setPost, userInfo]);

    return (
        <>
            <div class="profile-main">
                <div class="profile-Sidebar">
                    <Sidebar />
                </div>
                <div class="profile">

                    <div class="profile-header">

                        <div id="profileinfo">
                            <div id="profileimg">
                                <center>
                                    <img id="pic" src="https://media.licdn.com/dms/image/D5603AQFyHIn1VcnZ8A/profile-displayphoto-shrink_100_100/0/1681618921255?e=1687392000&v=beta&t=zl9pouOQ8YIza8hm4i5KTzKudyf-iKIRE2WFRTHLdWg" />
                                </center>
                            </div>
                            <div  id="div">
                                <div id="infodiv">
                                    <span>ajit_rajkumar_kamble</span>
                                    <button id="edit">Edit Profile</button>
                                </div>
                                <div id="divF">
                                    <div id="divF1">35 posts</div>
                                    <div>326 followers</div>
                                    <div>325 following</div>

                                </div>
                                <div id="name2">
                                    <h4>Ajit Rajkumar Kamble</h4>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div class="profile-posts">
                        {userPosts.map(post => (
                            <div id="map-Post" key={post.id}>
                                <img src={post.image} alt="post" />
                                <i id="post-icons" class="fa-regular fa-heart"></i> <i id="post-icons" class="fa-regular fa-paper-plane"></i> <i id="post-icons" class="fa-regular fa-comment"></i>

                                <h2>{post.caption}</h2>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )

}
export default Profile;