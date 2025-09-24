import "./styles/App.css";
import { useEffect, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./ui/PostForm/PostForm";
import MySelect from "./ui/MySelect/MySelect";

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
  const [sortObject, setSortObject] = useState({ accendingDescending: 'accending', textContentSortCriterion: 'id' })
  const [sortedPosts, setSortedPosts] = useState([])

  useEffect(() => {
    if (sortObject.textContentSortCriterion === 'id') {
      setSortedPosts([...posts.sort((a, b) => sortObject.accendingDescending === 'accending' ? a.id - b.id : b.id - a.id)])
    } else  if (sortObject.textContentSortCriterion === 'title') {
      setSortedPosts([...posts.sort((a, b) => sortObject.accendingDescending === 'accending' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title))])
    } else  if (sortObject.textContentSortCriterion === 'description') {
      setSortedPosts([...posts.sort((a, b) => sortObject.accendingDescending === 'accending' ? a.description.localeCompare(b.description) : b.description.localeCompare(a.description))])
    }
  }, [sortObject, posts])

  const addPostHandler = (posts) => {
    setPosts(posts);
  }

  const deletePostHandler = (postId) => {
    setPosts(posts.filter(p => p.id !== postId))
  }

  const textContentSortHandler = (e) => {
    setSortObject({ ...sortObject, textContentSortCriterion: e.target.value });
  }

  const accendingDescendingHandler = (e) => {
    setSortObject({ ...sortObject, accendingDescending: e.target.value });
  }

    const sortChriterionHandler= (e) => {
    setSortObject({ ...sortObject, sortChriterionHandler: e.target.value });
  }

  return (
    <div className='app'>
      <MySelect
        options={
          [
            { value: "id", textContent: "Sort by id" },
            { value: "title", textContent: "Sort by title" },
            { value: "description", textContent: "Sort by description" },
          ]}
        // defaultValue="Select sort method"
        onChange={textContentSortHandler}
        value={sortObject.textContentSortCriterion}
      />
      <MySelect
        options={
          [
            { value: "accending", textContent: "Accending" },
            { value: "descending", textContent: "Descending" },
          ]}
        // defaultValue="Accending/Descending"
        onChange={accendingDescendingHandler}
        value={sortObject.accendingDescending}
      />
      <PostForm posts={posts} addPostHandler={addPostHandler} />
      <PostList posts={sortedPosts} deletePostHandler={deletePostHandler} listTitle="Posts" />
    </ div>
  )
}

export default App;
