import PostItem from "./PostItem";

const PostList = (props) => {
    return (
        <div className='app'>
            <h1 style={{ textAlign: "center" }}>{props.listTitle}</h1>
            {props.posts.length > 0
                ? props.posts.map(p =>
                    <PostItem key={p.id} id={p.id} title={p.title} description={p.description} deletePostHandler={props.deletePostHandler} />
                )
                : <h1 style ={{textAlign: "center"}}>There are no posts</h1>
            }
        </ div>
    )
}

export default PostList;