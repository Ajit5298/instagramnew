import "./Compnent.css";
import Sidebar from "./Sidebar";

function Profile() {
    return (
        <div id="homePage">
            <Sidebar />
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
    );
}

export default Profile;