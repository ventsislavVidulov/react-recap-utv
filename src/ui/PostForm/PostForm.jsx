import { useState } from "react";

import styles from './PostForm.module.css'

import ControledInput from "../ControledInput/ControledInput";
import MyButton from "../MyButton/MyButton";

const PostForm = ({ posts, addPostHandler }) => {
    const [post, setPost] = useState({});
    const [resetSignal, setResetSignal] = useState(false);

    const titleHandler = (title) => {
        setPost({ ...post, title });
    };

    const descriptionHandler = (description) => {
        setPost({ ...post, description });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (post.title && post.description) {
            addPostHandler([...posts, { id: posts[posts.length - 1]?.id ? posts[posts.length - 1].id + 1 : 1, title: post.title, description: post.description }]);
            setResetSignal(resetState => !resetState);
            setPost({});
        }
    }

    return (
        <form action="" className={styles.postForm}>
            <ControledInput placeholder="Title" value={post.title} handler={titleHandler} resetSignal={resetSignal} />
            <ControledInput placeholder="Description" value={post.description} handler={descriptionHandler} resetSignal={resetSignal} />
            <MyButton onClick={handleSubmit}>Create post</MyButton>
        </form>
    )
}

export default PostForm