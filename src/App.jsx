import "./styles/App.css";
import { useEffect, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./ui/PostForm/PostForm";

import SortComponent from "./components/SortComponent/SortComponent";
import MyModal from "./ui/MyModal/MyModal";
import MyButton from "./ui/MyButton/MyButton";

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

  const [sortedPosts, setSortedPosts] = useState([...posts])
  const [isModalVisibale, setIsModalVisibale] = useState(false);

  const addPostHandler = (posts) => {
    setPosts(posts);
    setIsModalVisibale(false);
  }

  const deletePostHandler = (postId) => {
    setPosts([...sortedPosts.filter(p => p.id !== postId)])
  }

  const sortHandler = (postsToBeSorted) => {
    setSortedPosts(postsToBeSorted);
  }

  const togleModalHandler = () => {
    setIsModalVisibale(!isModalVisibale)
  }

  return (
    <div className='app'>
      <MyModal visible={isModalVisibale} togleModalHandler={togleModalHandler}>
        <PostForm posts={sortedPosts} addPostHandler={addPostHandler} />
      </MyModal>
      <SortComponent sortHandler={sortHandler} posts={posts} />
      <MyButton onClick={togleModalHandler}>{"Add post"}</MyButton>
      <PostList posts={sortedPosts} deletePostHandler={deletePostHandler} listTitle="Posts" />
    </ div>
  )
}

export default App;
