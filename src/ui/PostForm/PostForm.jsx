import { useState } from "react";

import ControledInput from "../ControledInput/ControledInput";
import MyButton from "../MyButton/MyButton";

const PostForm = ({posts, addPostHandler}) => {
    const [post, setPost] = useState({});
    const [resetSignal, setResetSignal] = useState(false);

    const titleHandler = (title) => {
        setPost({...post, title});
    };

    const descriptionHandler = (description) => {
        setPost({...post, description});
    };

    const handleSubmit = (e) => {
        console.log(e);
        
        e.preventDefault();
        addPostHandler([...posts, { id: posts[posts.length - 1].id + 1, title: post.title, description: post.description }]);
        setResetSignal(resetState => !resetState);
    }

    return (
        <form action="">
            <ControledInput placeholder="Title" value={post.title} handler={titleHandler} debounceInterval="1000" resetSignal={resetSignal} />
            <ControledInput placeholder="Description" value={post.description} handler={descriptionHandler} debounceInterval="1000" resetSignal={resetSignal} />
            <MyButton handler={handleSubmit} submit={true}>Create post</MyButton>
        </form>
    )
}

export default PostForm