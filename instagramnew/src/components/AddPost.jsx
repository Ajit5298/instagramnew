import React, { useState } from "react";

function AddPost() {
  const [post, setPost] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    
    const currentUser = JSON.parse(localStorage.getItem("instaCurrentUser"));
    const usersData = JSON.parse(localStorage.getItem("instaUserData")) || [];
    const updatedUsersData = usersData.map(user => {
      if (user.email === currentUser) {
        return { ...user, posts: [...(user.posts || []), post] };
      }
      return user;
    });
    localStorage.setItem("instaUserData", JSON.stringify(updatedUsersData));
    
    setPost("");
  }
  
  function handleChange(e) {
    setPost(e.target.value);
  }

  return (
    <div>
      <h1>Add a Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Post:
          <input type="url" placeholder="imge" onChange={handleChange} /><br/>
          Caption:
          <input type="text" placeholder="caption" onChange={handleChange} /><br/>
        </label>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default AddPost;