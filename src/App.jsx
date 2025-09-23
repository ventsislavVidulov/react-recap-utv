import "./styles/App.css";
import { useState } from "react";
import PostList from "./components/PostList";
import ControledInput from "./ui/ControledInput/ControledInput";
import MyButton from "./ui/MyButton/MyButton";

function App() {
  const [postTitle, setPostTitle] = useState('');
  const [postDescription, setPostDescription] = useState('');
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

  const titleHandler = (title) => {
    setPostTitle(title);
  };

  const descriptionHandler = (description) => {
    setPostDescription(description);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, { id: posts[posts.length - 1].id + 1, title: postTitle, description: postDescription}]);
    setPostTitle('');
    setPostDescription('');
  }

  return (
    <div className='app'>
      <form action="">
        <ControledInput placeholder="Title" value={postTitle} handler={titleHandler} debounceInterval="1000" />
        <ControledInput placeholder="Description" value={postDescription} handler={descriptionHandler} debounceInterval="1000" />
        <MyButton handler={handleSubmit} content={"Create post"}></MyButton>
      </form>
      <PostList posts={posts} listTitle="Posts" />
    </ div>
  )
}

export default App;
