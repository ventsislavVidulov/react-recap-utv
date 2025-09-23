import "./styles/App.css";
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./ui/PostForm/PostForm";

function App() {
  const [posts, setPosts] = useState(
    [
      {
        id: 1,
        title: "Java Script",
        description: "Java Script is a script language, used for web development and others"
      },
      {
        id: 2,
        title: "C Sharp",
        description: "C Sharp is OOP language createt by Microsoft"
      },
      {
        id: 3,
        title: "SQL",
        description: "SQL is querry language used in reletional data bases"
      }

    ]
  );
 
  const addPostHandler = (posts) => {
    setPosts(posts);
  }

  return (
    <div className='app'>
      <PostList posts={posts} listTitle="Posts" />
      <PostForm posts={posts} addPostHandler={addPostHandler}/>
    </ div>
  )
}

export default App;
