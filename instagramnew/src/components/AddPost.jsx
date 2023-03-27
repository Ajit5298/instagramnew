import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Compnent.css";
import { toast } from "react-hot-toast";

const AddPost = () => {
  const [userInfo, setUserInfo] = useState();
  const route = useNavigate();
  const [post, setPost] = useState({
    caption: "",
    image: "",
    username: "",
    useremail: "",
  });

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("instaCurrentUser")));
  }, [post]);

  function addPost(e) {
    e.preventDefault();
    // console.log(post);

    var dataFromLs = JSON.parse(localStorage.getItem("instaPost")) || [];

    if (userInfo) {
      var obj = post;
      obj["username"] = userInfo.currentUserName;
      obj["useremail"] = userInfo.currentEmail;
      setPost(obj);

      dataFromLs.push(post);
      localStorage.setItem("instaPost", JSON.stringify(dataFromLs));

      setPost({
        caption: "",
        image: "",
        username: "",
        useremail: "",
      });
      toast.success("Posted");
    } else {
      toast.error("Login to Add post");
    }
  }

  function fetchData(e) {
    var name = e.target.name;
    var value = e.target.value;

    setPost({ ...post, [name]: value });
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
          <div>Create new post</div>
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
                {/* <div id="post-back"></div> */}
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
                  value={post.caption}
                />
                <input
                  type="text"
                  placeholder="Image Url"
                  onChange={(e) => {
                    fetchData(e);
                  }}
                  name="image"
                  value={post.image}
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
                  addPost(e);
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
export default AddPost;