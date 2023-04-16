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
                                    <img id="pic" src="https://media.licdn.com/dms/image/D5603AQFMQM0x_Awc7g/profile-displayphoto-shrink_400_400/0/1673520618774?e=1685577600&v=beta&t=HX4WFQeVUuFlMfZ7Ycn1bCzoOFK7IckwJdHlHNeNDzk" />
                                </center>
                            </div>
                            <div id="<Route excat path='/addstory' element={<Addstory/>} />">
                                <div id="infodiv">
                                    <span>ajit_rajkumar_kamble</span>
                                    <button id="edit">Edit Profile</button>
                                </div>
                                <div id="divF">
                                    <div>35 posts</div>
                                    <div>326 followers</div>
                                    <div>325 following</div>

                                </div>
                                <div>
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