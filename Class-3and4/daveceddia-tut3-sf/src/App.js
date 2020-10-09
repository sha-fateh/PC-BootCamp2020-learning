import React,{useState} from 'react';
import axios from 'axios';
import './App.css';
import {Link} from 'react-router';

function Reddit() {
  const [posts, setPosts] = useState([]);

  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
    .then(res => {
      const newPosts = res.data.data.children.map(obj => obj.data);

    setPosts(newPosts);
    });
  }, []);
  
  return (
    <div class="App">
      <h1>/r/reactjs</h1>
      <ul>
        {posts.map(post =>(
          <li key={post.id}><a href={post.url}>{post.title}</a><br/>POSTED BY: {post.author_fullname}</li>
        ))}
      </ul>
    </div>
  );
}

export default Reddit;
