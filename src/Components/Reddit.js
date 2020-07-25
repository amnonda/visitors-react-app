import React, { useState, useEffect } from "react";
import axios from 'axios'

function Reddit() {
  const [posts, setPosts] = useState([]);
  const [stam, setStam] = useState(5);

 useEffect(() => {
   axios.get(`https://www.reddit.com/r/reactjs.json`)
   .then(res => {
     const newPosts = res.data.data.children
     .map(obj => obj.data);

     setPosts(newPosts);
     setStam(stam+1)
   }) ;
 }, []);

  return (
    <div>
    <h1>/r/reachjs</h1>
    <ul>
      {posts.map(post => (
        <li  key={post.id}>
        <a href={post.url}>{post.title}</a>
        <br></br>
        <a> Name: {post.author_fullname} Score: {post.score}</a>
        </li>
      ))}
      </ul>
  </div>

  );
}

export default Reddit;
// ReactDOM.render(<Reddit />, document.getElementById("root"));
