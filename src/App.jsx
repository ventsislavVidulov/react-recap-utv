import "./styles/App.css"
import PostItem from './components/PostItem';
import { useState } from "react";

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
  )

  return (
    <div className='app'>
      {
        posts.map(p =>
          <PostItem key={p.id} id={p.id} title={p.title} description={p.description} />
        )
      }
    </ div>
  )
}

export default App;
