import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function Sidebar() {
  const router = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("instaCurrentUser");
    toast.success("Logout Successfull")
    router("/login");
  }

  return (
    <div className="Side-main">
      <div className="home-sidenav">
        <div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/512px-Instagram_logo.svg.png"
              alt="logo"
            />
          </div>
          <div className="home-side-links">
            <div>
              <i className="fa-solid fa-house"></i>
              <p><a id="side-tags" href="HomePage">Home</a></p>
            </div>
            <div>
              <i class="fa-solid fa-magnifying-glass"></i>
              <p><a id="side-tags" href="search">Search</a></p>
            </div>
            <div>
              <i class="fa-regular fa-compass"></i>
              <p><a id="side-tags" href="">Explore</a></p>
            </div>
            <div>
              <i class="fa-solid fa-camera-retro"></i>
              <p><a id="side-tags" href="">Reels</a></p>
            </div>
            <div>
              <i class="fa-solid fa-location-arrow"></i>
              <p><a id="side-tags" href="">Messages</a></p>
            </div>
            <div>
              <i class="fa-regular fa-heart"></i>
              <p><a id="side-tags" href="" >Notification</a></p>
            </div>
            <div>
              <i class="fa-solid fa-plus"></i>
              <p><a id="side-tags" href="Addpost">Create</a></p>
            </div>
            <div>
            <i class="fa-solid fa-user"></i>
              <p><a id="side-tags" href="Profile">Profile</a></p>
            </div>
          </div>
        </div>
        <button id="Log-out" onClick={handleLogout}> <i class="fa-solid fa-right-from-bracket"></i> Logout</button>
        <div>
          <i class="fa-solid fa-bars"></i>
          <p>More</p>
        </div>
      </div>
    </div>
  )
}
export default Sidebar;