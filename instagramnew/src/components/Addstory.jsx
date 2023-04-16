import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Compnent.css";
import { toast } from "react-hot-toast";

const AddStory = () => {
    const [userInfo, setUserInfo] = useState();
    const route = useNavigate();
    const [spost, setSpost] = useState({
        caption: "",
        image: "",
        username: "",
        useremail: "",
    });

    useEffect(() => {
        setUserInfo(JSON.parse(localStorage.getItem("instaCurrentUser")));
    }, [spost]);

    function addStory(e) {
        e.preventDefault();
        // console.log(post);

        var dataFromLs = JSON.parse(localStorage.getItem("instaStory")) || [];

        if (userInfo) {
            var obj = spost;
            obj["username"] = userInfo.currentUserName;
            obj["useremail"] = userInfo.currentEmail;
            setSpost(obj);

            dataFromLs.push(spost);
            localStorage.setItem("instaStory", JSON.stringify(dataFromLs));
        
            setSpost({
                caption: "",
                image: "",
                username: "",
                useremail: "",
            });
            toast.success("Story Posted");
        } else {
            toast.error("Login to Add Story");
        }
    }

    function fetchData(e) {
        var name = e.target.name;
        var value = e.target.value;

        setSpost({ ...spost, [name]: value });
    }

    return (
        <div id="post">
            <div>
                <div className="post-top">
                    <div
                        className="cursor"
                        onClick={() => {
                            route("/");
                        }}
                    >
                        <i className="fa-sharp fa-solid fa-arrow-left"></i>
                    </div>
                    <div>Create new Story</div>
                    <div
                        className="cursor"
                        onClick={() => {
                            route("/");
                        }}
                    >
                        X
                    </div>
                </div>
                <div className="post-mid">
                    <img
                        src="https://embedsocial.com/wp-content/uploads/2020/10/add-links-instagram-posts.jpg.webp"
                        alt="logo"
                    />
                </div>
                <div className="post-bot">
                    <div>
                        <div className="post-bot-top">
                            <div>
                                <div id="post-back"></div>
                                <p>{userInfo && userInfo["currentUserName"]}</p>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Caption"
                                    onChange={(e) => {
                                        fetchData(e);
                                    }}
                                    name="caption"
                                    value={spost.caption}
                                />
                                <input
                                    type="text"
                                    placeholder="Image Url"
                                    onChange={(e) => {
                                        fetchData(e);
                                    }}
                                    name="image"
                                    value={spost.image}
                                />
                            </div>
                        </div>
                        <div className="post-bot-bot">
                            <div>
                                <p>Add Location</p>
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div>
                                <p>Accessibility</p>
                                <i className="fa-sharp fa-solid fa-arrow-down"></i>
                            </div>
                            <div>
                                <p>Advance setting</p>
                                <i className="fa-sharp fa-solid fa-arrow-down"></i>
                            </div>
                        </div>
                        <div className="post-button">
                            <button
                                onClick={(e) => {
                                    addStory(e);
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddStory;