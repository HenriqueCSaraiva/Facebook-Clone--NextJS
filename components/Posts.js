import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.data.id}
          name={post.data.name}
          message={post.data.message}
          email={post.data.email}
          timestamp={post.data.timestamp}
          image={post.data.image}
          postImage={post.data.postImage}
        />
      ))}
    </div>
  );
}

export default Posts;
