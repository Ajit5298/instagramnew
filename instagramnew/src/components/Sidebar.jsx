import "./Compnent.css";


function Sidebar(){
    return(
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
              <p>Home</p>
            </div>
            <div>
              <i class="fa-solid fa-magnifying-glass"></i>
              <p>Search</p>
            </div>
            <div>
              <i class="fa-regular fa-compass"></i>
              <p>Explore</p>
            </div>
            <div>
              <i class="fa-solid fa-camera-retro"></i>
              <p>Reels</p>
            </div>
            <div>
              <i class="fa-solid fa-location-arrow"></i>
              <p>Messages</p>
            </div>
            <div>
              <i class="fa-regular fa-heart"></i>
              <p>Notification</p>
            </div>
            <div>
              <i class="fa-solid fa-plus"></i>
              <p>Create</p>
            </div>
            <div>
              <p>Profile</p>
            </div>
          </div>
        </div>

        <div>
          <i class="fa-solid fa-bars"></i>
          <p>More</p>
        </div>
      </div>
    )
}
export default Sidebar;