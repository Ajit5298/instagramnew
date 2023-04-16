import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Compnent.css";

const Search = () => {
  const [people, setpeople] = useState();
  const[showCross, setShowCross] =useState(false);
  

  function search(e) {
    // var name= e.target.name;
    var value = e.target.value;

    var dataFromLs = JSON.parse(localStorage.getItem("instaUserData"));
     
    for (var i = 0; i < dataFromLs.length; i++) {
      if (
        dataFromLs[i].name.toUpperCase() === value.toUpperCase() ||
        dataFromLs[i].username.toUpperCase() === value.toUpperCase()
      ) {
        setpeople(dataFromLs[i]);
      }
    }
  }

  useEffect(() => {
    var currentUser =JSON.parse(localStorage.getItem("instaCurrentUser"));
    if(currentUser){
      // var setimage;
      var dataFromLs =JSON.parse(localStorage.getItem("instaUserData"));
      for(var i=0; i<dataFromLs.length; i++){
        if(dataFromLs[i].email === currentUser.currentEmail ){
          
        }
      }
    }

  },[])

  // console.log(people);

  function displayCross(){
    setShowCross(true);
  }

  function hideCross(){
    setShowCross(false);
    setpeople();
  }
  
  return (
    <div className="searchbar">
        <div>
          <div className="searchbar-search">
            <h1>Search</h1>
            <div className="searchbar-main">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="search"
                onChange={(e) => {
                  search(e);
                }}
                onClick={() =>{displayCross()}}
                // value={people}
              />
              {showCross && <i className="fa-solid fa-xmark cursor" onClick={() =>{hideCross()}}></i> }
            </div>
          </div>
        </div>

        <div className="searchbar-result">
          {people && (
            <div>
              <div>
             
              </div>
              <div>
                <p>
                  <strong>{people.username}</strong>
                </p>
                <p>{people.name}</p>
              </div>
            </div>
          )}

        </div>
      
    </div>
  );
};

export default Search;