import "./Compnent.css";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";


function HomePage() {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const userPostsFromLs = JSON.parse(localStorage.getItem("instaPost")) || [];
    setUserPosts(userPostsFromLs);
  }, []);
  return (
    <div id="homePage">

      <div className="SidebarHome">
        <Sidebar />
      </div>




      <div>
        {userPosts.map((post, index) => (
          <div id="map-postHome" key={index}>
            <h2>{post.username}</h2>
            <img src={post.image} alt="Post" /><br />
            <i class="fa-solid fa-heart"></i><i class="fa-solid fa-share-nodes"></i> <i class="fa-solid fa-comment"></i>
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </div>




  );
}

export default HomePage;