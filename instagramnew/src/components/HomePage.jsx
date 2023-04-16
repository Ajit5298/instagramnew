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
                <p>Vashi (Navi mumbai)</p>
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
            <div> <img src="data:image/jpeg;base64,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" alt="" /></div>
            <div>
              <h5>SnehaRajpurkar</h5>
              <p>Followed by elegant soul_14 - 5 more</p>
            </div>
            <div>Follow</div>
          </div>
          <div className="home-profiles">
            <div><img src="data:image/jpeg;base64,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" alt="" /></div>
            <div>
              <h5>kalpeshLambade</h5>
              <p>Followed by elegant soul_14 - 5 more</p>
            </div>
            <div>Follow</div>
          </div>
          <div className="home-profiles">
            <div> <img src="data:image/jpeg;base64,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" alt="" /></div>
            <div>
              <h5>Avinash Thorat</h5>
              <p>Followed by elegant soul_14 - 5 more</p>
            </div>
            <div>Follow</div>
          </div>
          <div className="home-profiles">
            <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-hlLa1mnf2V1p__dFMxkNjf44wHphOxH2g&usqp=CAU" alt="" /></div>
            <div>
              <h5>Ankita Parsai</h5>
              <p>Followed by elegant soul_14 - 5 more</p>
            </div>
            <div>Follow</div>
          </div>
        </div>
        <div className="home-suggestions-bot">
          <div>
            <p>About</p>
            <p>Help</p>
            <p>Press</p>
            <p>API</p>
            <p>Jobs</p>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Locations</p>
            <p>Language</p>
            <p>English</p>
            <p>Meta</p>
            <p>Verified</p>
          </div>
          <div>
            © 2023 INSTAGRAM FROM META
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;