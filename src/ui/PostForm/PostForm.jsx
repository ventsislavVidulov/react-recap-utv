import { useState } from "react";

import ControledInput from "../ControledInput/ControledInput";
import MyButton from "../MyButton/MyButton";

const PostForm = ({posts, addPostHandler}) => {
    const [postTitle, setPostTitle] = useState('');
    const [postTitleResetSignal, setPostTitleResetSignal] = useState(false);
    const [postDescriptionResetSignal, setPostDescriptionResetSignal] = useState(false);
    const [postDescription, setPostDescription] = useState('');

    const titleHandler = (title) => {
        setPostTitle(title);
    };

    const descriptionHandler = (description) => {
        setPostDescription(description);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPostHandler([...posts, { id: posts[posts.length - 1].id + 1, title: postTitle, description: postDescription }]);
        setPostTitleResetSignal(state => !state);
        setPostDescriptionResetSignal(state => !state);
    }

    return (
        <form action="">
            <ControledInput placeholder="Title" value={postTitle} handler={titleHandler} debounceInterval="1000" resetSignal={postTitleResetSignal} />
            <ControledInput placeholder="Description" value={postDescription} handler={descriptionHandler} debounceInterval="1000" resetSignal={postDescriptionResetSignal} />
            <MyButton handler={handleSubmit}>Create post</MyButton>
        </form>
    )
}

export default PostForm