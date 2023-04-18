import "./Compnent.css";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const router = useNavigate();
  function handleClick() {
    router("/AddStory");
  }
  const [userPosts, setUserPosts] = useState([]);
  const [userStory, setUserStory] = useState([]);
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("instaCurrentUser")));

  useEffect(() => {
    const userPostsFromLs = JSON.parse(localStorage.getItem("instaPost")) || [];
    setUserPosts(userPostsFromLs);
  }, []);
  useEffect(() => {
    const userStoryFromLs = JSON.parse(localStorage.getItem("instaStory")) || [];
    setUserStory(userStoryFromLs);
  }, []);
  return (
    <div id="homePage">

      <div className="Sidenav1">
        <Sidebar />
      </div>

      <div className="home-content">
        <div id="home-story">
          <div>
            <div>
              <img onClick={handleClick} src="https://is5-ssl.mzstatic.com/image/thumb/Purple71/v4/3c/90/ae/3c90ae31-4344-1a94-f9a3-edda7bcd2b9c/source/512x512bb.jpg" alt='Add story' />
              <h3 >Add Story</h3>
            </div>
            {userStory.map((spost, index) => (
              <div key={index}>
                <img src={spost.image} alt="Post" /><br />
                <h3>{spost.username}</h3>
                
              </div>
            ))}
          </div>

        </div>

        <div className="home-add-content">
          <div>
            {userPosts.map((post, index) => (
              <div id="map-postHome" key={index}>
                <h2>{post.username}</h2>
                <p>Latur (Maharashtra)</p>
                <img src={post.image} alt="Post" /><br />
                <i id="post-icons" class="fa-regular fa-heart"></i> <i id="post-icons" class="fa-regular fa-paper-plane"></i> <i id="post-icons" class="fa-regular fa-comment"></i> <i id="Save-icon" class="fa-regular fa-bookmark"></i>
                <p id="post-caption">{post.caption}</p>
                <input type="text"  placeholder="Add comment"/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="home-suggestions">
        <div className="home-suggestions-top"><h1>{userInfo && userInfo["currentUserName"]}</h1></div>
        <div className="home-suggestions-mid">
          <div>
            <p>Suggestions for you</p>
            <p>See All</p>
          </div>
          <div className="home-profiles">
            <div> <img src="" alt="" /></div>
            <div>
              <h5>user</h5>
              <p>Followed by user - 8 more</p>
            </div>
            <div>Follow</div>
          </div>
          <div className="home-profiles">
            <div><img src="" alt="" /></div>
            <div>
              <h5>user</h5>
              <p>Followed by user - 9 more</p>
            </div>
            <div>Follow</div>
          </div>
          <div className="home-profiles">
            <div> <img src="" alt="" /></div>
            <div>
              <h5>user</h5>
              <p>Followed by user - 4 more</p>
            </div>
            <div>Follow</div>
          </div>
          <div className="home-profiles">
            <div><img src="" alt="" /></div>
            <div>
              <h5>user</h5>
              <p>Followed by user - 5 more</p>
            </div>
            <div>Follow</div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default HomePage;